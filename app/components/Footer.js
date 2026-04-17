export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">JOJO'S JUNK & DEMO</h3>
            <p className="text-gray-400">Fast, reliable junk removal serving Brooklyn and surrounding areas.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/service-areas" className="hover:text-white">Service Areas</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">📞 877-JUNKY-JO</p>
            <p className="text-gray-400">📩 <a href="mailto:info@ojosjunk.com" className="hover:text-white">info@ojosjunk.com</a></p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 OJO's Junk & Demo Removal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
