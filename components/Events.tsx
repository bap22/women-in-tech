'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

interface Event {
  _id: string
  title: string
  description: string
  date: string
  location?: string
  isVirtual?: boolean
  link?: string
  image?: unknown
}

interface EventsProps {
  events: Event[]
}

export default function Events({ events }: EventsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const placeholderEvents: Event[] = events.length === 0 ? [
    {
      _id: '1',
      title: 'Women in Construction Leadership Summit',
      description: 'A full-day summit featuring keynote speakers, panel discussions, and networking opportunities.',
      date: '2026-06-15T09:00:00Z',
      location: 'Denver Convention Center, CO',
      isVirtual: false,
    },
    {
      _id: '2',
      title: 'Breaking Barriers Workshop',
      description: 'Interactive workshop on overcoming challenges and bias in the workplace.',
      date: '2026-06-28T14:00:00Z',
      location: 'Virtual Event',
      isVirtual: true,
    },
    {
      _id: '3',
      title: 'Executive Leadership Masterclass',
      description: 'Intensive 2-day masterclass on executive presence and strategic thinking.',
      date: '2026-07-22T09:00:00Z',
      location: 'Hyatt Regency, Chicago, IL',
      isVirtual: false,
    },
  ] : events

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      year: date.getFullYear(),
    }
  }

  const eventTypes = [
    { title: 'Conferences', description: 'Keynotes that energize and inspire large audiences', icon: '01' },
    { title: 'Corporate Events', description: 'Leadership development and team building sessions', icon: '02' },
    { title: 'Workshops', description: 'Interactive half-day and full-day training programs', icon: '03' },
    { title: 'Virtual Events', description: 'Engaging online presentations and webinars', icon: '04' },
  ]

  return (
    <section id="speaking" className="py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">Speaking Engagements</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
            Where Kristi Speaks
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From intimate workshops to stadium-sized conferences, Kristi delivers transformative experiences tailored to every format.
          </p>
        </motion.div>

        {/* Event Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {eventTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="text-5xl font-bold text-muted/50 mb-4 group-hover:text-primary/30 transition-colors">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-muted-foreground text-sm">{type.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-serif font-bold mb-8">Upcoming Events</h3>
        </motion.div>

        <div className="space-y-4">
          {placeholderEvents.map((event, index) => {
            const imageUrl = event.image ? urlFor(event.image) : null
            const date = formatDate(event.date)
            
            return (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="flex flex-col md:flex-row items-stretch bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all group"
              >
                {/* Date Box */}
                <div className="md:w-32 bg-muted p-6 flex flex-col items-center justify-center shrink-0">
                  <div className="text-4xl font-bold text-primary">{date.day}</div>
                  <div className="text-sm text-muted-foreground">{date.month}</div>
                  <div className="text-sm text-muted-foreground">{date.year}</div>
                </div>

                {/* Event Image (if available) */}
                {imageUrl && typeof imageUrl !== 'string' && (
                  <div className="relative md:w-48 h-32 md:h-auto shrink-0">
                    <Image
                      src={imageUrl.width(400).height(300).url()}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {event.isVirtual ? (
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        Virtual
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-foreground bg-secondary px-2 py-1 rounded">
                        In-Person
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">{event.description}</p>
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <div className="p-6 flex items-center">
                  <a
                    href={event.link || '#contact'}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors"
                  >
                    <svg className="w-5 h-5 group-hover:text-primary-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
