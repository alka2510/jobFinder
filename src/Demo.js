import React from 'react';
import ReactDOM from 'react-dom';

const Demo = () => {
    return (
        <div>
            <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home-page</title>
        <div className="main-heading">
          <h1>Exercise 1: understanding JSX</h1>
          <p>You need to convert this html code into JSX.</p>
        </div>
        <div className="company-name">
          <h2>MentorStudents Job-Portal</h2>
          <img src="https://picsum.photos/id/180/500/200" className="company-banner" />
        </div>
        <div className="search-panel" style={{marginTop: '20px'}}>
          <span>
            <label htmlFor="search-what">What</label>
            <input id="search-what" type="text" placeholder="Job title, keywords or company" />
          </span>
          <span style={{marginLeft: '20px'}}>
            <label htmlFor="search-where">Where</label>
            <input id="search-where" type="text" placeholder="Enter city" />
          </span>
          <span style={{marginLeft: '20px'}}>
            <button style={{color: 'blue'}}>Find jobs</button>
          </span>
        </div>
        <div className="jobs" style={{maxWidth: '20vw'}}>
          <div>
            <h4>Full-stack developer</h4>
            <h5>Delhi</h5>
            <img src="https://picsum.photos/id/180/200/100" className="job-post-image" />
            <p>
              Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
              Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
            </p>
            <div className="salary">Salary: 30K - 40K</div>
            <button style={{backgroundColor: 'blue', color: 'white'}}>Apply</button>
            <button style={{backgroundColor: 'red', color: 'white'}}>Not interested</button>
            <hr />
          </div>
          <div>
            <h4>Front-end developer</h4>
            <h5>Pune</h5>
            <img src="https://picsum.photos/id/180/200/100" className="job-post-image" />
            <p>
              Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
              Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
            </p>
            <div className="salary">Salary: 15K - 30K</div>
            <button style={{backgroundColor: 'blue', color: 'white'}}>Apply</button>
            <button style={{backgroundColor: 'red', color: 'white'}}>Not interested</button>
            <hr />
          </div>
          <div>
            <h4>Back-end developer</h4>
            <h5>Mumbai</h5>
            <img src="https://picsum.photos/id/180/200/100" className="job-post-image" />
            <p>
              Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
              Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
            </p>
            <div className="salary">Salary: 20K - 30K</div>
            <button style={{backgroundColor: 'blue', color: 'white'}}>Apply</button>
            <button style={{backgroundColor: 'red', color: 'white'}}>Not interested</button>
            <hr />
          </div>
        </div>
        <div className="pagination" style={{marginTop: '20px'}}>
          <button> &lt; Prev</button>
          <button>Next &gt; </button>
        </div>
        </div>
    );
};

export default Demo;

