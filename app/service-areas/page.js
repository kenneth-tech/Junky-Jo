'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { MapPin, Phone } from 'lucide-react'

export default function ServiceAreas() {
  const primaryAreas = ['Flatbush', 'Midwood', 'Sheepshead Bay', 'Marine Park']
  const extendedAreas = [
    'Bay Ridge', 'Dyker Heights', 'Park Slope', 'Downtown Brooklyn',
    'Rockaway Beach', 'Far Rockaway', 'Howard Beach', 'South Ozone Park', 'Richmond Hill'
  ]

  return (
    <main>
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-orange-600 text-white py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <MapPin size={36} className="flex-shrink-0" />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">Our Service Areas</h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl">We proudly serve Brooklyn, the Rockaways, and South Queens.</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Primary Service Areas</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {primaryAreas.map(area => (
                <div key={area} className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-orange-600" size={24} />
                    <span className="text-lg font-semibold">{area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Extended Service Areas</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {extendedAreas.map(area => (
                <div key={area} className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                  <MapPin className="text-gray-600" size={20} />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Not Sure If We Serve Your Area?</h3>
            <p className="text-gray-600 text-lg mb-6">
              If you're in or near Brooklyn, chances are we serve your area. Give us a call to confirm availability — we often have same-day service options.
            </p>
            <a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer18775865956" target="_blank" rel="noopener noreferrer">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 flex items-center gap-2">
                <Phone size={20} />
                Call Us at 877-JUNKY-JO
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
