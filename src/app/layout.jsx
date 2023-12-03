import './globals.css'
import Navbar from '../components/Navbar/navbar'

export const metadata = {
  title: 'e-Kuttan',
  description: 'Personal portfolio created By Mr. Edwin Liby',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
