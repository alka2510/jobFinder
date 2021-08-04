import "./JobBrief.css";
function JobBrief(props) {
  const { clicked, name, location, salary, description, logo } = props;
  const { city, country } = location;

  return (
    <div className="jobs_list" onClick={clicked}>
      <h2 className="job_name">{name}</h2>
      <h5>{`${city}, ${country}`}</h5>
      <img src={logo} alt="" className="job-post-image" />
      <br />
      <p>{description}</p>
      <div className="salary">Salary: {salary / 1000}K</div>
      <div className="button" style={{ paddingTop: "30px" }}>
        <button className="apply_button">Apply</button>
        <button className="notInterested_button">Not interested</button>
      </div>
    </div>
  );
}

export default JobBrief;
