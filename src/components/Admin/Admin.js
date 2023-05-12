import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, Outlet, } from 'react-router-dom'

function Admin() {
  return (
    <div>
        <Navbar/>
        <nav>
          
             <Link to='/admin/dashboard'>Dashboard</Link>
             <Link to='/admin/gestionpost'>Gestion Post</Link>


                <Outlet/>

        </nav>

    </div>
  )
}

export default Admin