import "../scss/trending.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Trending = ({ movies, changeBookmark }) => {
  const trendingLength = movies.filter(
    (item) => item.isTrending === true,
  ).length;

  const navigate = useNavigate();

  return (
    <div className="trending-wrapper">
      <h1 className="trending-title main-title">Trending</h1>
      <div
        className="films-slider"
        style={{ gridTemplateColumns: `repeat(${trendingLength}, 27.5rem)` }}
      >
        {movies
          .filter((item) => item.isTrending == true)
          .map((item) => {
            return (
              <div
                className="film"
                key={crypto.randomUUID()}
                onClick={() => navigate(`/${item.title.replace( / /g, "-" ).toLowerCase()}`)}
              >
                <img src={item.thumbnail.trending.small} alt="film image" />
                <p className="film-info">
                  {item.year} &bull;{" "}
                  <FontAwesomeIcon
                    icon={item.category === "Movie" ? faFilm : faTv}
                  />{" "}
                  {item.category} &bull; {item.rating}
                </p>
                <p className="film-title">{item.title}</p>
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
            );
          })}
      </div>
    </div>
  );
};

Trending.propTypes = {
  movies: PropTypes.array,
  changeBookmark: PropTypes.func,
};
