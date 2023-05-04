import React from "react";
import { useParams } from "react-router-dom";
import NotesDetail from "../components/NotesDetail";
import { getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/data";

function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailPage id={String(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onUnarchivedHandler = this.onUnarchivedHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
  }

  onArchivedHandler(id) {
    archiveNote(id);
  }

  onUnarchivedHandler(id) {
    unarchiveNote(id);
  }

  render() {
    if (this.state.notes === null) {
      return <p>Tidak ada catatan!</p>;
    }

    const archived = this.state.notes.archived;

    return (
      <section>
        <NotesDetail
          {...this.state.notes}
          onDelete={this.onDeleteHandler}
          onChange={
            archived ? this.onArchivedHandler : this.onUnarchivedHandler
          }
          onArchived={this.onArchivedHandler}
        />
      </section>
    );
  }
}

export default DetailPageWrapper;
