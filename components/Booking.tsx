export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Book Kristy for Your Next Event
        </h2>
        <p className="text-xl text-white/90 mb-8">
          From construction industry conferences to leadership summits, Kristy brings energy, 
          authenticity, and actionable insights that inspire audiences to break barriers and build success.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl mb-3">🏗️</div>
            <h3 className="text-lg font-bold text-white mb-2">Construction Events</h3>
            <p className="text-white/80 text-sm">
              Industry conferences, trade shows, safety summits, and company meetings
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-lg font-bold text-white mb-2">Leadership Conferences</h3>
            <p className="text-white/80 text-sm">
              Executive retreats, leadership development programs, and management training
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl mb-3">👩</div>
            <h3 className="text-lg font-bold text-white mb-2">Women's Events</h3>
            <p className="text-white/80 text-sm">
              Women in business summits, empowerment workshops, and networking events
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Book?
          </h3>
          <form className="space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Select event type</option>
                  <option>Construction Conference</option>
                  <option>Leadership Summit</option>
                  <option>Women's Event</option>
                  <option>Corporate Training</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Date (if known)
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Tell us about your event, audience size, and what you're looking for..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Send Booking Inquiry
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Or email directly at{' '}
            <a href="mailto:kristy@example.com" className="text-orange-600 font-semibold hover:underline">
              kristy@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
