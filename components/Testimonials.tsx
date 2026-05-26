'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

interface Testimonial {
  _id: string
  quote: string
  author: string
  role?: string
  company?: string
  authorImage?: unknown
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const placeholderTestimonials: Testimonial[] = testimonials.length === 0 ? [
    {
      _id: '1',
      quote: "Kristy doesn't just deliver a keynote and walk off stage. Her words helped people recognize the unconscious biases in their relationships, behaviors, and culture. The impact lasted long after the applause faded.",
      author: 'Sarah Mitchell',
      role: 'VP of Operations',
      company: 'BuildCorp Industries',
    },
    {
      _id: '2',
      quote: "With warmth, storytelling, humor, and deep psychological insight, Kristy creates highly immersive experiences that challenge thinking and inspire real change. She's a true professional.",
      author: 'Jennifer Chen',
      role: 'Director of HR',
      company: 'Turner Construction',
    },
    {
      _id: '3',
      quote: "Outstanding presentation! Kristy's ability to connect with our audience of 500+ professionals was remarkable. Her stories resonated and her actionable advice has already made an impact in our organization.",
      author: 'Michael Rodriguez',
      role: 'Conference Chair',
      company: 'Women in Construction Summit',
    },
    {
      _id: '4',
      quote: "We've booked dozens of speakers over the years. Kristy stands out for her authenticity, preparation, and genuine care for delivering value. She exceeded our expectations in every way.",
      author: 'Lisa Thompson',
      role: 'Events Director',
      company: 'National Association of Women in Construction',
    },
  ] : testimonials

  const featuredLogos = [
    { name: 'Forbes', width: 80 },
    { name: 'TEDx', width: 70 },
    { name: 'Inc.', width: 50 },
    { name: 'Fast Company', width: 120 },
    { name: 'CNBC', width: 80 },
  ]

  return (
    <section id="testimonials" className="py-32 bg-muted/50 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
            What Event Organizers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading organizations to deliver transformative keynote experiences
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative bg-card rounded-3xl p-8 md:p-12 border border-border mb-12"
        >
          <div className="absolute top-8 left-8 text-8xl text-primary/20 font-serif">&ldquo;</div>
          
          <div className="relative z-10 grid md:grid-cols-[1fr,auto] gap-8 items-center">
            <div>
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-foreground"
              >
                {placeholderTestimonials[activeIndex].quote}
              </motion.blockquote>
              
              <motion.div
                key={`author-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                {placeholderTestimonials[activeIndex].authorImage ? (
                  <Image
                    src={typeof urlFor(placeholderTestimonials[activeIndex].authorImage) !== 'string' 
                      ? (urlFor(placeholderTestimonials[activeIndex].authorImage) as { url: () => string }).url()
                      : ''}
                    alt={placeholderTestimonials[activeIndex].author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-xl font-semibold text-primary">
                    {placeholderTestimonials[activeIndex].author.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-foreground">
                    {placeholderTestimonials[activeIndex].author}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {placeholderTestimonials[activeIndex].role}
                    {placeholderTestimonials[activeIndex].company && (
                      <>, {placeholderTestimonials[activeIndex].company}</>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex md:flex-col gap-2">
              {placeholderTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? 'bg-primary w-3 md:h-8' 
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-8 uppercase tracking-wider">
            Trusted by organizations that care about people, performance, and culture
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {featuredLogos.map((logo) => (
              <div 
                key={logo.name} 
                className="text-muted-foreground font-bold text-xl tracking-wider"
                style={{ width: logo.width }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
