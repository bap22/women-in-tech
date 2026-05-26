import { client } from '@/sanity/lib/client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedIn from '@/components/FeaturedIn'
import About from '@/components/About'
import VideoSection from '@/components/VideoSection'
import SpeakerTopics from '@/components/SpeakerTopics'
import Events from '@/components/Events'
import Testimonials from '@/components/Testimonials'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'

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
    <main className="min-h-screen bg-background">
      <Header />
      <Hero data={data.hero || {}} />
      <FeaturedIn />
      <About />
      <VideoSection />
      <SpeakerTopics topics={data.topics} />
      <Events events={data.events} />
      <Testimonials testimonials={data.testimonials} />
      <Booking />
      <Footer />
    </main>
  )
}
