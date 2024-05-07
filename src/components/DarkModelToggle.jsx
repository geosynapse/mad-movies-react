'use client'

import { React, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

export const DarkModelToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={
          theme === 'light'
            ? 'text-gray-700 text-3xl select-none transition-all'
            : 'text-gray-200 text-3xl select-none transition-all'}>
        {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
      </button>

      {/* <div>
        {
          currentTheme === 'dar'
            ? <MdLightMode
              onClick={() => setTheme('dark')}
              className="text-xl cursor-pointer hover:text-amber-500" />
            : <MdDarkMode
              onClick={() => setTheme('light')}
              className="text-xl cursor-pointer hover:text-amber-500" />
        }
      </div> */}

    </div >
  )
}
