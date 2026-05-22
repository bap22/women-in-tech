import { client } from '@/sanity/lib/client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SpeakerTopics from '@/components/SpeakerTopics'
import Events from '@/components/Events'
import Testimonials from '@/components/Testimonials'
import Booking from '@/components/Booking'

const HERO_QUERY = `*[_type == "hero"][0]`
const TOPICS_QUERY = `*[_type == "speakerTopic"] | order(_createdAt desc)`
const EVENTS_QUERY = `*[_type == "event" && date >= now()] | order(date asc)[0...3]`
const TESTIMONIALS_QUERY = `*[_type == "testimonial"][0...6]`

async function getData() {
  if (!client) {
    return { hero: null, topics: [], events: [], testimonials: [] }
  }
  
  const [hero, topics, events, testimonials] = await Promise.all([
    client.fetch(HERO_QUERY),
    client.fetch(TOPICS_QUERY),
    client.fetch(EVENTS_QUERY),
    client.fetch(TESTIMONIALS_QUERY),
  ])

  return { hero, topics, events, testimonials }
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="min-h-screen">
      <Header />
      <Hero data={data.hero} />
      <About />
      <SpeakerTopics topics={data.topics} />
      <Events events={data.events} />
      <Testimonials testimonials={data.testimonials} />
      <Booking />
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kristy | Women in Construction & Leadership</h3>
              <p className="text-gray-400">
                Empowering women to break barriers and build success in construction and leadership roles.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#topics" className="hover:text-white">Speaking Topics</a></li>
                <li><a href="#events" className="hover:text-white">Events</a></li>
                <li><a href="#booking" className="hover:text-white">Book Kristy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">For booking inquiries:</p>
              <a href="mailto:kristy@example.com" className="text-orange-400 hover:text-orange-300 font-semibold">
                kristy@example.com
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kristy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
