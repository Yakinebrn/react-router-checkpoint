import { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "John Wick",
      tagline: "Revenge is all he has left.",
      description:
        "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      posterURL:
        "https://fr.web.img2.acsta.net/c_310_420/pictures/14/10/08/11/49/255061.jpg",
      rating: 4.6,
      trailer: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
    },
    {
      title: "The Conjuring 2",
      tagline:
        "Enfield, London 1977. The next true story from the case files of Ed and Lorraine Warren.",
      description:
        "Ed and Lorraine Warren travel to London to help a single mother and her four children plagued by malicious spirits.",
      posterURL:
        "https://www.tallengestore.com/cdn/shop/products/TheConjuring2-HollywoodEnglishHorrorMoviePoster_c8d4b4d6-c805-47eb-bbdf-498a41e5bcf2.jpg?v=1625220797",
      rating: 4.2,
      trailer: "https://www.youtube.com/watch?v=VFsmuRPClr4",
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
    setIsModalOpen(false);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch =
      searchTitle === "" ||
      movie.title.toLowerCase().includes(searchTitle.toLowerCase());

    const ratingMatch =
      searchRating === 0 ||
      Math.floor(movie.rating) === Math.floor(searchRating);

    return titleMatch && ratingMatch;
  });

  return (
    <BrowserRouter>
      <div className="app">
        <h1>Movie App 🎥</h1>

         <Routes>
          {/* the home page route */}
          <Route
            path="/"
            element={
              <>
                
                <Filter
                  setSearchTitle={setSearchTitle}
                  setSearchRating={setSearchRating}
                />

                
                <button onClick={() => setIsModalOpen(true)}>Add Movie</button>

                
                <AddMovie isOpen={isModalOpen} addMovie={addMovie} />

                
                <MovieList movies={filteredMovies} />
              </>
            }
          />

          
          <Route
            path="/movie/:title"
            element={<MovieDetails movies={filteredMovies} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
