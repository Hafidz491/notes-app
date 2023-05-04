import React from "react";
import PropTypes from "prop-types";
import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function NotesItemButtonArchived({ onChange, id, onArchived }) {
  const navigate = useNavigate();

  function onArchivedHandler(noteId) {
    onChange(noteId);
  }
  return (
    <button
      className="notes-item-button_archive"
      onClick={() => {
        onArchivedHandler(id);
        navigate("/");
      }}
    >
      {onArchived ? (
        <MdOutlineArchive size={24} />
      ) : (
        <MdOutlineUnarchive size={24} />
      )}
    </button>
  );
}

NotesItemButtonArchived.propType = {
  id: PropTypes.string.isRequired,
  onArchived: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NotesItemButtonArchived;
