'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Users, MapPin } from 'lucide-react'

export default function About() {
  return (
    <main>
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-orange-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Your Local Junk Removal Team</h1>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="text-orange-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold">About 877Junky Jo</h2>
            </div>
            <p className="text-gray-600 text-lg mb-4">
              877Junky Jo is a locally operated junk removal service based in Brooklyn. We help homeowners, contractors, and businesses remove unwanted items quickly, safely, and professionally.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Our goal is simple — make junk removal easy, fast, and stress-free. Whether it's a small pickup or a full property cleanout, our team shows up ready to work.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">✓</div>
                <span className="text-gray-600">Same-day service when available</span>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">✓</div>
                <span className="text-gray-600">Transparent, upfront pricing with no hidden fees</span>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">✓</div>
                <span className="text-gray-600">Professional, courteous team members</span>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">✓</div>
                <span className="text-gray-600">We handle all lifting and loading</span>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">✓</div>
                <span className="text-gray-600">Responsible disposal and recycling</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 p-8 bg-orange-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Choose 877Junky Jo?</h3>
              <p className="text-gray-600 text-lg">
                We're not just another junk removal service. We're local, we're professional, and we genuinely care about making your life easier. When you call 877Junky Jo, you get a team that's committed to doing the job right the first time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
