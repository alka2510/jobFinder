import {connect} from 'react-redux';
import React from 'react';

import JobBrief from "./JobBrief";
import {selectJob} from "../actions";
import Loading from "./Loading";

class JobBriefList extends React.Component{

  state = { isLoaded: false};

  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoaded: true})
    }, 2000);
  }

  renderList(){
    
    return this.props.jobs.map((job)=>{
      return(
          <JobBrief
            clicked={()=> this.props.selectJob(job)}
            job={job}
            key={job.salary}
            name={job.name}
            logo={job.logo}
            description={job.description}
            salary={job.salary}
            location={job.location}
          />
        
      );
    })
    
  }

  render(){
    return(
      <div>{ this.state.isLoaded ? 
      <div className="ui divided list">{this.renderList()}</div> :
      <Loading/>}</div>
      );
    
  };
  
};
const mapStateToProps = (state) =>{
  return {jobs: state.jobs};
};

export default connect(mapStateToProps, {
  selectJob:selectJob
})(JobBriefList);