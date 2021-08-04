import React from "react";
import { connect } from "react-redux";
import "./JobDetails.css";
const JobDetails = ({ job }) => {
  if (!job) {
    return <div></div>;
  }
  const { name, location, salary, description, logo } = job;
  const { city, country } = location;
  return (
    <div className="job_detail">
      <h1>{name}</h1>
      <h2>{`${city}, ${country}`}</h2>
      <img src={logo} alt="" className="img img-thumbnail" />
      <p>{description}</p>
      <div>Salary: {salary / 1000}K</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { job: state.selectedJob };
};

export default connect(mapStateToProps)(JobDetails);
