import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from '../views/Login/LoginScreen';

export const LoginRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginScreen} />
                <Redirect to="/login" />
            </Switch>
        </Router>
    );
};
