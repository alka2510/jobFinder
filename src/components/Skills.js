import React from 'react';
import {useState} from 'react';

const Skills = () =>{
    const [skillName, setSkillName] = useState("");
    const [rating, setRating] = useState("")
    
    const [skill, setskill] = useState([]);
    

const onDelete = (myId) => {
    const updates = skill.filter((each, idx) => idx !== myId)
    setskill(updates)
}

    return (
        <div>
            
            <form >
                <div className="form-group">
                    <label>Skill/Technology Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value = {skillName}
                        onChange={(e) => setSkillName(e.target.value)}    
                        />
                </div>
                <div className="form-group">
                    <label>Rating out of 10</label>
                    <input 
                        type="text" 
                        name="location"
                        className="form-control" 
                        value = {rating}
                        onChange={(e) => setRating(e.target.value)}
                        />
                </div>
                <div className="form-group">
                     <button className="btn btn-primary" onClick = {(e) => {e.preventDefault();
                        setskill([
                        ...skill, [skillName, rating ]
                        ])}}>Save </button>
                </div>
            </form>
            <div>
                {skill.map((each,idx) => (
                    <div key= {idx} className="row" style={{padding:"20px"}}>
                        <div className="col">
                        <h4>{each[0]}</h4>
                        Ratings: {each[1]}/10<br/>
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

export default Skills;