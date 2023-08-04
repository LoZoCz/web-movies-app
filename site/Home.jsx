import "../scss/default.scss";
import "../scss/main.scss";
import { Sidebar } from "../components/Sidebar";
import { SearchInp } from "../components/SearchInp";
import { Trending } from "../components/Trending";
import { Recommended } from "../components/Recommended";
import PropTypes from "prop-types";
import { useState } from "react";
import { SearchedFilms } from "../components/SearchedFilms";

export const Home = ({ movies, changeBookmark }) => {
  const [searchedText, setSearchedText] = useState("");
  // const [searchedFilms, setSearchedFilms] = useState([]);

  const searchItem = () => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchedText.toLowerCase()),
    );
  };

  const handleInputChange = (e) => {
    setSearchedText(e.target.value);
    searchItem();
  };

  return (
    <>
      <Sidebar />
      <main className="main-cont">
        <SearchInp inputChange={handleInputChange} searchHandle={searchItem} />
        {searchedText === "" ? (
          <div className="home-divs">
            <Trending movies={movies} changeBookmark={changeBookmark} />
            <Recommended movies={movies} changeBookmark={changeBookmark} />
          </div>
        ) : searchItem().length === 0 ? (
          <h1>
            There is no reasult with that name: &quot; {searchedText} &quot;
          </h1>
        ) : (
          <SearchedFilms
            searchedFilms={searchItem()}
            changeBookmark={changeBookmark}
          />
        )}
      </main>
    </>
  );
};

Home.propTypes = {
  movies: PropTypes.array,
  changeBookmark: PropTypes.func,
};
