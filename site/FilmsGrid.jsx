import { Sidebar } from "../components/Sidebar";
import "../scss/default.scss";
import "../scss/grid.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const FilmsGrid = ( { title, filter, movies, changeBookmark } ) => {
  const navigate = useNavigate()

  return (
    <>
      <Sidebar />
      <main className="main-cont">
        <h1 className="grid-title">{title}</h1>
        <div className="items-grid">
          {movies
            .filter((item) => item.category === filter)
            .map((item) => {
              return (
                <div className="film" key={item.id}>
                  <div className="film-image">
                    <img
                      src={item.thumbnail.regular.small}
                      alt="grid film img"
                    />
                    <button
                      className="bookmark-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        changeBookmark(item.id);
                      }}
                      data-marked={item.isBookmarked ? "true" : "false"}
                    >
                      <FontAwesomeIcon icon={faBookmark} />
                    </button>
                  </div>
                  <p className="film-info">
                    {item.year} &bull;{" "}
                    <FontAwesomeIcon
                      icon={item.category === "Movie" ? faFilm : faTv}
                    />{" "}
                    {item.category} &bull; {item.rating}
                  </p>
                  <p className="film-title" onClick={() => navigate(`/${item.title.replace( / /g, "-" ).toLowerCase()}`)}>{item.title}</p>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
};

FilmsGrid.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.any,
  movies: PropTypes.array,
  changeBookmark: PropTypes.func,
};
