import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

interface HeroProps {
  data: {
    title?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
    backgroundImage?: any
  }
}

export default function Hero({ data }: HeroProps) {
  if (!data) return null

  const imageUrl = data.backgroundImage ? urlFor(data.backgroundImage) : null

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {imageUrl && typeof imageUrl !== 'string' ? (
        <>
          <Image
            src={imageUrl.width(1920).height(1080).url()}
            alt={data.title || 'Hero'}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900" />
      )}
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {data.title || 'Women in Tech'}
        </h1>
        {data.subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {data.subtitle}
          </p>
        )}
        {data.ctaText && data.ctaLink && (
          <a
            href={data.ctaLink}
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105"
          >
            {data.ctaText}
          </a>
        )}
      </div>
    </section>
  )
}
