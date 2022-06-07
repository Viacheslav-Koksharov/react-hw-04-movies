import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { getMovieSearch } from "../../servises/api.js";
import { ContainerSearch, LinkItem } from "./MoviesPage.styled.js";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    getMovieSearch(query).then((request) => setMovies(request.results));
  }, [query]);

  const onClick = (request) => {
    setQuery(request);
  };

  return (
    <ContainerSearch>
      <SearchBar onClick={onClick} />
      <Outlet />
      <ul>
        {movies?.map((movie) => (
          <li key={movie.id}>
            <LinkItem to={`/movies/${movie.id}`}>{movie.title}</LinkItem>
          </li>
        ))}{" "}
      </ul>
    </ContainerSearch>
  );
};

export default Movies;
