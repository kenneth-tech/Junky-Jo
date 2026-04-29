'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import { 
  Phone, 
  ClipboardList, 
  Truck, 
  Sofa, 
  Refrigerator, 
  Hammer, 
  Package,
  Building,
  Home,
  Zap,
  Leaf,
  Clock,
  Users,
  Recycle,
  CheckCircle
} from 'lucide-react'

export default function HomePage() {
  const [showEstimate, setShowEstimate] = useState(false)

  return (
    <main className="font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 text-center text-white relative overflow-hidden flex items-center justify-center min-h-screen sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/images/truck.png")', backgroundAttachment: 'fixed'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Image
            src="/images/LOGO.png"
            alt="877Junky Jo Logo"
            width={200}
            height={200}
            className="mx-auto mb-3 sm:mb-4 md:mb-6 transition duration-300 hover:scale-110 hover:drop-shadow-lg cursor-pointer"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Junk Removal in Brooklyn — Fast, Same-Day Service
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            We remove junk, debris, and clutter from your home or job site.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8">You point — we haul it.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full">
            <a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 font-bold flex items-center justify-center gap-2 text-base sm:text-lg w-full">
                <Phone size={24} />
                Call 877-JUNKY-JO
              </button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-orange-600 font-bold flex items-center justify-center gap-2 text-base sm:text-lg w-full">
                <ClipboardList size={24} />
                Get Free Estimate
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gray-50 py-8 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex items-start justify-center gap-3">
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <span className="font-semibold text-xs sm:text-sm md:text-base pt-0.5">Same-Day Service</span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <span className="font-semibold text-xs sm:text-sm md:text-base pt-0.5">Locally Owned</span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <span className="font-semibold text-xs sm:text-sm md:text-base pt-0.5">No Hidden Fees</span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <span className="font-semibold text-xs sm:text-sm md:text-base pt-0.5">Heavy Lifting Included</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Junk removal in 3 simple steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mb-6 text-white">
                <Phone size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Call or Book</h3>
              <p className="text-gray-600">Schedule your pickup. Same-day service available.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mb-6 text-white">
                <ClipboardList size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Get Free Estimate</h3>
              <p className="text-gray-600">We arrive on-site and give you a clear, upfront price.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mb-6 text-white">
                <Truck size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3">We Haul It Away</h3>
              <p className="text-gray-600">You point — we remove everything and clean up after.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What We Remove</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Sofa, label: 'Furniture removal' },
              { icon: Refrigerator, label: 'Appliances' },
              { icon: Hammer, label: 'Construction debris' },
              { icon: Home, label: 'Basement cleanouts' },
              { icon: Building, label: 'Garage cleanouts' },
              { icon: Leaf, label: 'Yard waste' },
              { icon: Package, label: 'Estate cleanouts' },
              { icon: Truck, label: 'General junk removal' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex flex-col items-center text-center cursor-pointer">
                <service.icon size={40} className="text-orange-600 mb-3 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL & COMMERCIAL */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Home Junk Removal Made Easy</h3>
              <p className="text-gray-600 text-base sm:text-lg mb-3">
                From cluttered basements to full house cleanouts, we handle everything.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
                No lifting, no stress — just point and we'll take care of the rest.
              </p>
              <Link href="/services">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 w-fit text-sm sm:text-base">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="order-1 md:order-2 bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden h-64 sm:h-80">
              <img src="/images/Junkremoval.jpeg" alt="Home junk removal service" className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-12 md:mt-16">
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden h-64 sm:h-80">
              <img src="/images/ConstructionDebris.jpeg" alt="Commercial junk removal truck" className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Junk Removal for Businesses & Contractors</h3>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-4">
                We work with contractors, property managers, and business owners to remove debris quickly and efficiently — so your projects stay on track.
              </p>
              <Link href="/services">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 w-fit">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Serving Brooklyn, Rockaways & South Queens</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
            We provide fast, reliable junk removal across all nearby neighborhoods — often with same-day availability.
          </p>
          
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Primary Service Areas</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              {['Flatbush', 'Midwood', 'Sheepshead Bay', 'Marine Park'].map(area => (
                <span key={area} className="bg-white px-6 py-2 rounded-full shadow">{area}</span>
              ))}
            </div>
          </div>

          <Link href="/service-areas">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-xl hover:bg-orange-700">
              View All Service Areas
            </button>
          </Link>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted by Local Homeowners & Businesses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Fast, reliable, and super easy to work with.",
              "They showed up same day and cleared everything.",
              "Professional and left the place clean."
            ].map((review, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg shadow">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic">"{review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-orange-600 py-16 sm:py-20 px-4 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Ready to Get Rid of Your Junk?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
          <a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 font-bold flex items-center justify-center gap-2 w-full text-sm sm:text-base">
              <Phone size={20} />
              Call 877-JUNKY-JO
            </button>
          </a>
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-orange-600 font-bold flex items-center justify-center gap-2 w-full text-sm sm:text-base">
              <ClipboardList size={20} />
              Get Free Estimate Today
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
