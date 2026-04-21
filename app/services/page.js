'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Wrench, Hammer, Truck, Home } from 'lucide-react'

export default function Services() {
  return (
    <main>
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-orange-600 text-white py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Junk Removal Services</h1>
          <p className="text-base sm:text-lg md:text-xl">Fast, reliable junk removal for homes, businesses, and job sites.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Service 1 */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="text-orange-600" size={28} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Junk Removal</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              We remove unwanted items from homes, apartments, and properties — quickly and efficiently. Whether you're decluttering or preparing for a move, we handle it all with care.
            </p>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden h-64 sm:h-80">
              <img src="/images/junk-home.jpg" alt="Junk removal service" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          {/* Service 2 */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Hammer className="text-green-600" size={28} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Demo & Cleanup</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              Light demolition and full cleanup services for renovations, remodeling, and tear-outs. We handle debris removal and site cleanup to get your project back on track.
            </p>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden h-64 sm:h-80">
              <img src="/images/demo.jpg" alt="Demo and cleanup service" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Wrench className="text-yellow-600" size={28} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Construction Debris</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              We haul away wood, drywall, scrap, and other materials so your job site stays clean and safe. Perfect for contractors and property managers.
            </p>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden h-64 sm:h-80">
              <img src="/images/contractors.jpg" alt="Construction debris removal" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          {/* Service 4 */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="text-purple-600" size={28} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Estate Cleanouts</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              Complete cleanout services for homes, estates, and properties — handled with care and respect. We understand the sensitivity of estate situations and work with compassion.
            </p>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden h-64 sm:h-80">
              <img src="/images/estate.jpg" alt="Estate cleanout service" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 sm:py-20 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 font-bold w-full text-sm sm:text-base">
                Call 877-JUNKY-JO
              </button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-orange-600 font-bold w-full text-sm sm:text-base">
                Request Estimate
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
