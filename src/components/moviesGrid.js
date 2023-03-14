import styles from './moviesGrid.module.css'
import MoviesCard from './moviesCard';
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';


const [query, setQuery] = useSearchParams();


export default function MoviesGrid (){

   const [movies, setMovies]= useState([]);

   const query = useQuery();
   const search = query.get('search');
   console.log('search')
   

    useEffect( () =>{
        const searchUrl = search ? "/search/moviequery" + search  : "/discover/movie";
        get(searchUrl)
        .then(data =>{
            setMovies(data.results);
        })

      }, [search]);
    
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
