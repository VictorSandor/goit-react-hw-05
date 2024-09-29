import { Link, useLocation } from "react-router-dom";
import { format } from "date-fns";
import style from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  const location = useLocation();
  const releaseDate = movie.release_date
    ? format(new Date(movie.release_date), " (yyyy)")
    : "";

  return (
    <div className={style.card}>
      <Link to={`/movies/${movie.id}`} state={location} className={style.link}>
        {movie.poster_path ? (
          <img
            className={style.poster}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className={style.noPoster}>
            <span className={style.noPosterText}>Poster Not Found</span>
          </div>
        )}
        <div className={style.title}>
          {movie.title}
          {releaseDate}
        </div>
      </Link>
    </div>
  );
}