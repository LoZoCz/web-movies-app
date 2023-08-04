import "../scss/default.scss";
import "../scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../site/Home.jsx";
import { FilmsGrid } from "../site/FilmsGrid.jsx";
import Data from "../json/data.json";
import { useState } from "react";
import { BookmarkedGrid } from "../site/BookmarkedGrid";
import { NoPage } from "../site/NoPage";
import { MovieSite } from "../site/MovieSite";

function App() {
  const [movies, setMovies] = useState(() =>
    Data.map((film, index) => ({ id: index, ...film })),
  );

  const changeBookmark = (filmId) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === filmId) {
          return { ...movie, isBookmarked: !movie.isBookmarked };
        }
        return movie;
      });
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} changeBookmark={changeBookmark} />}
        />
        <Route
          path="/films"
          element={
            <FilmsGrid
              title={"Movies"}
              filter={"Movie"}
              movies={movies}
              changeBookmark={changeBookmark}
            />
          }
        />
        <Route
          path="/series"
          element={
            <FilmsGrid
              title={"TV Series"}
              filter={"TV Series"}
              movies={movies}
              changeBookmark={changeBookmark}
            />
          }
        />
        <Route
          path="/bookmarked"
          element={
            <BookmarkedGrid
              title={"Your bookmarked"}
              filter={true}
              movies={movies}
              changeBookmark={changeBookmark}
            />
          }
        />

        {movies.map((item) => {
          return (
            <Route
              key={item.id}
              path={`/${item.title.replace(/ /g, "-").toLowerCase()}`}
              element={
                <MovieSite movie={item} changeBookmark={changeBookmark} />
              }
            />
          );
        })}

        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
