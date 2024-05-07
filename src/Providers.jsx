'use client'
import React, { Children } from 'react'
import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      <div className=''>
        {children}
      </div>
    </ThemeProvider>
  )
}
