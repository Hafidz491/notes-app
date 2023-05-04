import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePageWrapper from "../page/HomePage";
import AddPage from "../page/AddPage";
import Navigation from "./Navigation";
import DetailPage from "../page/DetailPage";
import ArsipPageWrapper from "../page/ArsipPage";

function NotesApp() {
  return (
    <div>
      <div className="note-app">
        <header className="note-app__header">
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePageWrapper />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="/arsip" element={<ArsipPageWrapper />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

// class NotesApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getAllNotes(),
//       search: "",
//     };

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
//     this.onSearchHandler = this.onSearchHandler.bind(this);
//     this.onActiveHandler = this.onActiveHandler.bind(this);
//     this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
//   }

//   onDeleteHandler(id) {
//     const notes = this.state.notes.filter((notes) => notes.id !== id);
//     this.setState({ notes });
//   }

//   onAddNotesHandler({ title, body }) {
//     this.setState((prevState) => {
//       return {
//         notes: [
//           ...prevState.notes,
//           {
//             id: +new Date(),
//             title,
//             body,
//             createdAt: new Date().toLocaleDateString("id-ID"),
//             archived: false,
//           },
//         ],
//       };
//     });
//   }

//   onSearchHandler(event) {
//     const searchValue = event.target.value.toLowerCase();
//     this.setState({ search: searchValue });
//     event.preventDefault();
//   }

//   onActiveHandler(id) {
//     const notes = this.state.notes.filter((note) => note.id === id);
//     const noteActive = (notes[0].archived = true);
//     this.setState({ noteActive });
//   }

//   onUnarchiveHandler(id) {
//     const notes = this.state.notes.filter((note) => note.id === id);
//     const noteArchive = (notes[0].archived = false);
//     this.setState({ noteArchive });
//   }

//   render() {
//     const searchData = !this.state.search
//       ? this.state.notes
//       : this.state.notes.filter((note) =>
//           note.title.toLowerCase().match(this.state.search)
//         );
//     const activeData = searchData.filter((note) => note.archived === false);
//     const archiveData = searchData.filter((note) => note.archived === true);

//     return (
//       <div className="notes-app">
//         <NotesSearch onSearch={this.onSearchHandler} />
//         <NotesInput addNotes={this.onAddNotesHandler} />
//         <NotesBody
//           onDelete={this.onDeleteHandler}
//           activeData={activeData}
//           archiveData={archiveData}
//           onArchived={this.onActiveHandler}
//           onUnarchived={this.onUnarchiveHandler}
//         />
//       </div>
//     );
//   }
// }

export default NotesApp;
