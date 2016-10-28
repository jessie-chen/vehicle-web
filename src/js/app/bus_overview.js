// DEVELOP
if (process.env.NODE_ENV !== 'production') {
    require('../../bus_overview.html');

    // Hot replacement; Comment below for hot reload
    // if (module.hot) {
    //     module.hot.accept();
    // }
}

import "../../styles/bus_overview.scss";
import React from 'react';
import { Route } from 'react-router';
import { bootstrap } from '../utils';
import BusOverview from '../containers/BusOverview';

const routes = (
    <Route path="/" component={BusOverview}>
    </Route>
);

bootstrap(routes);
