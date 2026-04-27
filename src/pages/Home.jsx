import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Radha", release_date: "2022" },
    { id: 2, title: "Matrix", release_date: "2013" },
    { id: 3, title: "Remote", release_date: "2010" },
    { id: 4, title: "One Piece", release_date: "2009" },
    { id: 5, title: "Helper", release_date: "2008" },
    { id: 6, title: "Amuk", release_date: "2007" },
    { id: 7, title: "Naama", release_date: "2006" },
    { id: 8, title: "Gutro", release_date: "2005" },
    { id: 9, title: "Terminator", release_date: "2004" },
    { id: 10, title: "God's Plan", release_date: "2003" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
