import React from 'react'

import { Link } from 'react-router-dom'

import './navbar.css'

function Navbar() {
  return (
   <nav>
        <Link className="marge" to='/'> Accueil</Link>
        <Link className="marge" to='/services'> Services</Link>
        <Link className="marge" to='/Admin'>Admin</Link>
        <Link className="marge" to='/allfilm'>Allfilm</Link>
       

   </nav>
  )
}

export default Navbar