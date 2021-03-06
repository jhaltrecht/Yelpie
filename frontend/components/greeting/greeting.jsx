import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li> <Link to="/signup">Sign up!</Link></li>
            </ul>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
 <button className="header-button" onClick={logout}>Logout</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
