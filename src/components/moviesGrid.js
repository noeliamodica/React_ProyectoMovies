import styles from './moviesGrid.module.css'
import MoviesCard from './moviesCard';
import { useEffect, useState } from 'react';


export default function MoviesGrid (){

   const [movies, setMovies]= useState([]);

    useEffect( () =>{
        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers:{
             Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzdmOWRmMjZiNDZlYzM3ZTBkNzg3NTMxY2Q1NDJiMyIsInN1YiI6IjY0MGQzMWUxMzIzZWJhMDEwYjkwNjIyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CZ4aLBP4njQNk9I3D3JzRYODyWokcwKU33fQmElf3hs",    
                "Content-Type": "application/json;charset=utf-8",
            },
        }).then(result => result.json()).then(data =>{
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
