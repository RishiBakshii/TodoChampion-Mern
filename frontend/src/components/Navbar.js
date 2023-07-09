import React, { useState } from 'react'
import './css/Navbar.css'
import './css/responsiveNavbar.css'
import { Link } from 'react-router-dom'

function Navbar({handleLogout}) {

  window.onscroll=()=>{
    setNavOpen(false)
  }
  const [navOpen,setNavOpen]=useState(false)

  const toggleNavbar=()=>{
    setNavOpen(()=>!navOpen)
  }

  return (
    <header className="header">
        <h1 className="brandname">Todo Champion</h1>
        <i onClick={toggleNavbar} id='menuIcon' className='bx bx-menu'></i>
        <nav className="nav">
            <ul style={{visibility:navOpen?"visible":"hidden"}} className="navbar">
                <li className="nav-items"><Link id='links' to="/">Home</Link></li>
                <li className="nav-items"><Link id='links' to="/about">About</Link></li>
                <li className="nav-items"><Link id='links' to='/community'>Community</Link></li>
                <li onClick={handleLogout} className="nav-items">Logout</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar