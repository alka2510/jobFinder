import React from 'react';

class SearchBarForName extends React.Component {
    state = {term: '' };
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
                        <label>Job name </label>
                        <input type="text" 
                            autoFocus value={this.state.term} 
                            onChange={this.jobFilterOnChange}>
                        </input>
                    </div>
                </form>
            </div>
        );
    };
}


export default SearchBarForName;