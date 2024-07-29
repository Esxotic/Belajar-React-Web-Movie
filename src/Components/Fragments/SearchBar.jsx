import Card from "./Card";
import { useState } from "react";

const SearchBar = () => {
  const [Movies, setMovies] = useState([]);

  const getMovies = async (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=eaf4902d&s=${search}`
    );
    const data = await res.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <>
      <form onSubmit={getMovies} className="text-center block font-poppins">
        <div className="max-w-lg mx-auto my-10 p-5 w-auto h-auto text-center shadow-lg rounded-lg bg-gradient-to-tr from-sky-200 to-sky-400">
          <label htmlFor="search" className="block text-white font-bold">
            Search Movie
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Silahkan nama film..."
            className="border w-80 h-7 border-slate-700 rounded-lg placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs p-2"
          />
          <button
            type="submit"
            className="search-button bg-purple-500 px-2 py-1 ml-1 text-xs rounded-lg border border-black shadow-lg text-white font-bold hover:bg-purple-300 hover:scale-105 hover:text-black transition"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex font-poppins mx-8 flex-wrap justify-center">
        {Movies.map((movie) => {
          return (
            <Card
              key={movie.imdbID}
              id={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              image={movie.Poster}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default SearchBar;
