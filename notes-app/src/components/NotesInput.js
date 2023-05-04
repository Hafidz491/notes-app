import React from "react";
import PropTypes from "prop-types";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    // Inisiasi State
    this.state = {
      maxlength: 50,
      title: "",
      body: "",
    };

    this.onJudulChangeEventHandler = this.onJudulChangeEventHandler.bind(this);
    this.onCatatanEventHandler = this.onCatatanEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onJudulChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onCatatanEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
        <p>Sisa karakter: {this.state.maxlength - this.state.title.length}</p>
        <input
          type="text"
          placeholder="Judul catatan"
          value={this.state.title}
          onChange={this.onJudulChangeEventHandler}
          maxLength={this.state.maxlength}
        />
        <textarea
          type="text"
          placeholder="Tuliskan catatan disini..."
          value={this.state.body}
          onChange={this.onCatatanEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
