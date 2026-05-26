'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface SpeakerTopic {
  _id: string
  title: string
  description: string
  duration?: string
  audience?: string
  icon?: string
}

interface SpeakerTopicsProps {
  topics: SpeakerTopic[]
}

export default function SpeakerTopics({ topics }: SpeakerTopicsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const placeholderTopics: SpeakerTopic[] = topics.length === 0 ? [
    {
      _id: '1',
      title: 'Breaking Barriers in Construction',
      description: 'A powerful keynote that explores how to overcome gender biases, build credibility, and thrive in male-dominated industries. Kristi shares real stories from the field and actionable strategies that audience members can implement immediately.',
      duration: '45-60 min',
      audience: 'Construction Professionals',
    },
    {
      _id: '2',
      title: 'Leadership Lessons from the Job Site',
      description: 'Practical leadership strategies that translate from construction sites to boardrooms. Learn how to build trust, communicate with authority, and lead diverse teams through challenging projects and high-stakes situations.',
      duration: '60 min',
      audience: 'Leadership Teams',
    },
    {
      _id: '3',
      title: 'Building Your Personal Brand',
      description: 'How to create meaningful professional connections, establish thought leadership, and accelerate your career growth. This interactive session includes networking strategies and personal branding exercises.',
      duration: '45 min',
      audience: 'Women in Business',
    },
    {
      _id: '4',
      title: 'Confidence & Communication Mastery',
      description: 'Master the art of speaking up, negotiating effectively, and commanding respect in any room. Kristi reveals the communication techniques that helped her rise through the ranks in a tough industry.',,
      duration: '60 min',
      audience: 'General Audience',
    },
  ] : topics

  return (
    <section id="keynotes" className="py-32 bg-muted/50 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">Keynote Topics</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
            Presentations That Transform
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every audience is different. Kristi customizes content to resonate with your specific challenges, industry, and goals.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Topic Cards */}
          <div className="space-y-4">
            {placeholderTopics.map((topic, index) => (
              <motion.div
                key={topic._id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setActiveIndex(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-card border-l-4 border-primary shadow-lg'
                    : 'bg-background/50 border-l-4 border-transparent hover:bg-card/50'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 transition-colors ${
                      activeIndex === index ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {topic.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      {topic.duration && (
                        <span className="text-muted-foreground">
                          {topic.duration}
                        </span>
                      )}
                      {topic.audience && (
                        <span className="text-primary">
                          {topic.audience}
                        </span>
                      )}
                    </div>
                  </div>
                  <svg 
                    className={`w-6 h-6 flex-shrink-0 transition-transform ${
                      activeIndex === index ? 'text-primary rotate-90' : 'text-muted-foreground'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Topic Detail */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-2xl p-8 border border-border lg:sticky lg:top-32 h-fit"
          >
            <div className="aspect-video bg-muted rounded-xl mb-6 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-primary/25">
                  <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                Watch Preview
              </div>
            </div>
            
            <h3 className="text-2xl font-serif font-bold mb-4">
              {placeholderTopics[activeIndex].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {placeholderTopics[activeIndex].description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-lg">
                {placeholderTopics[activeIndex].duration}
              </span>
              <span className="bg-secondary text-secondary-foreground text-sm font-medium px-4 py-2 rounded-lg">
                {placeholderTopics[activeIndex].audience}
              </span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Book this keynote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
