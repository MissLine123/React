import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DeleteFilm from '../DeleteFilm/DeleteFilm';
import axios from 'axios';

function UpdateFilm()  {
  const params = useParams()
  console.log(params.id);

    const [loading, setLoading] = useState( true);
    const [error, setError] = useState("");
    const [film, setFilm] = useState({});

    useEffect(() =>{
        axios.get('http://localhost:5000/film/' + params.id)
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
    
    const handleTitreChange = (event) => {
      // console.log(event.target.value);
      setFilm (event.target.value);
     
  }
  const handleGenreChange = (event) => {
    console.log(event.target.value);
    setFilm (event.target.value);
   
}
const handleNbVentestChange = (event) => {
  console.log(event.target.value);
  setFilm (event.target.value);
 
}
const handlePosterChange = (event) => {
  console.log(event.target.value);
  setFilm (event.target.value);
 
}
    


    return (
      <div>

<h1>{loading ? 'Loading...' : film.titre}</h1> 
    <p>  {loading ? 'Loading...' : film.genre}</p>
       <p> {loading ? 'Loading...' : film.nb_ventes}</p>
       <p>{loading ? 'Loading...' : film.poster}</p>  


        <form action={`http://localhost:5000/film/edit/${params.id}?_method=PUT`} method='post'>
        <input type="hidden" name="mehod" value="put" />
        <label>
            Titre
        </label>
        <input type='text' name='titre' value={film.titre} onChange={handleTitreChange}/>
        <label>
            Genre
        </label>
        <input type='text' name='genre' value={film.genre} onChange={handleGenreChange}/>
        <label>
            Nombre ventes
        </label>
        <input type='number' name='nb_ventes' value={film.nb_ventes} onChange={handleNbVentestChange}/>
        <label>
            Poster
        </label>
        <input type='text' name='poster' value={film.poster} onChange={handlePosterChange}/>

        <input type='submit' value='Update film' />
      </form>

      
      <DeleteFilm/>

      </div>
    )
  }


export default UpdateFilm