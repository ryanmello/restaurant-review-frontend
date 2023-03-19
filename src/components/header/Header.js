import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='title'>
          Restaurant Review
        </div>
        <div className='search-container'>
          <input type={"text"} placeholder="Search" className='search'></input>
        </div>
      </div>   
    </div>
  )
}

export default Header

