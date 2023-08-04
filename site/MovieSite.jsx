import PropTypes from "prop-types";
import { Sidebar } from "../components/Sidebar";
import "../scss/movie-site.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faFilm, faTv } from "@fortawesome/free-solid-svg-icons";

export const MovieSite = ({ movie, changeBookmark }) => {
  return (
    <>
      <Sidebar />
      <main className="main-film-cont">
        <div className="image-btn-wrapper">
          <img
            src={movie.thumbnail.regular.large}
            alt={`${movie.category} image`}
          />
        </div>
        <div className="film-info-wrapper">
          <h1 className="film-title">{movie.title}</h1>
          <p className="film-info">
            {movie.year} &bull; {"  "}{" "}
            <FontAwesomeIcon
              icon={movie.category === "Movie" ? faFilm : faTv}
            />{" "}
            {"  "} {movie.category} &bull; {movie.rating}
          </p>
          <p className="film-desc">{movie.description}</p>
          <button
            className="bookmark-btn"
            onClick={() => changeBookmark(movie.id)}
            data-marked={movie.isBookmarked ? "true" : "false"}
          >
            <FontAwesomeIcon icon={faBookmark} /> &bull; Bookmark
          </button>
        </div>
      </main>
    </>
  );
};

MovieSite.propTypes = {
  movie: PropTypes.object,
  changeBookmark: PropTypes.func,
};
