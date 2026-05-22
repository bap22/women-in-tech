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
  image?: any
}

interface EventsProps {
  events: Event[]
}

export default function Events({ events }: EventsProps) {
  // Placeholder events if none from Sanity
  const placeholderEvents: Event[] = events.length === 0 ? [
    {
      _id: '1',
      title: 'Women in Construction Leadership Summit 2026',
      description: 'A full-day summit featuring keynote speakers, panel discussions, and networking opportunities for women leaders in construction.',
      date: '2026-06-15T09:00:00Z',
      location: 'Denver Convention Center, Denver, CO',
      isVirtual: false,
      link: 'https://example.com/summit-2026',
    },
    {
      _id: '2',
      title: 'Breaking Barriers Workshop',
      description: 'Interactive workshop on overcoming challenges and bias in the workplace. Includes breakout sessions and group activities.',
      date: '2026-06-28T14:00:00Z',
      location: 'Online',
      isVirtual: true,
      link: 'https://example.com/workshop-june',
    },
    {
      _id: '3',
      title: 'Networking Night: Construction Professionals',
      description: 'Casual evening mixer for construction industry professionals. Great opportunity to expand your network and share experiences.',
      date: '2026-07-10T18:00:00Z',
      location: 'The Big Picture Brewery, Denver, CO',
      isVirtual: false,
      link: 'https://example.com/networking-july',
    },
    {
      _id: '4',
      title: 'Executive Leadership Masterclass',
      description: 'Intensive 2-day masterclass on executive presence, strategic thinking, and leading high-performing teams.',
      date: '2026-07-22T09:00:00Z',
      location: 'Hyatt Regency, Chicago, IL',
      isVirtual: false,
      link: 'https://example.com/masterclass-july',
    },
    {
      _id: '5',
      title: 'Virtual Fireside Chat: Career Transitions',
      description: 'Join Kristy for an intimate conversation about navigating career transitions and pivoting into leadership roles.',
      date: '2026-08-05T17:00:00Z',
      location: 'Online',
      isVirtual: true,
      link: 'https://example.com/fireside-august',
    },
  ] : events

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: 'var(--font-playfair)' }}>
          Upcoming Events
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Join our community at workshops, meetups, and conferences
        </p>
        
        <div className="space-y-6">
          {placeholderEvents.map((event) => {
            const imageUrl = event.image ? urlFor(event.image) : null
            
            return (
            <div
              key={event._id}
              className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              {imageUrl && typeof imageUrl !== 'string' && (
                <div className="relative md:w-64 h-48 md:h-auto flex-shrink-0">
                  <Image
                    src={imageUrl.width(400).height(300).url()}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {event.isVirtual ? (
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      Virtual
                    </span>
                  ) : (
                    <span className="bg-accent/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      In-Person
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-2">
                    📅 {formatDate(event.date)}
                  </span>
                  {event.location && (
                    <span className="flex items-center gap-2">
                      📍 {event.location}
                    </span>
                  )}
                </div>
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-full transition-colors"
                  >
                    Register / Learn More
                  </a>
                )}
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
