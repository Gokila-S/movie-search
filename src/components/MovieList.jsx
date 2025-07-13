function MovieList({movie}){
    return(
        <>
        <div className="movie-container">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <button className="fav-btn">🩶</button>
            </div>
            <div className="movie-details">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-year">{movie.release_year}</p>
            </div>
        </div>
        </>
    )
}
export default MovieList;