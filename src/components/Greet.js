import React from 'react';

// function Greet(){
//     return <h1>Hello Fred !</h1>
// }


// const Greet = (props)=>{
// console.log(props)
// return <div>
//     <h1>Hello {props.name} vous avez {props.age} </h1>
     
//     <p>{props.children}</p>
// </div>
// }



const Greet = ({name,age, children})=>{

return <div>
    <h1>Hello {name} vous avez {age} </h1>
     <p>{children}</p>
  
</div>
}
  
export default Greet;