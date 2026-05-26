'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface AboutProps {
  image?: string
}

export default function About({ image }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    'Award-winning keynote speaker and construction industry advocate',
    'Experienced leader with 15+ years in the construction field',
    'Champion of women\'s leadership and workplace empowerment',
    'Custom content with storytelling that resonates and inspires action',
    'Options beyond keynote: MC, workshop, panel facilitation',
  ]

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -skew-x-12 origin-top-right" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop'}
                alt="Kristi - Keynote Speaker"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-card p-8 rounded-2xl border border-border shadow-2xl"
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years in Construction</div>
                </div>
                <div className="w-px h-16 bg-border" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Events Annually</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary uppercase tracking-widest text-sm font-semibold">About Kristi</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
              Hi there, I&apos;m Kristi
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I&apos;m a keynote speaker passionate about empowering women in construction, leadership, and beyond. I help organizations build stronger cultures, develop confident leaders, and create workplaces where everyone can thrive.
              </p>
              <p>
                After 15+ years in the construction industry, I&apos;ve learned firsthand what it takes to break barriers, build authentic relationships, and lead with confidence. Now I share those hard-won lessons with audiences at conferences and corporate events.
              </p>
              <p>
                Whether it&apos;s women&apos;s leadership, community building, or navigating male-dominated industries, I bring real talk, real stories, and strategies that stick long after the event ends.
              </p>
            </div>

            {/* Feature list */}
            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 text-primary hover:text-primary/80 font-semibold transition-colors group"
            >
              Learn more about working with Kristi
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
