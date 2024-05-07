import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Providers from "@/providers"
import Navbar from "@/components/Navbar"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Mad Movies Database",
  description: "Movie reviews and ratings from the best critics",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className} defaultTheme='system' attribute='class'>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
