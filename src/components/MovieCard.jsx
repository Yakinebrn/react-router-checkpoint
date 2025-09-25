import {  useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.title}`)}
    >
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.tagline}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
