import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: true
      };
    }

  render() {
   
    //     if (this.state.isLoggedIn){
    //         return <div>Welcome Fréd</div>
    //     }
    //  else {
    //     return <div>Welcome Guest</div>
    //  }
       
    //OPERATEUR TERNAIRE :
    // return this.state.isLoggedIn ?
    //  ( <div>Welcome Fréd</div>) : ( <div>Welcome Guest</div>) 


    //OPERATEUR CIRCUIT COURT (if sans else) :
    // return this.state.isLoggedIn && <div>Welcome Fréd</div>


    //PAR UNE VARIABLE
    let message;
    if (this.state.isLoggedIn)
    message = <div>Welcome Fréd</div>
    else 
    message = <div>Welcome Guest</div>
    return message;
  }
}

export default UserGreeting