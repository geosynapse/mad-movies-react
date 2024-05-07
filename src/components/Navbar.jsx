import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex dark:bg-amber-600 bg-gray-700 text-slate-300 lg:text-lg justify-center'>
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

export default Navbar