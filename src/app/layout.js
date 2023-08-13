import './globals.css'
import { Inter } from 'next/font/google'
import dbConnect from './lib/dbConnect'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Praying Time Website',
  description: 'Praying time Website for Muslims',
}

export default function RootLayout({ children }) {
  async function connectionDb() {
    try {
      const db = await dbConnect()
      console.log('Database Connected')
      // console.log(db)
    } catch (error) {
      console.log(error.message)
    }
  }

  connectionDb()
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
