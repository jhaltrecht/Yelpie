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
                <ul className="nav-bar">
                    <li> <GreetingContainer /></li>
                    <li> <a href="/review">Write a Review</a></li>

                </ul>
        <Link to="/" className="header-link">

                <h1>Yelpie
                    <img src="<%= image_url('yelp.png') %>" />
                    </h1>
            </Link>
        </header>
        </div>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <ProtectedRoute exact path="/reviews/new" component={ReviewFormContainer} />
            <Route path="/reviews/:reviewId" component={ReviewShowContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>

        <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </div>
    
);

export default App;
