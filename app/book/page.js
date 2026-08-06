'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  AlertCircle,
  CalendarDays,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  MapPin,
  Phone,
} from 'lucide-react'

const initialFormData = {
  name: '',
  phone: '',
  location: '',
  preferredDate: '',
  preferredTime: '',
  jobType: '',
  description: '',
  company: '',
}

const timeWindows = [
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'evening', label: 'Evening' },
  { value: 'first-available', label: 'First available' },
]

const jobTypes = [
  { value: 'junk-removal', label: 'Junk removal' },
  { value: 'home-cleanout', label: 'Home cleanout' },
  { value: 'garage-cleanout', label: 'Garage cleanout' },
  { value: 'estate-cleanout', label: 'Estate cleanout' },
  { value: 'construction-debris', label: 'Construction debris' },
  { value: 'demo-cleanup', label: 'Demo cleanup' },
]

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getLocalDateValue(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function getMonthStart(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function getCalendarCells(monthDate) {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = Array.from({ length: firstDay }, () => null)

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day)
    cells.push({
      day,
      value: getLocalDateValue(date),
    })
  }

  return cells
}

function getReadableDate(value) {
  if (!value) {
    return 'Select a date'
  }

  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function getMonthLabel(date) {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

export default function Book() {
  const [formData, setFormData] = useState(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [jobTypeOpen, setJobTypeOpen] = useState(false)
  const [preferredTimeOpen, setPreferredTimeOpen] = useState(false)
  const [preferredDateOpen, setPreferredDateOpen] = useState(false)
  const [calendarMonth, setCalendarMonth] = useState(() => getMonthStart(new Date()))

  const today = getLocalDateValue(new Date())
  const calendarCells = getCalendarCells(calendarMonth)
  const selectedJobType = jobTypes.find((type) => type.value === formData.jobType)
  const selectedTimeWindow = timeWindows.find((window) => window.value === formData.preferredTime)
  const selectedDateLabel = getReadableDate(formData.preferredDate)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleJobTypeSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      jobType: value,
    }))
    setJobTypeOpen(false)
    setError(null)
  }

  const handlePreferredDateSelect = (value) => {
    if (value < today) {
      return
    }

    setFormData((prev) => ({
      ...prev,
      preferredDate: value,
    }))
    setPreferredDateOpen(false)
    setError(null)
  }

  const handlePreferredTimeSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      preferredTime: value,
    }))
    setPreferredTimeOpen(false)
    setError(null)
  }

  const moveCalendarMonth = (offset) => {
    setCalendarMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.preferredDate || formData.preferredDate < today) {
      setError('Please choose a valid preferred date.')
      return
    }

    if (!formData.preferredTime) {
      setError('Please choose a preferred time window.')
      return
    }

    if (!formData.jobType) {
      setError('Please choose a job type.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData(initialFormData)
      } else {
        setError(result.error || 'Failed to submit pre-booking request')
      }
    } catch (err) {
      console.error('Pre-booking submission error:', err)
      setError('An error occurred while submitting your pre-booking request')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="bg-gray-950 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 font-semibold text-orange-300">
              <CalendarDays size={22} />
              <span>Pre-booking request</span>
            </div>
            <h1 className="mb-5 whitespace-nowrap text-xl font-bold leading-tight min-[380px]:text-2xl sm:text-5xl">
              Schedule a Pre-Booking Call
            </h1>
            <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-white/80">
              Tell us when you want service and what needs to be cleaned out. We will review the request, but your appointment is not confirmed until you call 877-JUNKY-JO and we confirm availability.
            </p>
            <div className="rounded-lg border border-orange-400/40 bg-orange-500/15 p-5">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
                <AlertCircle className="mt-0.5 flex-shrink-0 text-orange-300" size={22} />
                <p className="text-sm leading-relaxed text-orange-50">
                  This is a pre-booking request only. Please call 877-JUNKY-JO first to confirm the booking, pricing, and arrival window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <div className="mb-8 text-center sm:text-left">
              <div className="mb-3 flex items-center justify-center gap-3 font-semibold text-orange-600 sm:justify-start">
                <ClipboardList size={22} />
                <span>Request details</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Pre-Booking Form</h2>
              <p className="mx-auto text-lg leading-relaxed text-gray-600 sm:mx-0">
                Fill this out so we know what you need. After sending it, call us to confirm your appointment.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                Thanks. We received your pre-booking request. Please call 877-JUNKY-JO to confirm your appointment.
              </div>
            )}
            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-5 rounded-lg border border-gray-200 bg-gray-50 p-5 shadow-sm sm:p-6">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength="80"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength="30"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold">Service Area / ZIP *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  maxLength="120"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                  placeholder="e.g., Flatbush, 11226"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label id="preferred-date-label" className="mb-2 block font-semibold">Preferred Date *</label>
                  <div className="relative">
                    <input type="hidden" name="preferredDate" value={formData.preferredDate} />
                    <button
                      id="preferred-date-button"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded={preferredDateOpen}
                      aria-labelledby="preferred-date-label preferred-date-button"
                      onClick={() => setPreferredDateOpen((open) => !open)}
                      className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-base sm:py-3 text-left shadow-sm transition hover:border-orange-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
                    >
                      <span className={formData.preferredDate ? 'font-semibold text-gray-950' : 'text-gray-500'}>
                        {selectedDateLabel}
                      </span>
                      <CalendarDays className="text-orange-600" size={20} />
                    </button>

                    {preferredDateOpen && (
                      <div
                        role="dialog"
                        aria-labelledby="preferred-date-label"
                        className="relative z-20 mt-2 w-full rounded-xl border border-orange-100 bg-white p-3 shadow-xl ring-1 ring-black/5 sm:absolute sm:shadow-2xl"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => moveCalendarMonth(-1)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-orange-50 hover:text-orange-700"
                            aria-label="Previous month"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <div className="font-bold text-gray-950">{getMonthLabel(calendarMonth)}</div>
                          <button
                            type="button"
                            onClick={() => moveCalendarMonth(1)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-orange-50 hover:text-orange-700"
                            aria-label="Next month"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>

                        <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-bold uppercase text-gray-500">
                          {weekDays.map((day) => (
                            <span key={day}>{day}</span>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                          {calendarCells.map((cell, index) => {
                            if (!cell) {
                              return <span key={`empty-${index}`} className="h-10" />
                            }

                            const selected = cell.value === formData.preferredDate
                            const disabled = cell.value < today

                            return (
                              <button
                                key={cell.value}
                                type="button"
                                disabled={disabled}
                                onClick={() => handlePreferredDateSelect(cell.value)}
                                className={`flex h-10 items-center justify-center rounded-lg text-sm font-bold transition ${
                                  selected
                                    ? 'bg-orange-600 text-white shadow-sm'
                                    : disabled
                                      ? 'cursor-not-allowed text-gray-300'
                                      : 'text-gray-800 hover:bg-orange-50 hover:text-orange-700'
                                }`}
                              >
                                {cell.day}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label id="preferred-time-label" className="mb-2 block font-semibold">Preferred Time Window *</label>
                  <div className="relative">
                    <input type="hidden" name="preferredTime" value={formData.preferredTime} />
                    <button
                      id="preferred-time-button"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={preferredTimeOpen}
                      aria-labelledby="preferred-time-label preferred-time-button"
                      onClick={() => setPreferredTimeOpen((open) => !open)}
                      className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-base sm:py-3 text-left shadow-sm transition hover:border-orange-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
                    >
                      <span className={selectedTimeWindow ? 'font-semibold text-gray-950' : 'text-gray-500'}>
                        {selectedTimeWindow ? selectedTimeWindow.label : 'Select a time'}
                      </span>
                      <ChevronDown
                        className={`text-orange-600 transition-transform ${preferredTimeOpen ? 'rotate-180' : ''}`}
                        size={20}
                      />
                    </button>

                    {preferredTimeOpen && (
                      <div
                        role="listbox"
                        aria-labelledby="preferred-time-label"
                        className="relative z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border border-orange-100 bg-white p-1 shadow-xl ring-1 ring-black/5 sm:absolute sm:max-h-72 sm:shadow-2xl"
                      >
                        {timeWindows.map((window) => {
                          const selected = window.value === formData.preferredTime

                          return (
                            <button
                              key={window.value}
                              type="button"
                              role="option"
                              aria-selected={selected}
                              onClick={() => handlePreferredTimeSelect(window.value)}
                              className={`flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-base sm:py-3 text-left transition ${
                                selected
                                  ? 'bg-orange-600 font-bold text-white'
                                  : 'text-gray-800 hover:bg-orange-50 hover:text-orange-700'
                              }`}
                            >
                              <span>{window.label}</span>
                              {selected && <Check size={18} />}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label id="job-type-label" className="mb-2 block font-semibold">Job Type *</label>
                <div className="relative">
                  <input type="hidden" name="jobType" value={formData.jobType} />
                  <button
                    id="job-type-button"
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={jobTypeOpen}
                    aria-labelledby="job-type-label job-type-button"
                    onClick={() => setJobTypeOpen((open) => !open)}
                    className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-base sm:py-3 text-left shadow-sm transition hover:border-orange-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
                  >
                    <span className={selectedJobType ? 'font-semibold text-gray-950' : 'text-gray-500'}>
                      {selectedJobType ? selectedJobType.label : 'Select a job type'}
                    </span>
                    <ChevronDown
                      className={`text-orange-600 transition-transform ${jobTypeOpen ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </button>

                  {jobTypeOpen && (
                    <div
                      role="listbox"
                      aria-labelledby="job-type-label"
                      className="relative z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border border-orange-100 bg-white p-1 shadow-xl ring-1 ring-black/5 sm:absolute sm:max-h-72 sm:shadow-2xl"
                    >
                      {jobTypes.map((type) => {
                        const selected = type.value === formData.jobType

                        return (
                          <button
                            key={type.value}
                            type="button"
                            role="option"
                            aria-selected={selected}
                            onClick={() => handleJobTypeSelect(type.value)}
                            className={`flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-base sm:py-3 text-left transition ${
                              selected
                                ? 'bg-orange-600 font-bold text-white'
                                : 'text-gray-800 hover:bg-orange-50 hover:text-orange-700'
                            }`}
                          >
                            <span>{type.label}</span>
                            {selected && <Check size={18} />}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold">Job Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="5"
                  maxLength="1200"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                  placeholder="Tell us what needs to be removed or cleaned out..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-lg font-bold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                <CalendarDays size={20} />
                {loading ? 'Sending...' : 'Send Pre-Booking Request'}
              </button>
            </form>
          </div>

          <aside className="space-y-5">
            <div className="rounded-lg border border-orange-100 bg-orange-50 p-6">
              <Phone className="mb-4 text-orange-600" size={30} />
              <h3 className="mb-3 text-2xl font-bold">Call to Confirm</h3>
              <p className="mb-5 leading-relaxed text-gray-600">
                Your date and time are not reserved until our team confirms availability by phone.
              </p>
              <a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700">
                  <Phone size={20} />
                  Call Now
                </button>
              </a>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-bold">What happens next?</h3>
              <ul className="space-y-4">
                {[
                  'We receive your pre-booking request.',
                  'You call 877-JUNKY-JO to confirm availability.',
                  'We confirm pricing, arrival window, and job details.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="mt-0.5 flex-shrink-0 text-orange-600" size={20} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <MapPin className="mb-4 text-orange-600" size={30} />
              <h3 className="mb-3 text-xl font-bold">Service Area Check</h3>
              <p className="leading-relaxed text-gray-600">
                We serve Brooklyn, the Rockaways, and South Queens. Include your ZIP or neighborhood so we can confirm the route.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}
