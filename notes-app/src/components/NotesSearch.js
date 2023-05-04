import React from "react";
import PropTypes from "prop-types";

function NotesSearch({ keyword, keywordChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari catatan..."
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

NotesSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default NotesSearch;
