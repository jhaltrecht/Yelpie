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
import BusinessIndexContainer from './search/business_index_container';
import BusinessShowContainer from "./businesses_show/business_show_container"

// import ReviewFormContainer from './reviews/review_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <div className="front-page">
                <ul className="nav-bar">
                    {/* <li className="review-li"> <a href="/reviews/new">Write a Review</a></li> */}
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
             <Route exact path="/" component={BusinessIndexContainer} /> */}
         <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />

        </Switch>

        <div className="credit">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </div>
    </div>
    
);

export default App;
