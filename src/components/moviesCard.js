import styles from './moviesCard.module.css'
import { Link } from 'react-router-dom';
export default function MoviesCard ({movie}){
    
    //para obtener la ruta a la imagen
    const imageUrl= "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return(
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id} >

            <img
            src={imageUrl}
            className={styles.movieImage}
            width={230}
            height={345}
            alt={movie.title} />
            <div>
                {movie.title}
            </div>
            </Link>
      </li>
    )
}