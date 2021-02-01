import React from 'react';
import {useState} from 'react';

const Education = () =>{
    const [degreeName, setDegreeName] = useState("");
    const [collegeName, setCollegeName] = useState("")
    const [collegeLocation, setCollegeLocation] = useState("");
    const [startingDate, setStartingDate] = useState("");
    const [endingDate, setEndingDate] = useState("");

    const [degree, setDegree] = useState([]);
    

const onDelete = (myId) => {
    const updates = degree.filter((each, idx) => idx !== myId)
    setDegree(updates)
}

    return (
        <div>
            
            <form >
                <div className="form-group">
                    <label>Degree</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value = {degreeName}
                        onChange={(e) => setDegreeName(e.target.value)}    
                        />
                </div>
                <div className="form-group">
                    <label>College</label>
                    <input 
                        type="text" 
                        name="location"
                        className="form-control" 
                        value = {collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                        />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value = {collegeLocation}
                        onChange={(e) => setCollegeLocation(e.target.value)}   
                        />
                </div>
                <div className="form-group">
                <label>Time period</label>
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
                        setDegree([
                        ...degree, [degreeName, collegeName ,collegeLocation, startingDate, endingDate]
                        ])}}>Save </button>
                </div>
            </form>
            <div>
                {degree.map((each,idx) => (
                    <div key= {idx} className="row">
                    <div className="col">
                    <h4>{each[0]}</h4>
                        {each[1]}
                        <br/>{each[2]}
                        <br/>{each[3]} to {each[4]}<br/>
                    </div>
                    <div className="col">
                      <button className="btn btn-danger" onClick = {() => onDelete(idx)}>Remove</button> 
                    </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Education;