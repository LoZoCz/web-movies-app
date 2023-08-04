import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "../scss/filter-box.scss";
import { useNavigate } from "react-router-dom";

export const SearchedFilms = ( { searchedFilms, changeBookmark } ) => {
  const navigate = useNavigate()
  return (
    <div className="filter-divs">
      {searchedFilms.map((item) => {
        return (
          <div className="film" key={item.id}>
            <div className="film-image">
              <img src={item.thumbnail.regular.small} alt="grid film img" />
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
            <p className="film-title" onClick={() => navigate(item.title.replace( / /g, "-" ).toLowerCase())}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

SearchedFilms.propTypes = {
  searchedFilms: PropTypes.array,
  changeBookmark: PropTypes.func,
};
