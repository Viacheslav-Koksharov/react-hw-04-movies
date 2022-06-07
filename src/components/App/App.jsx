import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "../Container";
import Navigation from "../Navigation";
import "./App.css";

const HomePage = lazy(() =>
  import("../../views/HomePage" /* webpackChunkName: "home" */)
);
const MoviesPage = lazy(() =>
  import("../../views/MoviesPage" /* webpackChunkName: "movies" */)
);
const MoviesDetails = lazy(() =>
  import("../../views/MoviesDetails" /* webpackChunkName: "movies-details" */)
);
const MovieCast = lazy(() =>
  import("../../views/Cast" /* webpackChunkName: "cast" */)
);
const MovieReview = lazy(() =>
  import("../../views/Review" /* webpackChunkName: "reviews" */)
);
const NotFound = lazy(() =>
  import("../../views/NotFound" /* webpackChunkName: "not-found" */)
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/*" element={<MoviesPage />} />
          <Route path="/movies/:movieId" exact element={<MoviesDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
          <Route element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
