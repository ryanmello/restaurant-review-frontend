import React from 'react'
import Restaurant from '../restaurant/Restaurant'

const Home = ({ restaurants }) => {
  return (
    <Restaurant restaurants={restaurants}/>
  )
}

export default Home
