'use client'

import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  CheckCircle,
  ClipboardList,
  Clock,
  Compass,
  MapPin,
  Navigation,
  Phone,
  Route,
  Truck,
} from 'lucide-react'

const primaryAreas = [
  {
    name: 'Flatbush',
    detail: 'Fast pickups for apartments, homes, and curbside junk.',
  },
  {
    name: 'Midwood',
    detail: 'Reliable cleanouts and furniture hauling near central Brooklyn.',
  },
  {
    name: 'Sheepshead Bay',
    detail: 'Home, garage, and property cleanouts near the waterfront.',
  },
  {
    name: 'Marine Park',
    detail: 'Same-day availability when nearby routes are open.',
  },
]

const regionalAreas = [
  {
    region: 'Brooklyn',
    areas: ['Bay Ridge', 'Dyker Heights', 'Park Slope', 'Downtown Brooklyn'],
  },
  {
    region: 'Rockaways',
    areas: ['Rockaway Beach', 'Far Rockaway'],
  },
  {
    region: 'South Queens',
    areas: ['Howard Beach', 'South Ozone Park', 'Richmond Hill'],
  },
]

const routeSteps = [
  {
    icon: MapPin,
    title: 'Tell us your area',
    text: 'Send your neighborhood, ZIP, or nearest cross streets.',
  },
  {
    icon: Route,
    title: 'We check the route',
    text: 'We confirm timing based on our Brooklyn, Rockaways, and Queens coverage.',
  },
  {
    icon: Truck,
    title: 'We haul it away',
    text: 'Our team arrives ready to lift, load, and clean up.',
  },
]

export default function ServiceAreas() {
  const handlePrimaryAreaMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    event.currentTarget.style.setProperty('--cursor-x', `${x}px`)
    event.currentTarget.style.setProperty('--cursor-y', `${y}px`)
  }

  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="bg-gray-950 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3 font-semibold text-orange-300">
              <Compass size={22} />
              <span>Brooklyn, Rockaways & South Queens</span>
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl">
              Junk Removal Service Areas
            </h1>
            <p className="mb-8 mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
              877Junky Jo covers our core Brooklyn neighborhoods and nearby routes across the Rockaways and South Queens. Check the coverage zones below, then call or request an estimate to confirm your block.
            </p>
            <div className="mx-auto grid max-w-xl grid-cols-2 gap-3 sm:flex sm:max-w-none sm:flex-row sm:justify-center">
              <a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-orange-600 px-3 py-3 text-sm font-bold text-white transition hover:bg-orange-700 sm:gap-2 sm:px-6 sm:text-base">
                  <Phone size={18} className="shrink-0" />
                  <span className="whitespace-nowrap">Call 877-JUNKY-JO</span>
                </button>
              </a>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-white px-3 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-orange-600 sm:gap-2 sm:px-6 sm:text-base">
                  <ClipboardList size={18} className="shrink-0" />
                  <span className="whitespace-nowrap">Check My Area</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY AREAS */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 mx-auto max-w-3xl text-center sm:mx-0 sm:text-left">
            <div className="mb-3 flex items-center justify-center gap-3 font-semibold text-orange-600 sm:justify-start">
              <Navigation size={22} />
              <span>Core coverage</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Primary Service Areas</h2>
            <p className="mx-auto text-lg leading-relaxed text-gray-600 sm:mx-0">
              These neighborhoods are our closest and most frequent routes, which means faster scheduling when openings are available.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {primaryAreas.map((area) => (
              <div
                key={area.name}
                onMouseMove={handlePrimaryAreaMouseMove}
                className="group relative overflow-hidden rounded-lg border border-orange-100 bg-orange-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(249, 115, 22, 0.18), transparent 45%)',
                  }}
                />
                <div className="relative z-10">
                  <MapPin className="mb-4 text-orange-600 transition-transform duration-300 group-hover:scale-110" size={28} />
                  <h3 className="mb-2 text-xl font-bold">{area.name}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{area.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTENDED AREAS */}
      <section className="bg-gray-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 mx-auto max-w-3xl text-center sm:mx-0 sm:text-left">
            <div className="mb-3 flex items-center justify-center gap-3 font-semibold text-orange-600 sm:justify-start">
              <Route size={22} />
              <span>Nearby routes</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Extended Service Areas</h2>
            <p className="mx-auto text-lg leading-relaxed text-gray-600 sm:mx-0">
              We also service nearby neighborhoods when the job fits our route schedule.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {regionalAreas.map((group) => (
              <div key={group.region} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">
                  <MapPin className="text-orange-600" size={22} />
                  {group.region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.areas.map((area) => (
                    <span key={area} className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 mx-auto max-w-3xl text-center sm:mx-0 sm:text-left">
            <div className="mb-3 flex items-center justify-center gap-3 font-semibold text-orange-600 sm:justify-start">
              <Clock size={22} />
              <span>Quick confirmation</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">How We Confirm Your Area</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {routeSteps.map((step) => (
              <div key={step.title} className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
                <step.icon className="mb-4 text-orange-600" size={30} />
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="text-center sm:text-left">
            <div className="mb-3 flex items-center justify-center gap-3 font-semibold text-orange-100 sm:justify-start">
              <CheckCircle size={22} />
              <span>Not sure if we serve your block?</span>
            </div>
            <h2 className="mb-4 whitespace-nowrap text-xl font-bold leading-tight min-[380px]:text-2xl sm:whitespace-normal sm:text-4xl">Send us your ZIP or neighborhood.</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-white/90 sm:max-w-2xl">
              If you are in or near Brooklyn, the Rockaways, or South Queens, there is a good chance we can help.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-stretch lg:flex-col">
            <a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-orange-600 transition hover:bg-gray-100">
                <Phone size={20} />
                Call 877-JUNKY-JO
              </button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-orange-600">
                <ClipboardList size={20} />
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
