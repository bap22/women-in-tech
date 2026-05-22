import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

interface Testimonial {
  _id: string
  quote: string
  author: string
  role?: string
  company?: string
  authorImage?: any
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Community Voices
        </h2>
        <p className="text-center text-gray-200 mb-12 text-lg">
          Hear from women who are shaping the future of technology
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const authorImageUrl = testimonial.authorImage ? urlFor(testimonial.authorImage) : null
            
            return (
            <div
              key={testimonial._id}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                {authorImageUrl && typeof authorImageUrl !== 'string' ? (
                  <Image
                    src={authorImageUrl.width(60).height(60).url()}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                    {testimonial.author.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-gray-300 text-sm">
                      {[testimonial.role, testimonial.company].filter(Boolean).join(' at ')}
                    </p>
                  )}
                </div>
              </div>
              <blockquote className="text-gray-100 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>
            )
          })}
        </div>
        
        {testimonials.length === 0 && (
          <div className="text-center text-gray-300 py-12">
            <p>Community testimonials coming soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
