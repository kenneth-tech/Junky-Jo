import './globals.css'
import LoadingScreen from './components/LoadingScreen'

export const metadata = {
  title: '887Junky Jo - Brooklyn',
  description: 'Fast, same-day junk removal service in Brooklyn, Rockaways & South Queens. Call 877-JUNKY-JO today!',
  icons: {
    icon: '/images/LOGO.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  )
}
