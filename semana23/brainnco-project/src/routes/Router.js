import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InitialPage from '../pages/InitialPage';
import QuinaPage from '../pages/QuinaPage';
import LotoFacilPage from '../pages/LotoFacilPage';
import LotoManiaPage from '../pages/LotoManiaPage';
import TimeManiaPage from '../pages/TimeManiaPage';
import DiaDeSortePage from '../pages/DiaDeSortePage';
import ErrorPage from '../pages/ErrorPage';
import MegaSenaPage from '../pages/MegaSenaPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <InitialPage />
                </Route>
                <Route exact path={"/mega-sena"}>
                    <MegaSenaPage />
                </Route>
                <Route exact path={"/quina"}>
                    <QuinaPage />
                </Route>
                <Route exact path={"/lotofacil"}>
                    <LotoFacilPage />
                </Route>
                <Route exact path={"/lotomania"}>
                    <LotoManiaPage />
                </Route>
                <Route exact path={"/timemania"}>
                    <TimeManiaPage />
                </Route>
                <Route exact path={"/dia-de-sorte"}>
                    <DiaDeSortePage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;