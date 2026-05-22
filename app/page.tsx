import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Hero from '@/components/Hero'
import FeaturedStories from '@/components/FeaturedStories'
import Events from '@/components/Events'
import Resources from '@/components/Resources'
import Testimonials from '@/components/Testimonials'

const HERO_QUERY = `*[_type == "hero"][0]`
const STORIES_QUERY = `*[_type == "featuredStory"] | order(publishedAt desc)[0...3]`
const EVENTS_QUERY = `*[_type == "event" && date >= now()] | order(date asc)[0...3]`
const RESOURCES_QUERY = `*[_type == "resource" && featured == true][0...4]`
const TESTIMONIALS_QUERY = `*[_type == "testimonial"][0...3]`

async function getData() {
  if (!client) {
    return { hero: null, stories: [], events: [], resources: [], testimonials: [] }
  }
  
  const [hero, stories, events, resources, testimonials] = await Promise.all([
    client.fetch(HERO_QUERY),
    client.fetch(STORIES_QUERY),
    client.fetch(EVENTS_QUERY),
    client.fetch(RESOURCES_QUERY),
    client.fetch(TESTIMONIALS_QUERY),
  ])

  return { hero, stories, events, resources, testimonials }
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="min-h-screen">
      <Hero data={data.hero} />
      <FeaturedStories stories={data.stories} />
      <Events events={data.events} />
      <Resources resources={data.resources} />
      <Testimonials testimonials={data.testimonials} />
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Women in Tech</h3>
              <p className="text-gray-400">
                Empowering women to thrive in technology careers through community, resources, and opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#stories" className="hover:text-white">Stories</a></li>
                <li><a href="#events" className="hover:text-white">Events</a></li>
                <li><a href="#resources" className="hover:text-white">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400">Join our community and stay updated!</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Women in Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
