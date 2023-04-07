import React from 'react'
import Navbar from "./Navbar.jsx"
import Search from "./Search.jsx"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/> 
      <Search/>
    </div>
  )
}

export default Sidebar