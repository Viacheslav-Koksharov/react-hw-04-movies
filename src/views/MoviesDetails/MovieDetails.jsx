import { useState, useEffect } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { IMAGE_URL, getMovieById } from "../../servises/api.js";

import {
  ContainerMovieDetails,
  Title,
  GoBackButton,
  ImageContainer,
  InfoContainer,
  MovieTitle,
  UserScore,
  Owerwiew,
  Genres,
  List,
  LinkItem,
} from "./MovieDetails.styled.js";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  useEffect(() => {
    getMovieById(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  return (
    <>
      <Title>Movie Details</Title>
      <GoBackButton onClick={handleClick}> Go Back</GoBackButton>
      <ContainerMovieDetails>
        {movie && (
          <>
            <ImageContainer>
              <img
                src={IMAGE_URL + movie.poster_path || "no image"}
                alt={movie.title}
              />
            </ImageContainer>
            <InfoContainer>
              <MovieTitle>{movie.title}</MovieTitle>
              <UserScore>User Score: {movie.vote_average}</UserScore>
              <Owerwiew>Overview: {movie.overview}</Owerwiew>
              <Genres>
                Genres: {movie.genres.map((genre) => genre.name).join(", ")}
              </Genres>
            </InfoContainer>
          </>
        )}
      </ContainerMovieDetails>
      <List>
        <LinkItem to={"cast"}>Cast</LinkItem>
        <LinkItem to={"reviews"}>Reviews</LinkItem>
      </List>
      <Outlet />
    </>
  );
};

export default MovieDetails;
