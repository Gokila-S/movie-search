import MovieList from "../components/MovieList"

function Home() {
    const movies = [
        { id:1, title:"Interstellar" ,release_year:2017},
        { id:2, title:"Zatura" ,release_year:1997},
        { id:3, title:"Moon" ,release_year:2005}
    ];

    const handleSubmit = () =>{
        alert("submitted");
    }
  return (
    <>
      <form className="search-form">
        <input type="text" className="movie-input" placeholder="Searching..." />
        <button className="search-btn" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieList movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
export default Home