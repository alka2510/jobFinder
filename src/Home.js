import React from 'react';
import { connect} from 'react-redux';

import JobBriefList from "./components/JobBriefList";
import SearchBarForName from "./components/SearchBarForName";
import SearchBarForLocation from './components/SearchBarForLocation';
import JobDetails from "./components/JobDetails";
import JobBrief from "./components/JobBrief";

class Home extends React.Component {
  state = {
    term: "",
    jobLocation: "",
    isName:false,
    filterJob: []
  };

  onSearchSubmit = (term) => {
    this.setState({term: term});
    let job = this.props.jobs;
    if(term){
      this.setState({filterJob:job.filter(job=>{
        return( job.name.toLowerCase().includes(term.toLowerCase()))
        
      })})
      this.setState({isName:true})
    }else{
      this.setState({isName:false})
    }
  }

  onLocationSubmit = (jobLocation)=>{
    this.setState({jobLocation: jobLocation});
    let job= this.props.jobs;
    if(jobLocation){
      this.setState({filterJob:job.filter(job=>{
        return( job.location.city.toLowerCase().includes(jobLocation.toLowerCase()))
        
      })})
      this.setState({isName:true})
    }else{
      this.setState({isName:false})
    }
  }

  renderList(){
    return this.state.filterJob.map((job)=>{
      return(
          <JobBrief
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

  render() {
    return (
      <div className="ui container" style={{alignItems:"center"}}>
        <div >
          
          <div className="row" style={{padding:"15px", marginTop: '20px', marginBottom: '20px'}}>
                <div className="col">
                  <SearchBarForName onSubmit={this.onSearchSubmit}/>
                </div>
                <div className="col">
                  <SearchBarForLocation onSubmit={this.onLocationSubmit}/> 
                </div>
                
          </div>    
        </div>
            
        <div className="row">
        <div className="col" >
          {(this.state.isName && (this.state.term || this.state.jobLocation)) ? <div>
          {this.renderList()}
          </div> : <JobBriefList/> }
        </div>
        <div className="col" style={{maxWidth:"500px",paddingLeft:"100px"}}>
          <JobDetails/>
        </div>
        <div>
        </div>
        </div>
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {jobs: state.jobs}
}

export default connect(mapStateToProps)(Home);