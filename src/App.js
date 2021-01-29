import React from 'react';
import JobBriefList from "./JobBriefList";
import Jobs from "./jobs.json";
import SearchBarForName from "./SearchBarForName";
import Loading from "./Loading";
import SearchBarForLocation from './SearchBarForLocation';

class App extends React.Component {
  state = {
    jobs: Jobs,
    term: "",
    jobLocation: "",
    isName:false,
    isLoaded: false,
    filterJob: [],
    
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoaded: true})
    }, 2000);
  }
  onSearchSubmit = (term) => {
    this.setState({term: term});
    let job = this.state.jobs;
    if(term){
      this.setState({filterJob:job.filter(job=>{
        return( job.name.toLowerCase().includes(term.toLowerCase()))
        
      })})
      this.setState({isName:true})
    }else{
      this.setState({isName:false})
    }
  }

  onJobSubmit = (jobLocation)=>{
    this.setState({jobLocation: jobLocation});
    let job= this.state.jobs;
    if(jobLocation){
      this.setState({filterJob:job.filter(job=>{
        return( job.location.city.toLowerCase().includes(jobLocation.toLowerCase()))
        
      })})
      this.setState({isName:true})
    }else{
      this.setState({isName:false})
    }
  }

  render() {
    
    return (

      <div className="ui container">
        <SearchBarForName onSubmit={this.onSearchSubmit} /> 
        <SearchBarForLocation onSubmit={this.onJobSubmit}/>
        <div>
          {this.state.isLoaded ? <JobBriefList jobs={this.state.isName && 
            (this.state.term || this.state.jobLocation) ? this.state.filterJob :this.state.jobs
          } /> :<Loading />}
        </div>
      
      </div>
      
    );
  }
}

export default App;