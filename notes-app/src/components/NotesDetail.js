import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/data";
import NotesItemButtonDelete from "./NotesItemButtonDelete";
import NotesItemButtonArchived from "./NotesItemButtonArchived";

function NotesDetail({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchived,
  onChange,
}) {
  return (
    <div className="note-detail">
      <div className="item-detail">
        <h1 className="title-notes_detail">{title}</h1>
        <p className="create-notes_detail">{showFormattedDate(createdAt)}</p>
        <p className="body-notes_detail">{body}</p>
      </div>
      <div className="button-detail">
        <NotesItemButtonDelete id={id} onDelete={onDelete} />
        <NotesItemButtonArchived
          id={id}
          onChange={onChange}
          onArchived={onArchived}
        />
      </div>
    </div>
  );
}

NotesDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchived: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NotesDetail;
