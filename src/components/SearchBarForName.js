import React from "react";
import "./SearchBar.css";

class SearchBarForName extends React.Component {
  state = { term: "" };
  jobFilterOnChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label className="label_name">
              <b>What </b>{" "}
            </label>
            &nbsp; &nbsp;
            <input
              type="text"
              placeholder="Job title, keywords or company"
              autoFocus
              value={this.state.term}
              onChange={this.jobFilterOnChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBarForName;
