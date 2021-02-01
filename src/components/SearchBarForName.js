import React from 'react';
import Jobs from "../jobs.json";

class SearchBarForName extends React.Component {
    state = {Jobs,term: '' };
    jobFilterOnChange = event => {
        this.setState({ term: event.target.value });
        
    }
    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        
    }
    render() {
        
        return (
            <div >
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div>
                        <label>Job name  </label>
                        
                        <input type="text" autoFocus value={this.state.term} onChange={this.jobFilterOnChange}></input>
                        
                        </div>
                </form>
            </div>
        );
    };
}
export default SearchBarForName;