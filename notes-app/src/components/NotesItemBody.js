import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/data";

function NotesItemBody({ id, title, createdAt, body }) {
  return (
    <div className="notes-item_body">
      <h3 className="notes-item_title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="notes-item_create">{showFormattedDate(createdAt)}</p>
      <p className="notes_item_body">{body}</p>
    </div>
  );
}

NotesItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotesItemBody;
