import React from 'react';

import './Main.scss';
import {Route, Switch} from "react-router-dom";
import {BuildsList} from "../../pages/BuildsList/BuildsList";
import {BuildDetail} from "../../pages/BuildDetail/BuildDetail";
import {Settings} from "../../pages/Settings/Settings";

export const Main = () => {
    return (
        <div className="main">
            <div className="wrapper">
                <Switch>
                    <Route path={'/'} exact component={BuildsList}/>
                    <Route path={'/build/:number'} component={BuildDetail} />
                    <Route path={'/settings'} component={Settings} />
                </Switch>
            </div>
        </div>
    )
}