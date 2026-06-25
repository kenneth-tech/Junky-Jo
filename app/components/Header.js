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

				{/* Social + CTA */}
				<div className="hidden md:flex items-center gap-3">
					{/* Facebook */}
					<a
						href="https://www.facebook.com/877junkyjo/"
						target="_blank"
						rel="noopener noreferrer"
						title="Facebook"
						className="transition transform hover:scale-125 duration-200 opacity-90 hover:opacity-100"
					>
						<svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
						</svg>
					</a>
					{/* Instagram */}
					<a
						href="https://www.instagram.com/877junkyjo/"
						target="_blank"
						rel="noopener noreferrer"
						title="Instagram"
						className="transition transform hover:scale-125 duration-200 opacity-90 hover:opacity-100"
					>
						<svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
									<stop offset="0%" stopColor="#fdf497"/>
									<stop offset="5%" stopColor="#fdf497"/>
									<stop offset="45%" stopColor="#fd5949"/>
									<stop offset="60%" stopColor="#d6249f"/>
									<stop offset="90%" stopColor="#285AEB"/>
								</radialGradient>
							</defs>
							<rect x="2.15" y="2.15" width="19.7" height="19.7" rx="4.8" ry="4.8" fill="url(#ig-gradient)"/>
							<rect x="2.15" y="2.15" width="19.7" height="19.7" rx="4.8" ry="4.8" fill="none" stroke="white" strokeWidth="0"/>
							<circle cx="12.063" cy="11.845" r="3.6" fill="none" stroke="white" strokeWidth="1.6"/>
							<circle cx="17.663" cy="6.465" r="1.44" fill="white"/>
							<rect x="2.15" y="2.15" width="19.7" height="19.7" rx="4.8" ry="4.8" fill="none" stroke="white" strokeWidth="1.48"/>
						</svg>
					</a>
					<a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer">
						<button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 animate-pulse-glow">
							<Phone size={18} className="animate-bounce" />
							Call Now
						</button>
					</a>
				</div>

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
						{/* Social Icons */}
						<div className="flex gap-5 px-4 pb-3">
							<a href="https://www.facebook.com/877junkyjo/" target="_blank" rel="noopener noreferrer" title="Facebook" className="transition transform hover:scale-125 duration-200 opacity-90 hover:opacity-100">
								<svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
								</svg>
							</a>
								<a href="https://www.instagram.com/877junkyjo/" target="_blank" rel="noopener noreferrer" title="Instagram" className="transition transform hover:scale-125 duration-200 opacity-90 hover:opacity-100">
								<svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<defs>
										<radialGradient id="ig-mobile-gradient" cx="30%" cy="107%" r="150%">
											<stop offset="0%" stopColor="#fdf497"/>
											<stop offset="5%" stopColor="#fdf497"/>
											<stop offset="45%" stopColor="#fd5949"/>
											<stop offset="60%" stopColor="#d6249f"/>
											<stop offset="90%" stopColor="#285AEB"/>
										</radialGradient>
									</defs>
									<rect x="2.15" y="2.15" width="19.7" height="19.7" rx="4.8" ry="4.8" fill="url(#ig-mobile-gradient)"/>
									<circle cx="12.063" cy="11.845" r="3.6" fill="none" stroke="white" strokeWidth="1.6"/>
									<circle cx="17.663" cy="6.465" r="1.44" fill="white"/>
									<rect x="2.15" y="2.15" width="19.7" height="19.7" rx="4.8" ry="4.8" fill="none" stroke="white" strokeWidth="1.48"/>
								</svg>
							</a>
						</div>
						<div className="border-t border-orange-600/30 mb-3"></div>
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
