'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CalendarDays, Home, Info, Mail, MapPin, Menu, Phone, Wrench, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: Wrench },
  { href: '/service-areas', label: 'Service Areas', icon: MapPin },
  { href: '/book', label: 'Book', icon: CalendarDays },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact', icon: Mail },
]

function SocialLinks({ gradientId = 'ig-gradient' }) {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://www.facebook.com/877junkyjo/"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        className="transition duration-200 hover:scale-110"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/877junkyjo/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        className="transition duration-200 hover:scale-110"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id={gradientId} cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect x="2.15" y="2.15" width="19.7" height="19.7" rx="4.8" ry="4.8" fill={`url(#${gradientId})`} />
          <circle cx="12.063" cy="11.845" r="3.6" fill="none" stroke="white" strokeWidth="1.6" />
          <circle cx="17.663" cy="6.465" r="1.44" fill="white" />
          <rect x="2.15" y="2.15" width="19.7" height="19.7" rx="4.8" ry="4.8" fill="none" stroke="white" strokeWidth="1.48" />
        </svg>
      </a>
    </div>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-black shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            877JUNKY JO
          </Link>

          <nav className="hidden gap-7 text-sm text-white md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-orange-500">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <SocialLinks />
            <a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:from-orange-600 hover:to-orange-700 hover:shadow-2xl">
                <Phone size={18} />
                Call Now
              </button>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Open mobile menu"
            aria-expanded={isOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-black/70 animate-mobile-menu-backdrop"
            onClick={closeMenu}
            aria-label="Close mobile menu backdrop"
          />

          <aside className="fixed right-0 top-0 z-[70] flex h-dvh w-[min(86vw,380px)] flex-col overflow-y-auto border-l border-orange-500/30 bg-gray-950 text-white shadow-2xl animate-mobile-sidebar-open">
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <Link href="/" onClick={closeMenu} className="text-xl font-black text-orange-500">
                877JUNKY JO
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-orange-600"
                aria-label="Close mobile menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex flex-1 flex-col gap-2 p-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-base font-bold transition hover:border-orange-500/50 hover:bg-orange-600/15 hover:text-orange-300"
                >
                  <item.icon size={21} className="shrink-0 text-orange-500" />
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-white/10 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-bold uppercase text-white/60">Follow us</span>
                <SocialLinks gradientId="ig-mobile-gradient" />
              </div>

              <div className="grid gap-3">
                <a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-4 font-black text-white transition hover:bg-orange-700">
                    <Phone size={20} />
                    Call Now
                  </button>
                </a>
                <Link href="/book" onClick={closeMenu} className="flex w-full items-center justify-center gap-2 rounded-xl border border-orange-500 px-5 py-4 font-black text-orange-300 transition hover:bg-orange-600 hover:text-white">
                  <CalendarDays size={20} />
                  Pre-Book a Job
                </Link>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
