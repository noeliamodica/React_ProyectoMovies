import movie from './movie.json'
import styles from './MoviesDetails.module.css'

export default function MovieDetails(){
    const imageUrl= "https://image.tmdb.org/t/p/w400" + movie.poster_path;

    return (
    <div className={styles.detailsContainer}>
        <img src={imageUrl} alt={movie.title}/>
        <div>
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