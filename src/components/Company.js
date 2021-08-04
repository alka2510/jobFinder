import React from "react";
import { connect } from "react-redux";
import "./JobBrief.css";

const Company = ({ company }) => {
  if (!company) {
    return <div></div>;
  }
  return (
    <div className="jobs">
      <hr />
      <h1 style={{ textAlign: "center" }}>{company.name} </h1>
      {company.jobs.map((job, idx) => {
        return (
          <div key={idx} className="jobs_list">
            <h4 className="job_name">{job.title}</h4>
            <img
              src="https://picsum.photos/id/180/200/100"
              alt=""
              className="job-post-image"
            />
            <h4>{`${job.locations[0]}, ${job.locations[1]}, ${job.locations[2]}`}</h4>
            <div>Job Type: {job.jobType}</div>
            <p>
              Requirements:{" "}
              {`${job.requirements[0]}, ${job.requirements[1]}, ${job.requirements[2]}`}
            </p>
            <p className="salary">Salary: {job.salary}</p>
            <div className="button">
              <button className="apply_button">Apply</button>
              <button className="notInterested_button">Not interested</button>
            </div>

            <br />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { company: state.selectedCompany };
};

export default connect(mapStateToProps)(Company);
