import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './css/dataFetchToDo.css'

function DataFetchAllToDos() {


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [todos, setToDos] = useState({});

   

    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
            setLoading(false);
            setToDos(response.data);
            setError('');
        })
        .catch((error) => {
            setLoading(false);
            setToDos();
            setError(error);});

    })
  return (
    <div>
        {loading ? 'Loading...' : todos.map((todo,index)=>{
                return(
                        
                
                    <div 
                    
                    className={todo.completed ? 'rouge' : 'vert'} key={index} >
                        <h2>{todo.title} </h2>
                     
                        <p>{todo.userId} </p>
                       
                        <p>

                            {todo.completed ? 'True' : 'False'} </p>
                        <hr/>

                        {error ? 'Error' : null }
                    </div>)
        }
        )}

    </div>
  )
}

export default DataFetchAllToDos