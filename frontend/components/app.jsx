import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';
// import ReviewShowContainer from './review_show/review_show_container';
// import ReviewFormContainer from './review_form/review_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <div className="front-page">
        <header className="app-header">
            <Link to="/" className="header-link">
                <ul className="nav-list">
                    <li><a href="default.asp">Write a Review</a></li>
  
                    <li><a href="about.asp">Log In</a></li>
                    <li><a href="about.asp">Sign Up</a></li>

                </ul>
                <nav></nav>
                <h1>Yelpie</h1>
            </Link>
            <GreetingContainer />
        </header>
        </div>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <ProtectedRoute exact path="/reviews/new" component={ReviewFormContainer} />
            <Route path="/reviews/:reviewId" component={ReviewShowContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
    </div>
);

export default App;
