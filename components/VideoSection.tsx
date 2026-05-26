'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// Pre-defined particle positions to avoid hydration mismatch
const particles = [
  { x: 10, y: 20, duration: 12, delay: 0 },
  { x: 25, y: 60, duration: 15, delay: 2 },
  { x: 40, y: 30, duration: 18, delay: 1 },
  { x: 55, y: 80, duration: 14, delay: 3 },
  { x: 70, y: 45, duration: 16, delay: 0.5 },
  { x: 85, y: 15, duration: 13, delay: 2.5 },
  { x: 15, y: 75, duration: 17, delay: 1.5 },
  { x: 60, y: 55, duration: 11, delay: 4 },
  { x: 90, y: 35, duration: 19, delay: 0.8 },
  { x: 5, y: 90, duration: 15, delay: 3.5 },
]

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <section className="py-32 bg-muted/30 relative overflow-hidden" ref={ref}>
        {/* Animated background elements - only render after mount to avoid hydration issues */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                }}
                animate={{
                  y: [0, -200],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-semibold">See Kristi in Action</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
              If you haven&apos;t seen me speak before,<br />
              <span className="text-primary">maybe start here</span>
            </h2>
          </motion.div>

          {/* Video Thumbnail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=675&fit=crop"
                alt="Kristi speaking at a conference"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors" />
              
              {/* Play Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
                  <svg className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </motion.div>

              {/* Video Duration */}
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                2:45
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-primary rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-primary rounded-br-3xl" />
          </motion.div>

          {/* Video Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12 text-center"
          >
            {[
              { value: '2.5M+', label: 'Video Views' },
              { value: '50K+', label: 'Social Followers' },
              { value: '4.9', label: 'Speaker Rating' },
            ].map((stat, index) => (
              <div key={index} className="min-w-[120px]">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-muted rounded-xl overflow-hidden">
              {/* Replace with actual video embed */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Video Player Placeholder</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
