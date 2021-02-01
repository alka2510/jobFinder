import React from 'react';
import { useState } from 'react';
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

const PersonalInsformation = ()=>{
    const [showText, setShowText] = useState(false);
    const [showTextEducation, setShowTextEducation] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    
    return (
        <div className="ui container" >
        <div style={{padding:"20px"}}><h1>Personal Insformation</h1></div>
        <form>
            <div className="row">
                <div className="col">
                    <label>First Name</label>
                    <input type="text" className="form-control"  ></input>
                </div>
                <div className="col">
                    <label>Last Name</label>
                    <input type="text" className="form-control" ></input>
                </div>
                
            </div>
            <div className="row">
                <div className="col">
                    <label>Email</label>
                    <input type="text" className="form-control" ></input>
                </div>
                <div className="col">
                    <label>Mobile No.</label>
                    <input type="text" className="form-control" ></input>
                </div>
                
            </div>
            <div className="row">
                <div className="col">
                    <label>City</label>
                    <input type="text" className="form-control" ></input>
                </div>
                <div className="col">
                    <label>Postal Code</label>
                    <input type="text" className="form-control" ></input>
                </div>
                
            </div>
            <div className="row">
                <div className="col">
                    <label>Describe your position and accomplishment as full stack developer</label>
                    <textarea type="text" className="form-control" ></textarea>
                </div>
            </div>
            <div>
                <button className="btn btn-primary" onClick={(e) => e.preventDefault()}>Save </button>
            </div>
        </form>
        <hr/>
        <div>
        <div className="row" style={{padding:"10px"}}>
                <div className="col">
                    <h2>Work Experience</h2>
                </div>
                <div className="col">
                    <button className="btn btn-primary" onClick={() => setShowText(!showText)} >Add </button>    
                </div>
                
            </div>
            <div>
        {showText ? <WorkExperience/> : ""} 
        <hr/>  
        </div>
            <div className="row" style={{padding:"20px"}}>
                <div className="col">
                    <h2>Education</h2>
                </div>
                <div className="col">
                    <button className="btn btn-primary" onClick={() => setShowTextEducation(!showTextEducation)} >Add </button>    
                </div>
                
            </div>
            <div>
        {showTextEducation ? <Education/> : ""}    
        </div>
        <hr/>
        <div className="row" style={{padding:"20px"}}>
                <div className="col">
                    <h2>Skills</h2>
                </div>
                <div className="col">
                    <button className="btn btn-primary" onClick={() => setShowSkills(!showSkills)} >Add </button>    
                </div>
                
            </div>
            <div>
        {showSkills ? <Skills/> : ""}    
        </div>
        <hr/>
        </div>
        
        </div>
    );
}

export default PersonalInsformation;