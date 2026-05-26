import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

interface Story {
  _id: string
  title: string
  excerpt: string
  slug: { current: string }
  featuredImage?: any
  author?: string
  authorImage?: any
  publishedAt?: string
}

interface FeaturedStoriesProps {
  stories: Story[]
}

export default function FeaturedStories({ stories }: FeaturedStoriesProps) {
  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Featured Stories
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Inspiring journeys from women building their path in construction and leadership
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => {
            const imageUrl = story.featuredImage ? urlFor(story.featuredImage) : null
            const authorImageUrl = story.authorImage ? urlFor(story.authorImage) : null
            
            return (
            <article
              key={story._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {imageUrl && typeof imageUrl !== 'string' && (
                <div className="relative h-48">
                  <Image
                    src={imageUrl.width(600).height(400).url()}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {authorImageUrl && typeof authorImageUrl !== 'string' && (
                      <Image
                        src={authorImageUrl.width(40).height(40).url()}
                        alt={story.author || 'Author'}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <span className="text-sm text-gray-600">{story.author}</span>
                  </div>
                  <Link
                    href={`/stories/${story.slug.current}`}
                    className="text-pink-600 hover:text-pink-700 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          )})}
        </div>
        
        {stories.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            <p>Stories coming soon! Check back later for inspiring content.</p>
          </div>
        )}
      </div>
    </section>
  )
}
