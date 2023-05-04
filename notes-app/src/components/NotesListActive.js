import React from "react";
import PropTypes from "prop-types";
// import NotesItem from "./NotesItem";
import NotesItemBody from "./NotesItemBody";

function NotesListActive({ notes, onDelete, onArchived }) {
  if (!notes.length) {
    return <p className="text-empty">Tidak ada catatan!</p>;
  }

  return (
    <div className="notes-list_active">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NotesItemBody
            // changeButton="Archived"
            key={note.id}
            id={note.id}
            // onDelete={onDelete}
            onArchived={onArchived}
            {...note}
          />
        ))
      ) : (
        <p>Tidak ada catatan!</p>
      )}
    </div>
  );
}

NotesListActive.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onArchived: PropTypes.func.isRequired,
  // onDelete: PropTypes.func.isRequired,
};

export default NotesListActive;
