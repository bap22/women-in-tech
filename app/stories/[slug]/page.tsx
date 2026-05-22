import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const STORY_QUERY = `*[_type == "featuredStory" && slug.current == $slug][0]`

async function getStory(slug: string) {
  if (!client) return null
  const story = await client.fetch(STORY_QUERY, { slug })
  if (!story) notFound()
  return story
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = await getStory(slug)
  
  if (!story) return null
  
  const imageUrl = story.featuredImage ? urlFor(story.featuredImage) : null
  const authorImageUrl = story.authorImage ? urlFor(story.authorImage) : null

  return (
    <article className="min-h-screen bg-white">
      <div className="relative h-[400px] md:h-[500px]">
        {imageUrl && typeof imageUrl !== 'string' ? (
          <Image
            src={imageUrl.width(1920).height(1080).url()}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900" />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{story.title}</h1>
            <div className="flex items-center justify-center gap-4">
              {authorImageUrl && typeof authorImageUrl !== 'string' && (
                <Image
                  src={authorImageUrl.width(48).height(48).url()}
                  alt={story.author || 'Author'}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              )}
              <div className="text-left">
                <p className="font-semibold">{story.author}</p>
                {story.publishedAt && (
                  <p className="text-gray-300 text-sm">
                    {new Date(story.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {story.content?.map((block: any, index: number) => (
            <div key={index} className="mb-6">
              {block._type === 'block' && (
                <p className="text-gray-700 leading-relaxed">
                  {block.children?.map((child: any, i: number) => (
                    <span key={i}>{child.text}</span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
