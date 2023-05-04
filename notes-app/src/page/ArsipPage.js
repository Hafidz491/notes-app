import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import NotesListActive from "../components/NotesListArchived";
import NotesSearch from "../components/NotesSearch";
import { getArchivedNotes, unarchiveNote } from "../utils/data";

function ArsipPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  const navigate = useNavigate();
  function directTo() {
    navigate("/arsip");
  }

  return (
    <ArsipPage
      navigate={directTo}
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
    />
  );
}

class ArsipPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onUnarchivedHandler = this.onUnarchivedHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  onUnarchivedHandler(id) {
    unarchiveNote(id);
    const { navigate } = this.props;
    navigate();
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLocaleLowerCase()
        .includes(this.state.keyword.toLocaleLowerCase());
    });

    return (
      <section>
        <h2 className="title-notes_app">Catatan Arsip</h2>
        <NotesSearch
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesListActive notes={notes} onArchived={this.onUnarchivedHandler} />
      </section>
    );
  }
}

export default ArsipPageWrapper;
