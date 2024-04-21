import './globals.css'
import Nav from '@/components/Nav'
import { Inter } from 'next/font/google'
import Mid from '@/components/Mid'
import Customer from '@/components/Customer'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React Project',
  description: 'Responsive full stack webpage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
        <Nav/>
          {children}
        <Mid/>
        <Customer/>
        <Header/>
        </main>
      </body>
    </html>
  )
}
