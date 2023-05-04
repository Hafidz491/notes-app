import React from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavAdd from "../components/NavAdd";
import NotesListActive from "../components/NotesListActive";
import NotesSearch from "../components/NotesSearch";
import { getActiveNotes, archiveNote } from "../utils/data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  const navigate = useNavigate();
  function directTo() {
    navigate("/archive");
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  onArchiveHandler(id) {
    archiveNote(id);
    const { navigate } = this.props;
    navigate();
  }

  render() {
    // if (this.state.notes === null) {
    //   return <p>Tidak ada catatan</p>;
    // }

    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLocaleLowerCase()
        .includes(this.state.keyword.toLocaleLowerCase());
    });

    return (
      <section>
        <h2 className="title-notes_app">Catatan Aktif</h2>
        <NotesSearch
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesListActive notes={notes} />
        <NavAdd />
      </section>
    );
  }
}

export default HomePageWrapper;
