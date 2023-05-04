import React from "react";
import PropTypes from "prop-types";
import NotesItemBody from "./NotesItemBody";

function NotesListArchived({ notes, onDelete, onUnarchived }) {
  if (!notes.length) {
    return <p className="text-empty">Tidak ada catatan!</p>;
  }

  return (
    <div className="notes-list_archived">
      {notes.map((note) => (
        <NotesItemBody
          // changeButton="Unarchived"
          key={note.id}
          id={note.id}
          // onDelete={onDelete}
          // onArchived={onUnarchived}
          {...note}
        />
      ))}
    </div>
  );
}

NotesListArchived.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  // onUnarchived: PropTypes.func.isRequired,
  // onDelete: PropTypes.func.isRequired,
};

export default NotesListArchived;
