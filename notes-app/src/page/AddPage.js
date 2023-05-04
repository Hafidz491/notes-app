import React from "react";
import { addNote } from "../utils/data";
import NotesInput from "../components/NotesInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section>
      <NotesInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
