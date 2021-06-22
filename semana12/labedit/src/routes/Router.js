import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = (props) => {
    const { setLogoutButtonText } = props

    return (
        <Switch>
            <Route exact path={"/login"}>
                <LoginPage setLogoutButtonText={setLogoutButtonText}/>
            </Route>
            <Route exact path={"/register"}>
                <SignUpPage setLogoutButtonText={setLogoutButtonText}/>
            </Route>
            <Route exact path={"/"}>
                <FeedPage />
            </Route>
            <Route exact path={"/post/:id"}>
                <PostPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    );
};

export default Router;