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
  return (
    <section id="topics" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Speaking Topics
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Kristy delivers powerful, actionable talks for construction and leadership audiences
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div
              key={topic._id}
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{topic.icon || '🎤'}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {topic.title}
              </h3>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <div className="flex flex-wrap gap-2">
                {topic.duration && (
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                    ⏱️ {topic.duration}
                  </span>
                )}
                {topic.audience && (
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                    👥 {audienceLabels[topic.audience] || topic.audience}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {topics.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            <p>Speaking topics coming soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
