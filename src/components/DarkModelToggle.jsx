'use client'

import { React, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

export const DarkModelToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div className='pr-5 dark:text-pink-50'>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={
          theme === 'light'
            ? 'text-gray-700 text-3xl select-none transition-all'
            : 'text-gray-200 text-3xl select-none transition-all'}>
        {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div >
  )
}
