function JobBrief(props) {
  const {clicked, name, location, salary, description, logo } = props;
  const { city, country } = location;

  return (
    <div className="jobs" style={{maxWidth: '20vw'}} onClick={clicked}  >
      <h4>{name}</h4>
      <h5>{`${city}, ${country}`}</h5>
      <img src={logo} alt="" className="job-post-image" /><br/>
      <p>{description}</p>
      <div className="salary">Salary: {salary / 1000}K</div>
      <button style={{backgroundColor: 'blue', color:'white' }}>Apply</button>
      <button style={{backgroundColor: 'red', color:'white' }}>Not interested</button>
      <hr />
    </div>
  );
}

export default JobBrief;