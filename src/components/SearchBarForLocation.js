import React from 'react';

class SearchBarForLocation extends React.Component {
    state = {jobLocation: '' };
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
                        <label>Job location</label>
                        <input type="text" 
                            value={this.state.jobLocation} 
                            onChange={this.jobFilterOnChange}>
                        </input>
                </form>
            </div>
        );
    };
}
export default SearchBarForLocation;