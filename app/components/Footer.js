export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-8 pb-4 sm:pb-6 border-b border-gray-700">
          {/* Left - Branding */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-orange-500">887JUNKY JO</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Fast, reliable junk removal</p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <h4 className="font-bold mb-1 sm:mb-2 text-xs sm:text-sm">Quick Links</h4>
            <div className="flex gap-4 text-gray-400 justify-center">
              <a href="/" className="hover:text-white text-xs sm:text-sm">Home</a>
              <a href="/services" className="hover:text-white text-xs sm:text-sm">Services</a>
              <a href="/service-areas" className="hover:text-white text-xs sm:text-sm">Areas</a>
              <a href="/about" className="hover:text-white text-xs sm:text-sm">About</a>
            </div>
          </div>

          {/* Right - Contact & Social */}
          <div className="text-center">
            <h4 className="font-bold mb-1 sm:mb-2 text-xs sm:text-sm">Contact</h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-center">
              <div className="flex gap-3 text-gray-400 text-xs sm:text-sm justify-center">
                <span><span className="text-orange-500">📞</span> 877-JUNKY-JO</span>
                <span><span className="text-orange-500">📩</span> jojo@877junkyjo.com</span>
              </div>
              <div className="flex gap-3 justify-center">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.15" y="2.15" width="19.7" height="19.7" rx="4.8" ry="4.8" fill="none" stroke="currentColor" strokeWidth="1.48"/>
                    <circle cx="12.063" cy="11.845" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.48"/>
                    <circle cx="17.663" cy="6.465" r="1.44" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 sm:pt-6 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; 2026 887Junky Jo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
