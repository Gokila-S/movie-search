import MovieList from "../components/MovieList";
import {useState} from "react";

function Home() {

    const [searchQuery,setsearchQuery] = useState("");
    const movies = [
        { id:1, title:"Interstellar" ,release_year:2017},
        { id:2, title:"Zatura" ,release_year:1997},
        { id:3, title:"Moon" ,release_year:2005}
    ];

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(searchQuery);
        setsearchQuery("");
    }
  return (
    <>
      <form  onSubmit={handleSubmit} className="search-form">
        <input type="text" className="movie-input" placeholder="Search for movies..." value={searchQuery} onChange={(e)=>{setsearchQuery(e.target.value)}}/>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="movie-container">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery) && <MovieList movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
export default Home