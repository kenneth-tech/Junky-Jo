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
      <section className="bg-orange-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Junk Removal Services</h1>
          <p className="text-xl">Fast, reliable junk removal for homes, businesses, and job sites.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Truck className="text-orange-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold">Junk Removal</h2>
              </div>
              <p className="text-gray-600 text-lg">
                We remove unwanted items from homes, apartments, and properties — quickly and efficiently. Whether you're decluttering or preparing for a move, we handle it all with care.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg overflow-hidden h-80">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop" alt="Junk removal service" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-green-50 rounded-lg overflow-hidden h-80">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop" alt="Demo and cleanup service" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <Hammer className="text-green-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold">Demo & Cleanup</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Light demolition and full cleanup services for renovations, remodeling, and tear-outs. We handle debris removal and site cleanup to get your project back on track.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Wrench className="text-yellow-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold">Construction Debris</h2>
              </div>
              <p className="text-gray-600 text-lg">
                We haul away wood, drywall, scrap, and other materials so your job site stays clean and safe. Perfect for contractors and property managers.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg overflow-hidden h-80">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop" alt="Construction debris removal" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-purple-50 rounded-lg overflow-hidden h-80">
              <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop" alt="Estate cleanout service" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Home className="text-purple-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold">Estate Cleanouts</h2>
              </div>
              <p className="text-gray-600 text-lg">
                Complete cleanout services for homes, estates, and properties — handled with care and respect. We understand the sensitivity of estate situations and work with compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="tel:8775865956">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-xl hover:bg-gray-100 font-bold">
                Call 877-JUNKY-JO
              </button>
            </a>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-orange-600 font-bold">
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
