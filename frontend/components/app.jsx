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
                <ul className="nav-bar">
                    <li className="review-li"> <a href="/review">Write a Review</a></li>
                    <li className="greeting-li"> <GreetingContainer /></li>


                </ul>
        <Link to="/" className="header-link">
                {/* <h1 className="logo-name">yelpie<img className="yelp-logo" src="../assets/yelp.png" alt="" />
                
                </h1> */}
                        <h1 className="logo-name">yelpie
                        <a href="/">
                            <img className="yelp-logo" src={window.logo} />
                        </a>
                        </h1>

            </Link>
        
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <ProtectedRoute exact path="/reviews/new" component={ReviewFormContainer} />
            <Route path="/reviews/:reviewId" component={ReviewShowContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>

        <div className="credit">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </div>
    </div>
    
);

export default App;
