import React from 'react'

const API_KEY = process.env.TMDB_API_KEY

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(`https://api.themoviedb.org/3/movie/157336?api_key=${API_KEY}`)
  const data = await res.json()
  console.log(data)
  return (
    <div>Home</div>
  )
}
