import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="ui container">
        <div className="ui secondary menu">
            <Link className="active item" to="/">Find Jobs</Link> 
            <Link className="item" to="/companies">See Companies</Link> 
            <Link className="item" to="/profile">My Profile</Link> 
            <Link className="item" to="/login">Login</Link>

        </div>
        </div>
    );
}
export default Header;