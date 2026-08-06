'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  Camera,
  CheckCircle,
  ClipboardList,
  Clock,
  X,
  PlayCircle,
  Recycle,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react'

const workPhotos = [
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-20 at 11.17.02 (1).jpeg',
    alt: '877Junky Jo junk removal work photo from April 20, 2026',
    title: 'April 20 Work Photo',
    className: 'h-72 sm:h-80',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-20 at 11.22.59.jpeg',
    alt: '877Junky Jo junk removal work photo from April 20, 2026',
    title: 'April 20 Work Photo',
    className: 'h-56 sm:h-64',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-28 at 10.43.43 PM (2).jpeg',
    alt: '877Junky Jo junk removal work photo from April 28, 2026',
    title: 'April 28 Work Photo',
    className: 'h-80 sm:h-96',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-28 at 10.43.43 PM (1).jpeg',
    alt: '877Junky Jo junk removal work photo from April 28, 2026',
    title: 'April 28 Work Photo',
    className: 'h-48 sm:h-56',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-28 at 10.43.41 PM.jpeg',
    alt: '877Junky Jo junk removal work photo from April 28, 2026',
    title: 'April 28 Work Photo',
    className: 'h-56 sm:h-64',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-28 at 10.46.06 PM.jpeg',
    alt: '877Junky Jo junk removal work photo from April 28, 2026',
    title: 'April 28 Work Photo',
    className: 'h-44 sm:h-52',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-28 at 10.46.12 PM.jpeg',
    alt: '877Junky Jo junk removal work photo from April 28, 2026',
    title: 'April 28 Work Photo',
    className: 'h-64 sm:h-72',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-26 at 10.35.19 AM (1).jpeg',
    alt: '877Junky Jo junk removal work photo from May 26, 2026',
    title: 'May 26 Work Photo',
    className: 'h-52 sm:h-60',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-26 at 10.35.40 AM.jpeg',
    alt: '877Junky Jo junk removal work photo from May 26, 2026',
    title: 'May 26 Work Photo',
    className: 'h-72 sm:h-80',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-25 at 12.14.49 AM.jpeg',
    alt: '877Junky Jo junk removal work photo from May 25, 2026',
    title: 'May 25 Work Photo',
    className: 'h-48 sm:h-56',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-25 at 12.19.19 AM (2).jpeg',
    alt: '877Junky Jo junk removal work photo from May 25, 2026',
    title: 'May 25 Work Photo',
    className: 'h-64 sm:h-72',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-25 at 12.19.20 AM.jpeg',
    alt: '877Junky Jo junk removal work photo from May 25, 2026',
    title: 'May 25 Work Photo',
    className: 'h-56 sm:h-64',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-18 at 10.31.11 AM.jpeg',
    alt: '877Junky Jo junk removal work photo from May 18, 2026',
    title: 'May 18 Work Photo',
    className: 'h-44 sm:h-52',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-18 at 10.31.49 AM.jpeg',
    alt: '877Junky Jo junk removal work photo from May 18, 2026',
    title: 'May 18 Work Photo',
    className: 'h-72 sm:h-80',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-18 at 10.34.36 AM.jpeg',
    alt: '877Junky Jo junk removal work photo from May 18, 2026',
    title: 'May 18 Work Photo',
    className: 'h-52 sm:h-60',
  },
  {
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-12 at 10.08.27 PM.jpeg',
    alt: '877Junky Jo junk removal work photo from May 12, 2026',
    title: 'May 12 Work Photo',
    className: 'h-64 sm:h-72',
  },
]

const workVideos = [
  {
    src: '/images/Photos and Videos/July 20, 2026 jj.mp4',
    title: 'July 20 Work Video',
    description: 'Cleanout and hauling footage from a recent job.',
    className: 'h-64 sm:h-72',
  },
  {
    src: '/images/Photos and Videos/July 3, 2026 JJ.mp4',
    title: 'July 3 Work Video',
    description: 'A quick look at the crew in action.',
    className: 'h-52 sm:h-60',
  },
  {
    src: '/images/Photos and Videos/June 19, 2026 jj.mp4',
    title: 'June 19 Work Video',
    description: 'Debris removal and hauling work.',
    className: 'h-72 sm:h-80',
  },
  {
    src: '/images/Photos and Videos/May 1, 2026 JJ.mp4',
    title: 'May 1 Work Video',
    description: 'Real job footage from the field.',
    className: 'h-48 sm:h-56',
  },
  {
    src: '/images/Photos and Videos/May 22, 2026 JJ.mp4',
    title: 'May 22 Work Video',
    description: 'Cleanup and loading footage.',
    className: 'h-64 sm:h-72',
  },
  {
    src: '/images/Photos and Videos/May 8, 2026 jj.mp4',
    title: 'May 8 Work Video',
    description: 'More work footage from a local removal job.',
    className: 'h-56 sm:h-64',
  },
]

const collageItems = [
  { ...workPhotos[0], type: 'photo' },
  { ...workPhotos[1], type: 'photo' },
  { ...workPhotos[2], type: 'photo' },
  { ...workVideos[0], type: 'video', alt: 'Job walkthrough video preview' },
  { ...workPhotos[3], type: 'photo' },
  { ...workPhotos[4], type: 'photo' },
  { ...workVideos[1], type: 'video', alt: 'Team in action video preview' },
  { ...workPhotos[5], type: 'photo' },
  { ...workPhotos[6], type: 'photo' },
  { ...workPhotos[7], type: 'photo' },
  { ...workVideos[2], type: 'video', alt: 'Contractor runs video preview' },
  { ...workPhotos[8], type: 'photo' },
  { ...workPhotos[9], type: 'photo' },
  { ...workPhotos[10], type: 'photo' },
  { ...workVideos[3], type: 'video', alt: 'Cleanout clips video preview' },
  { ...workPhotos[11], type: 'photo' },
  { ...workPhotos[12], type: 'photo' },
  { ...workVideos[4], type: 'video', alt: 'Before and after videos preview' },
  { ...workPhotos[13], type: 'photo' },
  { ...workPhotos[14], type: 'photo' },
  { ...workVideos[5], type: 'video', alt: 'Local junk removal work video preview' },
  { ...workPhotos[15], type: 'photo' },
]

const serviceHighlights = [
  {
    icon: Clock,
    title: 'Fast Scheduling',
    text: 'Same-day and next-day pickups when the route allows.',
  },
  {
    icon: Truck,
    title: 'Full-Service Hauling',
    text: 'We lift, load, haul, and clean up after the job.',
  },
  {
    icon: ShieldCheck,
    title: 'Upfront Pricing',
    text: 'Clear estimates before work starts, with no hidden fees.',
  },
]

const commitments = [
  {
    icon: Clock,
    title: 'Same-Day Service',
    text: 'Available when the schedule allows, with quick communication from start to finish.',
  },
  {
    icon: ShieldCheck,
    title: 'No Hidden Fees',
    text: 'Transparent, upfront pricing before we start loading.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    text: 'Courteous crew members who respect your time and property.',
  },
  {
    icon: Truck,
    title: 'Heavy Lifting Included',
    text: 'You point, and we handle the lifting, loading, and hauling.',
  },
  {
    icon: Recycle,
    title: 'Responsible Disposal',
    text: 'We prioritize responsible disposal and recycling whenever possible.',
  },
]

export default function About() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const handleCommitmentMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    event.currentTarget.style.setProperty('--cursor-x', `${x}px`)
    event.currentTarget.style.setProperty('--cursor-y', `${y}px`)
  }

  useEffect(() => {
    if (!selectedPhoto) {
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedPhoto])

  return (
    <main>
      <Header />

      {/* ABOUT CONTENT */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="text-center lg:text-left">
            <div className="mb-5 flex items-center justify-center gap-3 font-semibold text-orange-600 lg:justify-start">
              <Users size={22} />
              <span>Locally operated</span>
            </div>
            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">About 877Junky Jo</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              877Junky Jo is a locally operated junk removal service based in Brooklyn. We help homeowners, contractors, and businesses remove unwanted items quickly, safely, and professionally.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Our goal is simple - make junk removal easy, fast, and stress-free. Whether it&apos;s a small pickup or a full property cleanout, our team shows up ready to work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {serviceHighlights.map((highlight) => (
              <div key={highlight.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5 shadow-sm">
                <highlight.icon className="mb-4 text-orange-600" size={28} />
                <h3 className="mb-2 text-lg font-bold">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK GALLERY */}
      <section className="bg-gray-950 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <div className="mb-3 flex items-center justify-center gap-3 font-semibold text-orange-300 md:justify-start">
                <Camera size={22} />
                <span>Real local jobs</span>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">OUR WORK</h2>
            </div>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/75 md:mx-0">
              A mixed collage of photos and video previews from cleanouts, debris removal, and hauling jobs around Brooklyn, Rockaways, and South Queens.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-4 gap-3 sm:gap-4">
            {collageItems.map((item) => {
              return (
                <div
                  key={`${item.type}-${item.src}`}
                  className={`group relative mb-3 block break-inside-avoid overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-white/10 sm:mb-4 ${item.className}`}
                >
                  {item.type === 'video' ? (
                    <>
                      <video
                        src={item.src}
                        className="h-full w-full object-cover"
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        aria-label={item.alt}
                      />
                      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-sm font-semibold text-white">
                        <PlayCircle size={16} />
                        <span>Video</span>
                      </div>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedPhoto(item)}
                      className="h-full w-full cursor-zoom-in text-left"
                      aria-label={`View full photo: ${item.alt}`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl text-center md:text-left">
            <div className="mb-3 flex items-center justify-center gap-3 font-semibold text-orange-600 md:justify-start">
              <CheckCircle size={22} />
              <span>How we work</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Commitment</h2>
            <p className="mx-auto text-lg leading-relaxed text-gray-600 md:mx-0">
              Every job gets the same approach: clear communication, careful hauling, and a crew that shows up ready to get it done right.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {commitments.map((commitment) => (
              <div
                key={commitment.title}
                onMouseMove={handleCommitmentMouseMove}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(249, 115, 22, 0.18), transparent 45%)',
                  }}
                />
                <div className="relative z-10">
                  <commitment.icon className="mb-4 text-orange-600 transition-transform duration-300 group-hover:scale-110" size={28} />
                  <h3 className="mb-2 text-lg font-bold">{commitment.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{commitment.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 rounded-lg bg-orange-50 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="overflow-hidden rounded-lg">
              <img src="/images/Junkremoval.jpeg" alt="877Junky Jo junk removal team work" className="h-64 w-full object-cover" />
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">Why Choose 877Junky Jo?</h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                We&apos;re not just another junk removal service. We&apos;re local, we&apos;re professional, and we genuinely care about making your life easier. When you call 877Junky Jo, you get a team that&apos;s committed to doing the job right the first time.
              </p>
              <Link href="/contact">
                <button className="flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700">
                  <ClipboardList size={20} />
                  Request an Estimate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.alt}
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-orange-100"
            aria-label="Close full photo"
          >
            <X size={24} />
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="max-h-[88vh] max-w-[94vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </main>
  )
}
