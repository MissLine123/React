import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Developpement from './Developpement/Developpement'
import { AppContainer } from '../Container.style';

function Service() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
    <AppContainer>

        <Navbar/>
        
        Bienvenue sur la page service
        <nav>
          
            <Link to='/services/developpement'>Service Dev</Link>
            <Link to='/services/marketing'>Service Marketing</Link>


        <Outlet/>

        </nav>

    </AppContainer>
        
        </div>
  )
}

export default Service