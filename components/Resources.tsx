interface Resource {
  _id: string
  title: string
  description: string
  url: string
  category?: string
}

interface ResourcesProps {
  resources: Resource[]
}

const categoryColors: Record<string, string> = {
  mentorship: 'bg-pink-100 text-pink-800',
  learning: 'bg-blue-100 text-blue-800',
  jobs: 'bg-green-100 text-green-800',
  community: 'bg-purple-100 text-purple-800',
  funding: 'bg-yellow-100 text-yellow-800',
}

const categoryIcons: Record<string, string> = {
  mentorship: '🤝',
  learning: '📚',
  jobs: '💼',
  community: '👥',
  funding: '💰',
}

export default function Resources({ resources }: ResourcesProps) {
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Featured Resources
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Curated tools, communities, and opportunities for women in construction and leadership
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <a
              key={resource._id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">
                  {resource.category ? categoryIcons[resource.category] : '🔗'}
                </span>
                {resource.category && (
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      categoryColors[resource.category] || 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
        
        {resources.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            <p>Resources coming soon! We're curating the best tools for you.</p>
          </div>
        )}
      </div>
    </section>
  )
}
