import React from "react";
import NotesListActive from "./NotesListActive.js";
import NotesListArchived from "./NotesListArchived.js";

function NotesBody({
  onDelete,
  onArchived,
  onUnarchived,
  activeData,
  archiveData,
}) {
  return (
    <React.Fragment>
      <section className="container-active">
        <h2 className="title-active">Catatan Aktif</h2>
        <div className="notes-active">
          {activeData.length !== 0 ? (
            <NotesListActive
              onDelete={onDelete}
              notes={activeData}
              onArchived={onArchived}
            />
          ) : (
            <p className="text-empty">Tidak ada catatan</p>
          )}
        </div>
      </section>
      <section className="container-archive">
        <h2 className="title-archive">Arsip</h2>
        <div className="notes-archive">
          {archiveData.length !== 0 ? (
            <NotesListArchived
              onDelete={onDelete}
              notes={archiveData}
              onUnarchived={onUnarchived}
            />
          ) : (
            <p className="text-empty">Tidak ada catatan</p>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}

export default NotesBody;
