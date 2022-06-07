import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../servises/api.js";
import { AuthorName, AuthorReview } from "./Review.styled.js";

const MovieReview = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then((request) => setReview(request.results));
  }, [movieId]);

  return (
    <div>
      {review.length > 0 ? (
        <>
          <ul>
            {review.map((el, index) => (
              <li key={index}>
                <AuthorName>{el.author}</AuthorName>
                <AuthorReview>{el.content}</AuthorReview>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No Reviews</p>
      )}
    </div>
  );
};
export default MovieReview;
