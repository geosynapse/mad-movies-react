import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Providers from "@/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mad Movies Database",
  description: "Movie reviews and ratings from the best critics",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} defaultTheme='system' attribute='class'>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
