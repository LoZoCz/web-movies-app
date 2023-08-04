import logo from "../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHouse,
  faFilm,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import "../scss/nav-bar.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const Sidebar = () => {
  const [links] = useState({
    home: '/',
    movies: '/films',
    series: '/series',
    bookmark: '/bookmarked',
  });
  
  const location = useLocation();

  const changeData = (link) => {
    return link === location.pathname ? "true" : "false"
  }

  return (
    <nav className="nav-bar">
      <div className="upper-options">
        <img src={logo} alt="main-logo-home-btn" />
        <ul className="option-list">
          <Link to={links.home} className="option" data-active={changeData(links.home)}>
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link to={links.movies} className="option" data-active={changeData(links.movies)}>
            <FontAwesomeIcon icon={faFilm} />
          </Link>
          <Link to={links.series} className="option" data-active={changeData(links.series)}>
            <FontAwesomeIcon icon={faTv} />
          </Link>
          <Link to={links.bookmark} className="option" data-active={changeData(links.bookmark)}>
            <FontAwesomeIcon icon={faBookmark} />
          </Link>
        </ul>
      </div>
      <img src="assets/image-avatar.png" alt="user pfp" className="user-pfp" />
    </nav>
  );
};

// linki zrobic
