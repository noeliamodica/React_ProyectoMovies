
export default function MoviesCard ({movie}){
    
    //para obtener la ruta a la imagen
    const imageUrl= "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return(
        <div className='logo-contenedor'>
            <img
            src={imageUrl}
            className='imagen'
            alt={movie.title} />
            <div>
                {movie.title}
            </div>
      </div>
    )
}