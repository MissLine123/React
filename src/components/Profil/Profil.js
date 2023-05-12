import React from 'react'

import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

function Profil() {

    const params = useParams()

    console.log(params);


  return (
    <div>
        <Navbar/>
        Bonjour {params.id}, voici votre profil </div>
  )
}

export default Profil