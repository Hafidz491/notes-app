import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

function NotesItemButtonDelete({ id, onDelete }) {
  const navigate = useNavigate();

  function onDeleteHandler(noteId) {
    onDelete(noteId);
  }

  return (
    <button
      className="notes-item-button_delete"
      onClick={() => {
        onDeleteHandler(id);
        navigate("/");
      }}
    >
      <MdDeleteForever size={24} />
    </button>
  );
}

NotesItemButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesItemButtonDelete;
