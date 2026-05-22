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
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Upcoming Events
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Join our community at workshops, meetups, and conferences
        </p>
        
        <div className="space-y-6">
          {events.map((event) => {
            const imageUrl = event.image ? urlFor(event.image) : null
            
            return (
            <div
              key={event._id}
              className="flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Virtual
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
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
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
                  >
                    Register / Learn More
                  </a>
                )}
              </div>
            </div>
            )
          })}
        </div>
        
        {events.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            <p>No upcoming events at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
