import movie from './movie.json'
import styles from './MoviesDetails.module.css'
import { useParams } from 'react-router';

export default function MovieDetails(){

    const{movieId}= useParams();

    const imageUrl= "https://image.tmdb.org/t/p/w400" + movie.poster_path;

    return (
    <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title}/>
        <div className={`${styles.col} ${styles.movieDetails}`} >
            <p> <strong> 
                Title:</strong> {movie.title}
            </p>
            <p> <strong> 
                Genres: </strong>
                
                {movie.genres.map(genre => genre.name).join(", ") }
            </p>

            <p> <strong> 
                Description: </strong> {movie.overview}
            </p>
        </div>
    </div>
    )
}