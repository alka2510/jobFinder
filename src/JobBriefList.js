import { useState } from "react";
import JobBrief from "./JobBrief";
import JobDetails from "./JobDetails";

const JobBriefList = ({ jobs })=>{
  const [selected, setSelected] = useState();

  return (
    <div style={{ alignItems: "center" }}>
      <div style={{float: 'left', width: '50%', maxWidth: "800px", paddingRight:"120px"}}>
      {jobs.map((job) => {
        return (
          <JobBrief
            clicked={()=> setSelected(job)}
            job={job}
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
        {selected ? <JobDetails selectedJob={selected}/> : <h4></h4>}
      </div>
      </div>
    </div>
  );
};

export default JobBriefList;