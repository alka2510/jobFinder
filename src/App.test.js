import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const JobBriefList = ({ jobs })=>{
  const [selected, setSelected] = useState();
  console.log(props);

  return (
    <div style={{ alignItems: "center" }}>
      <div style={{float: 'left', width: '50%', maxWidth: "800px", paddingRight:"120px"}} >
      {jobs.map((job,idx) => {
        return (
          <JobBrief
            clicked={()=> setSelected(job)}
            key={idx}
            job={job}
            key={job.salary}
            name={job.name}
            logo={job.logo}
            description={job.description}
            salary={job.salary}
            location={job.location}
          />
        )
      })}
      </div>
      <div>
      <div style={{float: 'right', width: '50%', maxWidth: "800px",paddingRight:"120px"}}>
        {selected ? <JobDetails selectedJob={selected}/> : ""}
      </div>
      </div>
    </div>
  );
};

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

    onClicking(company){
      this.setState({selected: company.jobs});
      this.setState({companyName: company.name});
      console.log(company);
  }
  render() {
      return(
          <div className="ui container" style={{padding:"15px"}}>
              <div className="row ui large header" >
              {data.map((company) => {
                  return (
                      <div key={company.userId} className="col" onClick={()=>this.props.selectCompany(company)}> {company.name} </div>

                  );
                  
              })}
          </div>
          <div className="ui container">{this.state.selected ? <div className="ui-header"><br/> <hr/><h2>{this.state.companyName}</h2> {this.state.selected.map((job)=>{
              return(
                  <div>
                      <hr/>
                      <Company
                          title={job.title}
                          locations={job.locations}
                          requirements={job.requirements}
                          jobType={job.jobType}
                          salary={job.salary}
                      />
                  </div>
              );
          } ) }</div>:""}</div>
          </div>
              
      );
      
  }

  function Company(props) {
    const {title, locations, requirements,salary, jobType} = props.company.jobs;
    console.log(locations);

  return (
      <div className="jobs" style={{maxWidth: '40vw'}} >
      <div className="company-name" style={{padding:"10px"}}>
          <h2>{title}</h2>
        </div>
        
            <img src="https://picsum.photos/id/180/200/100" alt="" className="img img-thumbnail" />
            <h4>{`${locations[0]}, ${locations[1]}, ${locations[2]}`}</h4>
            <div>Job Type: {jobType}</div>
            <p><b>Requirements: </b> {`${requirements[0]}, ${requirements[1]}, ${requirements[2]}`}</p>
            <p className="salary">Salary: {salary}</p>
            <br/>

      </div>
    );
  }
  
  export default Company;

  const Company = (props) => {
  
    console.log(props.company.jobs);
    return (
      <div>
        <h4>{props.company.name}</h4>
        {props.company.jobs.map((job, idx) => {
          return(
            <div key={idx}>{job.title}</div>
          )
        })}
      </div>
    );
  }
  
  const mapStateToProps = state => {;
    return {company: state.selectedCompany};
  };
  
  export default connect(mapStateToProps)(Company);

  //Home.js

  import React from 'react';
import JobBriefList from "./components/JobBriefList";
import Jobs from "./jobs.json";
import SearchBarForName from "./components/SearchBarForName";
import Loading from "./components/Loading";
import SearchBarForLocation from './components/SearchBarForLocation';
import JobDetails from "./components/JobDetails";


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
    console.log(term);
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
      
      <div  style={{alignItems:"center", paddingLeft:"200px"}}>
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
            <div style={{padding:"15px", alignItems:"center"}}>
              <button className="btn"><a href="/companies" target="_blank">See comapany's job</a></button>
            </div>
          
        </div>
        <div className="row">
        <div className="col" style={{maxWidth:"500px",paddingRight:"100px"}}>
          {this.state.isLoaded ? <JobBriefList jobs={this.state.isName && 
            (this.state.term || this.state.jobLocation) ? this.state.filterJob :this.state.jobs
          } /> :<Loading />}
        </div>
        <div className="col" style={{maxWidth:"500px",paddingLeft:"100px"}}>
          <JobDetails/>
        </div>
        </div>
      
      </div>
      
      
    );
  }
}

export default Home;

<JobBrief
            key={this.state.filterJob[0].salary}
            name={this.state.filterJob[0].name}
            logo={this.state.filterJob[0].logo}
            description={this.state.filterJob[0].description}
            salary={this.state.filterJob[0].salary}
            location={this.state.filterJob[0].location}
          />