'use client'

import Link from 'next/link'
import { Menu, X, Phone, Home, Wrench, MapPin, Info, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			{/* NAVBAR */}
			<header className="sticky top-0 bg-black shadow z-50">
				<div className="max-w-6xl mx-auto flex justify-between items-center p-4">
				<Link href="/" className="text-2xl font-bold text-orange-500">
				877JUNKY JO
			</Link>
				{/* Desktop Menu */}
				<nav className="hidden md:flex gap-6 text-sm text-white">
					<Link href="/" className="hover:text-orange-500">Home</Link>
					<Link href="/services" className="hover:text-orange-500">Services</Link>
					<Link href="/service-areas" className="hover:text-orange-500">Service Areas</Link>
					<Link href="/about" className="hover:text-orange-500">About</Link>
					<Link href="/contact" className="hover:text-orange-500">Contact</Link>
				</nav>

				{/* CTA */}
				<a href="https://wa.me/18775865956" className="hidden md:block" target="_blank" rel="noopener noreferrer">
					<button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 animate-pulse-glow">
						<Phone size={18} className="animate-bounce" />
						Call Now
					</button>
				</a>

				{/* Mobile Menu Button */}
				<button 
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden text-white"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-gradient-to-b from-black via-gray-900 to-black border-t-2 border-orange-600 animate-slideDownFadeIn">
					<nav className="flex flex-col gap-0 p-4 text-white">
						<div className="menu-item-0">
							<Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-600/20 hover:text-orange-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
								<Home size={20} className="text-orange-500" />
								<span className="text-base font-medium">Home</span>
							</Link>
						</div>
						<div className="menu-item-1">
							<Link href="/services" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-600/20 hover:text-orange-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
								<Wrench size={20} className="text-orange-500" />
								<span className="text-base font-medium">Services</span>
							</Link>
						</div>
						<div className="menu-item-2">
							<Link href="/service-areas" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-600/20 hover:text-orange-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
								<MapPin size={20} className="text-orange-500" />
								<span className="text-base font-medium">Service Areas</span>
							</Link>
						</div>
						<div className="menu-item-3">
							<Link href="/about" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-600/20 hover:text-orange-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
								<Info size={20} className="text-orange-500" />
								<span className="text-base font-medium">About</span>
							</Link>
						</div>
						<div className="menu-item-4">
							<Link href="/contact" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-600/20 hover:text-orange-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
								<Mail size={20} className="text-orange-500" />
								<span className="text-base font-medium">Contact</span>
							</Link>
						</div>
						<div className="border-t border-orange-600/30 my-3"></div>
						<div className="menu-item-cta">
							<a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer" className="w-full">
								<button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
									<Phone size={20} className="animate-pulse" />
									<span>Call Now</span>
								</button>
							</a>
						</div>
					</nav>
				</div>
			)}
		</header>
	</>
)
}
