import React from 'react'
import Navbar from '../Navbar/Navbar'
import {  Button, ButtonLabel, RedButton } from '../Button.style'
import { AppContainer } from '../Container.style'

function Home() {
  return ( 
  <div>
      <AppContainer background="lightblue" textcolor="darkblue">

      <Navbar/>
      <h1>Bienvenue sur votre super site React</h1>
      <Button couleurfond="grey"><ButtonLabel>test</ButtonLabel></Button>
      <Button couleurfond="yellow"><ButtonLabel>test</ButtonLabel></Button>
      <Button couleurfond="pink"><ButtonLabel>test</ButtonLabel></Button>
      <Button couleurfond="gray"><ButtonLabel>test</ButtonLabel></Button>
      <Button couleurfond="violet"><ButtonLabel>test</ButtonLabel></Button>
      <Button couleurfond="indigo"><ButtonLabel>test</ButtonLabel></Button>
     <RedButton><ButtonLabel>Bouton rouge</ButtonLabel></RedButton>
     <RedButton><ButtonLabel>Supprimer</ButtonLabel></RedButton>

      </AppContainer>
     
      
   
  </div>
  )
}

export default Home