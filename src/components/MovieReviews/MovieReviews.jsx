import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { getMovieReviews } from "../../tmdb-api";

import style from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        setError("");
        const data = await getMovieReviews(movieId);
        data.length === 0 &&
          setError("We don't have any reviews for this movie");
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div className={style.container}>
      {error && <ErrorMessage error={error} />}
      {reviews.length > 0 && (
        <ul className={style.reviewsList}>
          {reviews.map((review) => (
            <li key={review.id} className={style.reviewsListItem}>
              <p className={style.author}>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
    </div>
  );
}