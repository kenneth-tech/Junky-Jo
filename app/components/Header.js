'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			{/* NAVBAR */}
			<header className="sticky top-0 bg-black shadow z-50">
				<div className="max-w-6xl mx-auto flex justify-between items-center p-4">
				<Link href="/" className="text-2xl font-bold text-orange-500">
					877Junky Jo
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
					<button className="bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700">
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
					<div className="md:hidden bg-black border-t border-orange-600">
						<nav className="flex flex-col gap-3 p-4 text-white">
							<Link href="/" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Home</Link>
							<Link href="/services" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Services</Link>
							<Link href="/service-areas" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Service Areas</Link>
							<Link href="/about" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>About</Link>
							<Link href="/contact" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Contact</Link>
						<a href="https://wa.me/18775865956" target="_blank" rel="noopener noreferrer">
								<button className="w-full bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700">
									Call Now
								</button>
							</a>
						</nav>
					</div>
				)}
			</header>
		</>
	)
}

