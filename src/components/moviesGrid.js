import styles from './moviesGrid.module.css'
import movies from '../movies.json'
import MoviesCard from './moviesCard';
import NavBar from './components/NavBar';


export default function MoviesGrid (){
    
    return(
        <div>
            <div>
                <NavBar />
            </div>
        
        <ul className={styles.movieGrid} >

        {movies.map((movie) => (
                         <MoviesCard  key={movie.id} movie={movie} />

                            ))
                        }
                        
                
        </ul>
        </div>
    )
}
