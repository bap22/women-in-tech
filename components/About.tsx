import Image from 'next/image'

interface AboutProps {
  image?: string
}

export default function About({ image }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-400 to-amber-500">
              {image ? (
                <Image
                  src={image}
                  alt="Kristy"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                  👷‍♀️
                </div>
              )}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600">15+</div>
              <div className="text-gray-600 text-sm">Years in Construction</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Meet Kristy
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Kristy is a trailblazer in the construction industry, breaking barriers 
                and building paths for women in leadership roles. With over 15 years of 
                hands-on experience, she's transformed job sites, led major projects, 
                and mentored countless women entering the field.
              </p>
              <p>
                As a sought-after speaker, Kristy combines real-world stories with 
                actionable strategies that inspire audiences to overcome obstacles, 
                embrace leadership, and build the career—and life—they deserve.
              </p>
              <p>
                Her talks resonate with construction professionals, women in business, 
                and leadership teams because they're rooted in authenticity, hard-won 
                wisdom, and the unshakeable belief that anyone can succeed with the 
                right mindset and support.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">100+</div>
                <div className="text-gray-600 text-sm">Events Spoken</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">10K+</div>
                <div className="text-gray-600 text-sm">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">5★</div>
                <div className="text-gray-600 text-sm">Speaker Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
