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

const audienceLabels: Record<string, string> = {
  construction: 'Construction Professionals',
  'women-business': 'Women in Business',
  leadership: 'Leadership Teams',
  general: 'General Audience',
}

export default function SpeakerTopics({ topics }: SpeakerTopicsProps) {
  // Placeholder topics if none from Sanity
  const placeholderTopics: SpeakerTopic[] = topics.length === 0 ? [
    {
      _id: '1',
      title: 'Breaking Barriers in Construction',
      description: 'Learn how to overcome gender biases and build a successful career in the male-dominated construction industry.',
      duration: '45 min',
      audience: 'construction',
      icon: '🏗️',
    },
    {
      _id: '2',
      title: 'Leadership Lessons from the Job Site',
      description: 'Practical leadership strategies that translate from construction sites to boardrooms and beyond.',
      duration: '60 min',
      audience: 'leadership',
      icon: '👷',
    },
    {
      _id: '3',
      title: 'Building Your Network',
      description: 'How to create meaningful professional connections that accelerate your career growth.',
      duration: '45 min',
      audience: 'women-business',
      icon: '🤝',
    },
    {
      _id: '4',
      title: 'Confidence & Communication',
      description: 'Master the art of speaking up, negotiating, and commanding respect in any room.',
      duration: '60 min',
      audience: 'general',
      icon: '💪',
    },
    {
      _id: '5',
      title: 'From Apprentice to Executive',
      description: 'A roadmap for climbing the ladder and reaching the C-suite in construction and related industries.',
      duration: '45 min',
      audience: 'construction',
      icon: '📈',
    },
    {
      _id: '6',
      title: 'Work-Life Balance in High-Stakes Careers',
      description: 'Strategies for managing demanding careers while maintaining personal well-being and relationships.',
      duration: '60 min',
      audience: 'general',
      icon: '⚖️',
    },
  ] : topics
  return (
    <section id="topics" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: 'var(--font-playfair)' }}>
          Speaking Topics
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Kristy delivers powerful, actionable talks for construction and leadership audiences
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderTopics.map((topic) => (
            <div
              key={topic._id}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="text-4xl mb-4">{topic.icon || '🎤'}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {topic.title}
              </h3>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <div className="flex flex-wrap gap-2">
                {topic.duration && (
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    ⏱️ {topic.duration}
                  </span>
                )}
                {topic.audience && (
                  <span className="bg-accent/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    👥 {audienceLabels[topic.audience] || topic.audience}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
