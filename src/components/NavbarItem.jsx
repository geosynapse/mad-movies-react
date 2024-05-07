'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  return (
    <div className='p-5'>
      <Link
        className={`text-sm sm:text-lg hover:text-amber-500 ${genre === param ?
          'underline underline-offset-8 decoration-4' : 'hover:text-amber-500'}`}
        href={`/?genre=${param}`}
      >{title}</Link>
    </div >
  )
}

export default NavbarItem