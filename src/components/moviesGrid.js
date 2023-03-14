import styles from './moviesGrid.module.css'
import MoviesCard from './moviesCard';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';


export default function MoviesGrid (){

   const [movies, setMovies]= useState([]);

 

    useEffect( () =>{
  
        get("/discover/movie")
        .then(data =>{
            setMovies(data.results);
        })

      }, []);
    
    return(
        <div>
         
        
        <ul className={styles.movieGrid} >

        {movies.map((movie) => (
                         <MoviesCard  key={movie.id} movie={movie} />

                            ))
                        }
                        
                
        </ul>
        </div>
    )
}
