import Link from 'next/link'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  ArrowRight,
  Building,
  CalendarDays,
  CheckCircle,
  ClipboardList,
  Clock,
  Hammer,
  Home,
  Leaf,
  MapPin,
  Package,
  Phone,
  Refrigerator,
  Sofa,
  Star,
  Truck,
} from 'lucide-react'

const callHref = 'https://wa.me/18775865956'

const trustItems = [
  'Same-Day Service',
  'Locally Owned',
  'No Hidden Fees',
  'Heavy Lifting Included',
]

const services = [
  { icon: Sofa, label: 'Furniture removal' },
  { icon: Refrigerator, label: 'Appliances' },
  { icon: Hammer, label: 'Construction debris' },
  { icon: Home, label: 'Basement cleanouts' },
  { icon: Building, label: 'Garage cleanouts' },
  { icon: Leaf, label: 'Yard waste' },
  { icon: Package, label: 'Estate cleanouts' },
  { icon: Truck, label: 'General junk removal' },
]

const steps = [
  {
    icon: Phone,
    title: 'Call first',
    detail: 'Tell us what needs to go and where the job is located.',
  },
  {
    icon: ClipboardList,
    title: 'Get the price',
    detail: 'We review the load, access, timing, and give clear pricing.',
  },
  {
    icon: Truck,
    title: 'We haul it',
    detail: 'The crew loads, removes, and sweeps up the work area.',
  },
]

const mobileHeroMedia = [
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-25 at 12.14.49 AM.jpeg',
    alt: '877Junky Jo team work photo',
    className: 'col-span-2',
  },
  {
    type: 'video',
    src: '/images/Photos and Videos/July 20, 2026 jj.mp4',
    alt: '877Junky Jo hauling job video',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-26 at 10.35.40 AM.jpeg',
    alt: 'Brooklyn junk cleanout work',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-20 at 11.17.02 (1).jpeg',
    alt: '877Junky Jo service work graphic',
    className: 'col-span-2',
  },
]

const heroMedia = [
  {
    type: 'video',
    src: '/images/Photos and Videos/July 20, 2026 jj.mp4',
    alt: '877Junky Jo hauling job video',
    className: 'col-span-2 row-span-2 lg:col-span-2',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-20 at 11.17.02 (1).jpeg',
    alt: '877Junky Jo service work graphic',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-20 at 11.22.59.jpeg',
    alt: 'Junk removal team work photo',
    className: 'row-span-2',
  },
  {
    type: 'video',
    src: '/images/Photos and Videos/July 3, 2026 JJ.mp4',
    alt: 'Junk removal job video preview',
    className: 'row-span-2',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-28 at 10.43.41 PM.jpeg',
    alt: 'Outdoor cleanout work photo',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-28 at 10.43.43 PM (1).jpeg',
    alt: 'Debris removal work photo',
    className: '',
  },
  {
    type: 'video',
    src: '/images/Photos and Videos/June 19, 2026 jj.mp4',
    alt: 'Brooklyn cleanout video preview',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-28 at 10.43.43 PM (2).jpeg',
    alt: 'Property cleanout work photo',
    className: 'col-span-2',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-28 at 10.46.06 PM.jpeg',
    alt: 'Junk removal service photo',
    className: '',
  },
  {
    type: 'video',
    src: '/images/Photos and Videos/May 1, 2026 JJ.mp4',
    alt: '877Junky Jo work video preview',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-28 at 10.46.12 PM.jpeg',
    alt: 'Cleanout job photo',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-12 at 10.08.27 PM.jpeg',
    alt: '877Junky Jo job site photo',
    className: 'row-span-2',
  },
  {
    type: 'video',
    src: '/images/Photos and Videos/May 22, 2026 JJ.mp4',
    alt: 'Hauling job video preview',
    className: 'row-span-2',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-18 at 10.31.11 AM.jpeg',
    alt: 'Hauling work photo',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-18 at 10.31.49 AM.jpeg',
    alt: 'Outdoor debris removal job',
    className: '',
  },
  {
    type: 'video',
    src: '/images/Photos and Videos/May 8, 2026 jj.mp4',
    alt: 'Short junk removal job video',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-18 at 10.34.36 AM.jpeg',
    alt: 'Local junk removal work photo',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-25 at 12.14.49 AM.jpeg',
    alt: 'Junk removal team work photo',
    className: 'col-span-2 row-span-2',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-25 at 12.19.19 AM (2).jpeg',
    alt: '877Junky Jo crew work photo',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-25 at 12.19.20 AM.jpeg',
    alt: 'Junk hauling work photo',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-26 at 10.35.19 AM (1).jpeg',
    alt: 'Brooklyn junk removal work photo',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-26 at 10.35.40 AM.jpeg',
    alt: 'Brooklyn junk cleanout work',
    className: 'col-span-2',
  },
]

const workProof = [
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-26 at 10.35.40 AM.jpeg',
    alt: 'Junk removal cleanout work in Brooklyn',
    className: 'sm:col-span-2 lg:row-span-2',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-25 at 12.14.49 AM.jpeg',
    alt: '877Junky Jo crew work photo',
    className: '',
  },
  {
    type: 'video',
    src: '/images/Photos and Videos/May 8, 2026 jj.mp4',
    alt: 'Short hauling job video preview',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-04-20 at 11.17.02 (1).jpeg',
    alt: 'Junk removal service graphic',
    className: '',
  },
  {
    type: 'photo',
    src: '/images/Photos and Videos/WhatsApp Image 2026-05-18 at 10.31.49 AM.jpeg',
    alt: 'Outdoor debris removal job',
    className: '',
  },
]

const areas = ['Brooklyn', 'Flatbush', 'Midwood', 'Sheepshead Bay', 'Marine Park', 'Rockaways', 'South Queens']

const reviews = [
  'Fast, reliable, and super easy to work with.',
  'They showed up same day and cleared everything.',
  'Professional crew and they left the place clean.',
]

export default function HomePage() {
  return (
    <main className="font-sans bg-white text-slate-950">
      <Header />

      <section
        className="relative flex min-h-[680px] items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-center text-white sm:min-h-[600px] sm:py-16 md:min-h-[700px] md:py-20 lg:min-h-screen lg:py-24"
      >
        <div className="absolute inset-0 grid grid-rows-2 grid-cols-2 gap-1 opacity-85 sm:hidden">
          {mobileHeroMedia.map((item) => (
            <div key={item.src} className={`relative min-h-0 overflow-hidden bg-slate-900 ${item.className}`}>
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-label={item.alt}
                />
              ) : (
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
              )}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 hidden auto-rows-fr grid-cols-3 gap-1 opacity-85 sm:grid lg:grid-cols-6">
          {heroMedia.map((item) => (
            <div key={item.src} className={`relative min-h-0 overflow-hidden bg-slate-900 ${item.className}`}>
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-label={item.alt}
                />
              ) : (
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
              )}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/70" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <Image
            src="/images/LOGO.png"
            alt="877Junky Jo Logo"
            width={200}
            height={200}
            priority
            className="mx-auto mb-3 transition duration-300 hover:scale-110 hover:drop-shadow-lg sm:mb-4 md:mb-6"
          />
          <h1 className="mb-3 text-3xl font-bold leading-tight sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Junk Removal in Brooklyn Fast, Same-Day Service
          </h1>
          <p className="mb-3 text-sm sm:mb-4 sm:text-base md:text-lg">
            We remove junk, debris, and clutter from your home or job site.
          </p>
          <p className="mb-6 text-lg font-bold sm:mb-8 sm:text-xl md:text-2xl">
            You point, we haul it.
          </p>

          <div className="flex w-full flex-row justify-center gap-2 sm:gap-4">
            <a
              href={callHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-orange-500 px-2 py-3 text-xs font-bold text-white transition hover:bg-orange-600 min-[380px]:px-3 min-[380px]:text-sm sm:w-auto sm:flex-none sm:px-8 sm:py-4 sm:text-lg"
            >
              <Phone size={24} className="h-4 w-4 shrink-0 sm:h-6 sm:w-6" />
              Call 877-JUNKY-JO
            </a>
            <Link
              href="/book"
              className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-white px-2 py-3 text-xs font-bold text-white transition hover:bg-white hover:text-orange-600 min-[380px]:px-3 min-[380px]:text-sm sm:w-auto sm:flex-none sm:px-8 sm:py-4 sm:text-lg"
            >
              <ClipboardList size={24} className="h-4 w-4 shrink-0 sm:h-6 sm:w-6" />
              Pre-Book a Job
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6 md:py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-5 md:flex md:flex-row md:items-center md:justify-between">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 md:gap-3">
              <CheckCircle className="shrink-0 text-green-600" size={20} />
              <span className="text-sm font-bold leading-tight text-slate-950 md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold">What We Remove</h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {services.map((service) => (
              <Link
                key={service.label}
                href="/services"
                className="flex min-h-32 flex-col items-center justify-center rounded-xl bg-white p-6 text-center shadow transition hover:-translate-y-1 hover:shadow-xl"
              >
                <service.icon size={40} className="mb-3 text-orange-600" />
                <span className="font-medium text-slate-950">{service.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="text-center md:text-left">
            <p className="mb-2 flex items-center justify-center gap-2 text-sm font-black uppercase text-orange-600 md:justify-start">
              <Clock size={18} />
              Simple process
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">Call, confirm, and clear the space.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We keep the process direct so customers know what happens next. Call first for the fastest response, or send a pre-booking request when you want us to review the details.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {steps.map((step, index) => (
              <article key={step.title} className="relative flex items-start gap-4 overflow-hidden rounded-lg border border-slate-200 bg-white p-4 pl-5 text-left shadow-sm transition sm:block sm:bg-slate-50 sm:p-5 sm:pl-5 sm:shadow-none">
                <div className="absolute inset-y-0 left-0 w-1 bg-orange-600 sm:hidden" />
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-600 text-white shadow-sm sm:mb-5 sm:h-12 sm:w-12 sm:rounded-md sm:shadow-none">
                  <step.icon size={24} className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1 sm:min-w-full">
                  <span className="text-xs font-black text-orange-700 sm:text-sm">0{index + 1}</span>
                  <h3 className="mt-0.5 text-lg font-black leading-tight sm:mt-1 sm:text-xl">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:mt-2">{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 text-center md:flex-row md:items-end md:text-left">
            <div>
              <p className="mb-2 text-sm font-black uppercase text-orange-300">OUR WORK</p>
              <h2 className="max-w-2xl text-3xl font-black sm:text-4xl">
                A quick look at recent cleanouts, hauling jobs, and debris removal.
              </h2>
            </div>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 font-black text-orange-300 hover:text-orange-200 md:justify-start">
              See the full collage
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workProof.map((item) => (
              <div key={item.src} className={`relative overflow-hidden rounded-lg border border-white/10 bg-slate-900 ${item.className}`}>
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                    aria-label={item.alt}
                  />
                ) : (
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
                )}
                {item.type === 'video' && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-950">
                      <CalendarDays size={14} />
                      Video preview
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="text-center md:text-left">
            <p className="mb-2 flex items-center justify-center gap-2 text-sm font-black uppercase text-orange-600 md:justify-start">
              <MapPin size={18} />
              Service coverage
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">Serving Brooklyn, Rockaways, and South Queens.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Nearby neighborhoods can often get same-day or next-day service. Call first and we will confirm whether your address is inside the active route.
            </p>
            <Link href="/service-areas" className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-black text-white transition hover:bg-slate-800 md:justify-start">
              Check coverage map
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
              {areas.map((area) => (
                <div key={area} className="flex min-h-12 items-center gap-2 rounded-md border border-orange-100 bg-white px-3 py-3 text-left text-xs font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md sm:min-h-14 sm:gap-3 sm:px-4 sm:py-4 sm:text-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-600 sm:h-8 sm:w-8">
                    <MapPin size={14} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 leading-tight">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-black sm:text-4xl">
            Trusted by local homeowners, contractors, and businesses.
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1 text-orange-500" aria-label="Five star review">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg font-semibold leading-8 text-slate-700">&ldquo;{review}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-600 px-4 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">Ready to clear it out?</h2>
          <p className="mt-4 text-lg leading-8 text-orange-50">
            Call 877-JUNKY-JO for the fastest confirmation, or send a pre-booking request so we can review the job details before phone confirmation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={callHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 font-black text-orange-700 transition hover:bg-orange-50"
            >
              <Phone size={20} />
              Call 877-JUNKY-JO
            </a>
            <Link
              href="/book"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-white px-6 py-4 font-black text-white transition hover:bg-white hover:text-orange-700"
            >
              <CalendarDays size={20} />
              Pre-Book a Job
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
