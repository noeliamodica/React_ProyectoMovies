import styles from './moviesGrid.module.css'
import movies from '../movies.json'
import MoviesCard from './moviesCard';



export default function MoviesGrid (){
    
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
