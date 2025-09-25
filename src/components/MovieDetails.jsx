import { useNavigate, useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { title } = useParams(); 
  const navigate = useNavigate(); 

  const movie = movies.find((m) => m.title === title);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="movie_details">

      <div className="movie_details_content">
        <h1>{movie.title}</h1> 
        <p>{movie.description}</p> 
        <h3>⭐ Rating: {movie.rating}</h3> 
        <button onClick={() => navigate("/")}>⬅ Back to Home</button> 
      </div>

      
      <iframe
        src={movie.trailer.replace("watch?v=", "embed/")} 
        title="Movie Trailer"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieDetails;