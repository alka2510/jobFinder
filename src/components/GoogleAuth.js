import React from 'react';

class GoogleAuth extends React.Component {
    state={ isSignedIn: null};

    componentDidMount(){
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId:
                '810397336836-9ttlt7hpgvtq7j175n5lcvt4mnsbq3ku.apps.googleusercontent.com',
                scope: 'profile email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
                
            });
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    };

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null){
            return <div>I don't know if we are signed in</div>
        }else if (this.state.isSignedIn) {
            return (
                <div className='ui container' style={{paddingTop:'30px'}}>
                    <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
                </div>
                
            );
        } else{
            return (
                <div className='ui container' style={{paddingTop:'30px', alignItems:"center"}}>
                    <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon"/>
                    Sign In with Google
                </button>
                </div>
                
            );
        }

    }
    render() {
        return <div>{this.renderAuthButton()}</div>;
        
    }
}

export default GoogleAuth;