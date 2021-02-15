import React from 'react';
import { connect } from 'react-redux';

const Company = ({company}) => {
  if(!company){
    return <div></div>
  }
  return (
    <div >
      <hr/>
      <h1 style={{textAlign: 'center'}}>{company.name}</h1>
      {company.jobs.map((job, idx) => {
        return(
          <div key={idx} className="jobs" style={{maxWidth: '20vw'}}>
            <h4>{job.title}</h4>
            <img src="https://picsum.photos/id/180/200/100" alt="" className="job-post-image" /><br/><br/>
            <h4>{`${job.locations[0]}, ${job.locations[1]}, ${job.locations[2]}`}</h4>
            <div>Job Type: {job.jobType}</div>
            <p>Requirements: {`${job.requirements[0]}, ${job.requirements[1]}, ${job.requirements[2]}`}</p>
            <p className="salary">Salary: {job.salary}</p>
            <button style={{backgroundColor: 'blue', color:'white' }}>Apply</button>
            <button style={{backgroundColor: 'red', color:'white' }}>Not interested</button>
            <br/>
            <hr/>
          </div>
        )
      })}
    </div>
  );
}

const mapStateToProps = state => {;
  return {company: state.selectedCompany};
};

export default connect(mapStateToProps)(Company);