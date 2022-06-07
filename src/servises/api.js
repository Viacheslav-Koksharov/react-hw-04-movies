const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "0d46ab9d3c4cc8e68ae3890ddcad4526";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const getTrendings = async () => {
  const response = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  const trendings = response.json();

  return trendings;
};

const getMovieById = async (id) => {
  const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  const movieById = response.json();

  return movieById;
};

const getMovieCast = async (id) => {
  const response = await fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  const movieCast = response.json();

  return movieCast;
};

const getMovieReviews = async (id) => {
  const response = await fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  const movieReviews = response.json();

  return movieReviews;
};

const getMovieSearch = async (query) => {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
  );
  const search = response.json();

  return search;
};
export {
  IMAGE_URL,
  getTrendings,
  getMovieById,
  getMovieCast,
  getMovieReviews,
  getMovieSearch,
};
