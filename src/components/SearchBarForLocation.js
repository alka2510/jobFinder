import React from 'react';
import Jobs from "../jobs.json";

class SearchBarForLocation extends React.Component {
    state = {Jobs,jobLocation: '' };
    jobFilterOnChange = event => {
        this.setState({ jobLocation: event.target.value });
        
    }
    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.jobLocation);
        
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Job location</label>
                        
                        <input type="text" value={this.state.jobLocation} onChange={this.jobFilterOnChange}></input>
                
                    </div>
                </form>
            </div>
        );
    };
}
export default SearchBarForLocation;