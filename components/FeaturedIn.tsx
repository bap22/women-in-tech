'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function FeaturedIn() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const publications = [
    { name: 'Forbes', logo: '/logos/forbes.svg' },
    { name: 'TEDx', logo: '/logos/tedx.svg' },
    { name: 'Inc.', logo: '/logos/inc.svg' },
    { name: 'Fast Company', logo: '/logos/fast-company.svg' },
    { name: 'CNBC', logo: '/logos/cnbc.svg' },
    { name: 'Harvard Business Review', logo: '/logos/hbr.svg' },
  ]

  return (
    <section className="py-16 bg-background border-y border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-8">
            Featured in and trusted by
          </p>
          
          {/* Scrolling logo marquee */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-16 items-center">
              {[...publications, ...publications].map((pub, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center w-32 h-12 opacity-40 hover:opacity-100 transition-opacity"
                >
                  <span className="text-xl font-bold tracking-wider text-muted-foreground">
                    {pub.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
