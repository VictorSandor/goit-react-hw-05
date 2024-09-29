import MovieCard from "../MovieCard/MovieCard";
import style from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={style.list}>
      {movies.map(movie => (
        <li className={style.listItem} key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}