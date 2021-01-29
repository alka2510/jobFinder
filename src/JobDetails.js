import React from 'react';
const JobDetails = ({ selectedJob }) => {
    const { name, location, salary, description, logo } = selectedJob;
    const { city, country } = location;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{`${city}, ${country}`}</h2>
            <img src={logo} alt="" className="img img-thumbnail" />
            <p>{description}</p>
            <div>Salary: {salary / 1000}K</div>
        </div>
    )
};
export default JobDetails;