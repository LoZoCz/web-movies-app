import "../scss/search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const SearchInp = ({ inputChange, searchHandle }) => {
  return (
    <div className="serach-inp-wrapper">
      <button className="search-btn" onClick={searchHandle}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input
        className="search-inp"
        type="text"
        placeholder="Search for movies or TV series"
        onChange={inputChange}
      />
    </div>
  );
};

SearchInp.propTypes = {
  inputChange: PropTypes.func,
  searchHandle: PropTypes.func,
};
