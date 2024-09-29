import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { getMovieCredits } from "../../tmdb-api";

import style from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getCasts() {
      try {
        setIsLoading(true);
        setError("");
        const data = await getMovieCredits(movieId);
        data.length === 0 && setError("Sorry, there is no info...");
        setCasts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCasts();
  }, [movieId]);
  return (
    <div className={style.container}>
      {error && <ErrorMessage error={error} />}
      {isLoading && <Loader />}
      {casts.length > 0 && (
        <ul className={style.castList}>
          {casts.map((cast) => (
            <li key={cast.id} className={style.castListItem}>
              {cast.profile_path ? (
                <div className={style.profilePhoto}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                    alt={cast.name}
                    className={style.profileImg}
                  />
                </div>
              ) : (
                <div className={style.noProfilePhoto}>
                  <span className={style.noPhotoText}>No Photo</span>
                </div>
              )}
              <p className={style.name}>{cast.name}</p>
              <p className={style.character}>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}