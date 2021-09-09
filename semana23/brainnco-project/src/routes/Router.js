import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;