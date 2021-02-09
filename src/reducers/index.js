import {combineReducers} from 'redux';

const jobsReducer = () => {
    return [
        {
          "name": "Full-stack developer",
          "location": {
            "city": "Delhi",
            "country": "India"
          },
          "description": "Experience and understanding of MERN stack (Mongo DB, Express.js, React Js, Node.js) or similar frameworks like AngularJS, Vue Js, D3 Js, etc. will be appreciated.",
          "salary": 65000,
          "logo": "https://picsum.photos/id/180/200/100"
        },
        {
          "name": "HR",
          "location": {
            "city": "Chandigarh",
            "country": "India"
          },
          "description": "HRIS Administrator responsibilities include managing our internal databases, keeping employee records in digital formats and educating users on how to use our HR systems. To be successful in this role, you should have experience with database administration and Human Resources Management software, like payroll or applicant tracking systems.",
          "salary": 25000,
          "logo": "https://picsum.photos/id/180/200/100"
        },
        {
          "name": "Back-end developer",
          "location": {
            "city": "Pune",
            "country": "India"
          },
          "description": "We are looking for an excellent experienced person in Backend Developer field. Be a part of a vibrant, rapidly growing tech enterprise with a great working environment. As an Backend developer you will be responsible for the server side of our web applications and you will work closely with our engineers to ensure the system consistency and improve your experience.",
          "salary": 40000,
          "logo": "https://picsum.photos/id/180/200/100"
        },
        {
          "name": "Front-end developer",
          "location": {
            "city": "Chandigarh",
            "country": "India"
          },
          "description": "We are looking for a talented User Experience Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces. Expert understanding of contemporary user-centered design methodologies for web & mobile is a must.",
          "salary": 19000,
          "logo": "https://picsum.photos/id/180/200/100"
        },
        {
          "name": "SEO ",
          "location": {
            "city": "Noida",
            "country": "India"
          },
          "description": "Experienced in Google ad-words, SEO, SMO, SEM (on page & off page) PPC, Digital marketing campaigns, Marketing database, social media and display advertising campaigns.",
          "salary": 15000,
          "logo": "https://picsum.photos/id/180/200/100"
        }
      ];
};

const companiesReducer = () => {
  return [
    {
        "name" : "Infosys",
        "id" : 1,
        "jobs" : [
            {
                "title" : "React",
                "locations" : ["Chandigarh", "Delhi", "Noida"],
                "salary" : "20k to 60k rupees per month",
                "jobType" : "Full-time",
                "requirements" : ["ES6 is required", "React 16 version mut be required", "Having experience on Git"]
            },
            {
                "title" : "Nodejs",
                "locations" : ["Chandigarh", "Mumbai", "Bangalore"],
                "salary" : "20k to 60k rupees per month",
                "jobType" : "Full-time",
                "requirements" : ["ES6 is required", "Python experience must required", "Having experience on Git"]
            },
            {
                "title" : "Python",
                "locations" : ["Mumbai", "Pune", "Hyderabad"],
                "salary" : "40k to 60k rupees per month",
                "jobType" : "Full-time",
                "requirements" : ["Having 5 years of experience"]
            }
        ]
    },
    {
        "name" : "TCS",
        "id" : 1,
        "jobs" : [
            {
                "title" : "React",
                "locations" : ["Chandigarh", "Delhi", "Noida"],
                "salary" : "20k to 60k rupees per month",
                "jobType" : "Full-time",
                "requirements" : ["ES6 is required", "React 16 version mut be required", "Having experience on Git"]
            },
            {
                "title" : "Nodejs",
                "locations" : ["Chandigarh", "Mumbai", "Bangalore"],
                "salary" : "20k to 60k rupees per month",
                "jobType" : "Full-time",
                "requirements" : ["ES6 is required", "Python experience must required", "Having experience on Git"]
            },
            {
                "title" : "Python",
                "locations" : ["Mumbai", "Pune", "Hyderabad"],
                "salary" : "40k to 60k rupees per month",
                "jobType" : "Full-time",
                "requirements" : ["Having 5 years of experience"]
            }
        ]
    },
    {
        "name" : "Talk Valley LLC.",
        "id" : 1,
        "jobs" : [
            {
                "title" : "React",
                "locations" : ["Chandigarh", "Delhi", "Noida"],
                "salary" : "20k to 60k rupees per month",
                "jobType" : "Full-time",
                "requirements" : ["ES6 is required", "React 16 version mut be required", "Having experience on Git"]
            },
            {
                "title" : "Nodejs",
                "locations" : ["Chandigarh", "Mumbai", "Bangalore"],
                "salary" : "20k to 60k rupees per month",
                "jobType" : "Full-time",
                "requirements" : ["ES6 is required", "Python experience must required", "Having experience on Git"]
            },
            {
                "title" : "Python",
                "locations" : ["Mumbai", "Pune", "Hyderabad"],
                "salary" : "40k to 60k rupees per month",
                "jobType" : "Full-time",
                "requirements" : ["Having 5 years of experience"]
            }
        ]
    }
];

};

const selectedJobReducer = (selectedJob = null, action) => {
    if(action.type === 'JOB_SELECTED') {
        return action.payload;
    }
    return selectedJob;
}

const selectedCompanyReducer = (selectedCompany = null, action) => {
  if(action.type === 'COMPANY_SELECTED') {
    return action.payload;
  }
  return selectedCompany;
}

export default combineReducers({
    jobs: jobsReducer,
    selectedJob: selectedJobReducer,
    companies: companiesReducer,
    selectedCompany: selectedCompanyReducer
});