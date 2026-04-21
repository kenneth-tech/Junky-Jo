'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if page has already loaded (skip loading screen on page navigation)
    if (sessionStorage.getItem('pageLoaded')) {
      setIsLoading(false)
      return
    }

    const handleLoadComplete = () => {
      setIsLoading(false)
      sessionStorage.setItem('pageLoaded', 'true')
    }

    // Hide loader when page is fully loaded
    window.addEventListener('load', handleLoadComplete)
    
    // Also hide after 2 seconds as fallback
    const timer = setTimeout(() => {
      setIsLoading(false)
      sessionStorage.setItem('pageLoaded', 'true')
    }, 2000)

    return () => {
      window.removeEventListener('load', handleLoadComplete)
      clearTimeout(timer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      {/* Animated spinner */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-600 border-r-orange-600 animate-spin"></div>
        </div>
        <p className="text-gray-600 text-sm font-medium">Loading...</p>
      </div>
    </div>
  )
}
