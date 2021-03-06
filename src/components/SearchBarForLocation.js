import React from "react";
import "./SearchBar.css";
class SearchBarForLocation extends React.Component {
  state = { jobLocation: "" };
  jobFilterOnChange = (event) => {
    this.setState({ jobLocation: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.jobLocation);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label className="label_name">
              <b>Where</b>
            </label>
            &nbsp; &nbsp;
            <input
              type="text"
              placeholder="Enter city"
              value={this.state.jobLocation}
              onChange={this.jobFilterOnChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBarForLocation;
