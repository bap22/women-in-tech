'use client'

import Link from 'next/link'

interface LogoProps {
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ showText = true, size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: {
      container: 'w-10 h-10',
      text: 'text-lg',
      name: 'text-lg',
      tagline: 'text-[10px]',
    },
    md: {
      container: 'w-12 h-12',
      text: 'text-xl',
      name: 'text-xl',
      tagline: 'text-xs',
    },
    lg: {
      container: 'w-16 h-16',
      text: 'text-2xl',
      name: 'text-2xl',
      tagline: 'text-sm',
    },
  }

  const s = sizes[size]

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Mark - Clean "KS" monogram */}
      <div className={`relative ${s.container}`}>
        {/* Main circle with gradient border effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary to-primary/70 opacity-20 group-hover:opacity-30 transition-opacity" />
        
        {/* Inner container */}
        <div className="relative w-full h-full rounded-full border-2 border-primary flex items-center justify-center overflow-hidden group-hover:border-primary/80 transition-colors">
          {/* Monogram */}
          <div className="relative flex items-center justify-center">
            <span className={`font-serif font-bold ${s.text} text-primary tracking-tight`}>
              K
            </span>
            <span className={`font-serif font-light ${s.text} text-primary/70 -ml-0.5`}>
              S
            </span>
          </div>
        </div>
        
        {/* Subtle accent dot */}
        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-110 transition-transform" />
      </div>

      {/* Text */}
      {showText && (
        <div className="hidden sm:block">
          <div className={`font-serif ${s.name} font-semibold text-foreground tracking-tight leading-tight`}>
            Kristi S
          </div>
          <div className={`${s.tagline} text-muted-foreground uppercase tracking-[0.2em] font-medium`}>
            Keynote Speaker
          </div>
        </div>
      )}
    </Link>
  )
}
