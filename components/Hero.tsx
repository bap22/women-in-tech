import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

interface HeroProps {
  data: {
    title?: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
    backgroundImage?: any
  }
}

export default function Hero({ data }: HeroProps) {
  if (!data) return null

  const imageUrl = data.backgroundImage ? urlFor(data.backgroundImage) : null

  return (
    <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900" />
      )}
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {data.title || 'Women in Construction & Leadership'}
        </h1>
        {data.subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {data.subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {data.ctaText && data.ctaLink && (
            <a
              href={data.ctaLink}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105"
            >
              {data.ctaText}
            </a>
          )}
          {data.secondaryCtaText && data.secondaryCtaLink && (
            <a
              href={data.secondaryCtaLink}
              className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-lg transition-all border border-white/30"
            >
              {data.secondaryCtaText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
