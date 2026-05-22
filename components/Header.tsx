export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div 
            className="text-primary font-bold text-3xl tracking-tight" 
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            KS
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
            About
          </a>
          <a href="#topics" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
            Topics
          </a>
          <a href="#events" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
            Events
          </a>
          <a href="#stories" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
            Stories
          </a>
          <a 
            href="#booking" 
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  )
}
