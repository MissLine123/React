import React, {useEffect,useState} from 'react'
import axios from 'axios'

function Onefilm() {

    const [loading, setLoading] = useState( true);
    const [error, setError] = useState("");
    const [film, setFilm] = useState({});

    useEffect(() =>{
        axios.get('http://localhost:5000/film/644288d98eb0f65f9a6c0018')
        .then((response) =>{
            setLoading(false);
            setError('');
            setFilm(response.data);


        })
        .catch((error) =>{
            setLoading(false);
            setError(error);
            setFilm();
        });
    })
    

  return (
    <div>
    <h1>{loading ? 'Loading...' : film.titre}</h1> 
    <p>  {loading ? 'Loading...' : film.genre}</p>
       <p> {loading ? 'Loading...' : film.nb_ventes}</p>
       <p>{loading ? 'Loading...' : film.poster}</p>  
    </div>
  )
}

export default Onefilm