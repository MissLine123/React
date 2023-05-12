import React, { Component } from 'react'
import './css/newsletter.css'
class Newsletter extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          nom: '',
          prenom:'',
          email: '',
          pseudo: '',
        
        }
      }

    handlePseudoChange = event => {
        console.log(event.target.className);
        if (event.target.value.length <=3) {
            event.target.className = "border-error";
        }
        else{
            event.target.className = "border-success";
        }
        this.setState({pseudo: event.target.value});
    }
    handleNomChange = event => {
        this.setState({nom: event.target.value});
    }
    handlePrenomChange = event => {
        this.setState({prenom: event.target.value});
    }
    handleEmailChange = event => {
        this.setState({email: event.target.value});
    }
    handleSubmit = event => {
        alert (`Merci,   ${this.state.nom} ${this.state.prenom} d'avoir pris contact avec nous. Nous reviendrons vers vous à cet email :  ${this.state.email}`)
        event.preventDefault();
    }


  render() {
    const { nom, prenom, email, pseudo} = this.state;

    

    return (
      <form onSubmit={this.handleSubmit}>
         <label for="pseudo">Pseudo</label>
        <input type="text" name="pseudo" value={pseudo} onChange={this.handlePseudoChange}  />
      
    
        <br/>
        

        <label for="nom">Nom:</label>
        <input type="text" name="nom" value={nom} onChange={this.handleNomChange}  />
      
      
        <br/>
        <label for="prenom">Prénom:</label>
        <input type="text" name="prenom" value={prenom} onChange={this.handlePrenomChange} />
        <br/>
        <label for="email">Email:</label>
        <input type="email" name="email" value={email} onChange={this.handleEmailChange} />
        <br/>
        <input type="submit" value="Valider"/>
      </form>
    )
  }
}

export default Newsletter