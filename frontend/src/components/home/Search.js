// AUTHOR: HARSHIT GAJJAR
import "./css/search.css";
import { useCallback } from "react";
import PropTypes from "prop-types";

function Search({ setSearch }) {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const optimizedVersion = useCallback(debounce(handleChange), []);

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Enter Something."
        onChange={optimizedVersion}
        className="search_input_home"
      />
    </div>
  );
}

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Search;
