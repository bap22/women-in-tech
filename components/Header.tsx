export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div 
            className="text-white font-bold text-3xl tracking-tight" 
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            KS
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            About
          </a>
          <a href="#topics" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Topics
          </a>
          <a href="#events" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Events
          </a>
          <a href="#stories" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
            Stories
          </a>
          <a 
            href="#booking" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  )
}
