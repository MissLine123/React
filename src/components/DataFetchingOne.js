import React, {useState, useEffect} from 'react'
import axios from 'axios' 





function DataFetchingOne() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // const [post, setPost] = useState({});
    const [film, setFilm] = useState({});
    const [nom, setNom] = useState("");
    
   


    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts/1')
        // .then(
        //     response => {
        //         setLoading(false);
        //         setPost(response.data);
        //         setError('');

        //     }
        // )
        // .catch(error => {
        //     setLoading(false);
        //     setError(error)
        //     setPost('');
        // })

      
        //CONCATENATION
        // axios.get('http://www.omdbapi.com/?apikey=1e36468a&t=' + nom)



        //BACKQUOTE
        axios.get(`http://www.omdbapi.com/?apikey=1e36468a&t=  ${nom}`)
        
        .then(
            response => {
                setLoading(false);
                setFilm(response.data);
                setError('');
                
            }
        )
         .catch(error => {
                 setLoading(false);
                 setError(error);
                 setFilm('');
                 
             })
    })

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setNom (event.target.value);
       
    }
  return (
    <React.Fragment>
        {/* <h1>
        {
            loading ? 'Loading...' : post.title
        } 
             </h1>

         <p>

        {
            loading ? 'Loading...' : post.body
        } 
         </p>


        
        {
        error ? 'Error' : null
        } */}


            <label>Entrer un film:</label>
            <input type="text" onChange={handleInputChange}  />

        <h1>Titre:

           { loading ? 'Loading...' : film.Title}
        </h1>
         Poster: 
           
           { loading ? 'Loading...' : <img src={film.Poster} />}

      
        <p>
                Année:
           { loading ? 'Loading...' : film.Year}
        </p>
        <p>
            BoxOffice:
           { loading ? 'Loading...' : film.BoxOffice}

        </p>
        
           {
        error ? 'Error' : null
        }
        
        

        
    </React.Fragment>
  )




  
}


export default DataFetchingOne