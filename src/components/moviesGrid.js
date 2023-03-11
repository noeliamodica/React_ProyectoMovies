import movies from '../movies.json'
import MoviesCard from './moviesCard';

export default function MoviesGrid (){
    console.log (movies);
    return(
        <div>

        {movies.map((movie) => (
                         <MoviesCard  key={movie.id} movie={movie} />

                            ))
                        }
                        
                
        </div>
    )
}
