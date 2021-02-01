import React from 'react';
import {useState} from 'react';

const WorkExperience = () =>{
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("")
    const [jobLocation, setJobLocation] = useState("");
    const [startingDate, setStartingDate] = useState("");
    const [endingDate, setEndingDate] = useState("");

    const [myJob, setMyJob] = useState([]);
    

const onDelete = (myId) => {
    const updates = myJob.filter((each, idx) => idx !== myId)
    setMyJob(updates)
}

    return (
        <div>
            
            <form >
                <div className="form-group">
                    <label>Job Title</label>
                    <input 
                        type="text" 
                        name="title"
                        className="form-control" 
                        value = {jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}    
                        />
                </div>
                <div className="form-group">
                    <label>Company</label>
                    <input 
                        type="text" 
                        name="location"
                        className="form-control" 
                        value = {companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value = {jobLocation}
                        onChange={(e) => setJobLocation(e.target.value)}   
                        />
                </div>
                <div className="form-group">
                <div className="row">
                <div className="col">
                    <label>From</label>
                     <input 
                        type="month" 
                        value={startingDate}
                        onChange={(e) => setStartingDate(e.target.value)}
                        ></input>
                    
                </div>
                <div className="col">
                    <label>To</label>
                    <input 
                        type="month" 
                        value={endingDate}
                        onChange={(e) => setEndingDate(e.target.value)}
                        ></input>
                    
                </div>
                
            </div>
                </div>
                <div className="form-group">
                     <button className="btn btn-primary" onClick = {(e) => {e.preventDefault();
                        setMyJob([
                        ...myJob, [jobTitle, companyName ,jobLocation, startingDate, endingDate]
                        ])}}>Save </button>
                </div>
            </form>
            <div>
                {myJob.map((each,idx) => (
                    <div key= {idx} className="row">
                    <div className="col">
                    <h4>{each[0]}</h4>
                        {each[1]}
                        <br/>{each[2]}
                        <br/>{each[3]} to {each[4]}
                    </div>
                        <div className="col">
                        <button className={"btn btn-danger"} onClick = {() => onDelete(idx)}>Remove</button>
                        </div>
                        
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default WorkExperience;