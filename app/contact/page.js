'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    description: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '', location: '', description: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main>
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-orange-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Get Your Free Estimate</h1>
          <p className="text-xl">
            Ready to clear out your junk? Call us or fill out the form below and we'll get back to you.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Form</h2>
            {submitted && (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 border border-green-200">
                Thank you! We'll contact you soon with your free estimate.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Location (ZIP / Area) *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="e.g., Flatbush, 11226"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Type of Junk / Job Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Tell us what you need removed..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 font-bold text-lg"
              >
                📩 Request Estimate
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Info</h2>
            
            <div className="bg-orange-50 p-8 rounded-lg mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href="tel:8775865956" className="text-2xl font-bold text-orange-600 hover:underline">
                    877-JUNKY-JO
                  </a>
                </div>
              </div>
              <p className="text-gray-600">Available 24/7 for scheduling</p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href="mailto:info@ojosjunk.com" className="text-lg font-bold text-green-600 hover:underline">
                    info@ojosjunk.com
                  </a>
                </div>
              </div>
              <p className="text-gray-600">We'll respond within 1 hour</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Free, no-obligation estimates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Same-day service available</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Transparent pricing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Professional team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
