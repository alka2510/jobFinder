import React from 'react';
import JobBriefList from "./components/JobBriefList";
import Jobs from "./jobs.json";
import SearchBarForName from "./components/SearchBarForName";
import Loading from "./components/Loading";
import SearchBarForLocation from './components/SearchBarForLocation';


class Home extends React.Component {
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
      
      <div  style={{alignItems:"center", paddingLeft:"400px"}}>
        <div className="ui container">
          
          <div className="row" style={{padding:"15px"}}>
                <div className="col">
                  <SearchBarForName onSubmit={this.onSearchSubmit} />
                </div>
                <div className="col">
                  <SearchBarForLocation onSubmit={this.onJobSubmit}/> 
                </div>
                <div className="col" style={{paddingTop:"22px"}}>
                  <button className="btn" ><a href="/profile" target="_blank">See your profile</a></button>
                </div>
                
            </div>
          
        </div>
        
        <div >
          {this.state.isLoaded ? <JobBriefList jobs={this.state.isName && 
            (this.state.term || this.state.jobLocation) ? this.state.filterJob :this.state.jobs
          } /> :<Loading />}
        </div>
      
      </div>
      
      
    );
  }
}

export default Home;