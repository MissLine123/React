import React, { useEffect, useReducer } from "react"
import axios from "axios"


function Allposts() {
    const initialState = {
        loading: true,
        error: '',
        posts: {}
    }
    const reducer = (state, action)=>{
        switch (action.type) {
            case 'FETCH_SUCCESS': return (
                {
                    loading: false,
                    error: '',
                    posts: action.payload 
                }
            )
            case 'FETCH_ERROR': return ({
                loading: false,
                error:'Something went wrong',
                posts: {},
                
            })
            case 'default': return state
        }
    }
 const [state,dispatch] = useReducer(reducer, initialState);

 useEffect(()=>{
    axios.get('http://localhost:5000/allposts')
    .then(response => {
        
        dispatch({type: 'FETCH_SUCCESS', payload: response.data
        })

    }).catch(error => {
        dispatch({type: 'FETCH_ERROR'})
    });

 })
  return (
    <div>
        <p>
            {state.loading ? 'Loading' : state.posts.map((post,index)=>{
                return(
                    <div key={index}>
                        <p>{post.titre}</p>
                        <p>{post.soustitre}</p>
                        <p>{post.para}</p>

                    </div>
                )
            })}
        </p>
    </div>
  )
}

export default Allposts