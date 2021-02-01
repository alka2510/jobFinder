function JobBrief(props) {
  const {clicked, name, location, salary, description, logo } = props;
  const { city, country } = location;

  return (
    <div onClick={clicked} >
      <h4>{name}</h4>
      <h5>{`${city}, ${country}`}</h5>
      <img src={logo} alt="" className="img img-thumbnail" />
      <p>{description}</p>
      <div>Salary: {salary / 1000}K</div>
      <hr />
    </div>
  );
}

export default JobBrief;