import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import LinkContainer from '../components/Pages/LinkContainer/LinkContainer';
export const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/links" component={LinkContainer} />
                <Redirect to="/links" />
            </Switch>
        </Router>
    );
};
