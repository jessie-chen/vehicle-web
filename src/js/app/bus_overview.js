// DEVELOP
if (process.env.NODE_ENV !== 'production') {
    require('../../bus_overview.html');

    // Hot replacement; Comment below for hot reload
    // if (module.hot) {
    //     module.hot.accept();
    // }
}

/*

import "../../styles/bus_overview.scss";
import configureStore from '../store/configureStore';
import {ready} from '../utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import BusOverview from '../containers/BusOverview';


const initialState = {};
const store = configureStore(initialState);

const routes = (
    <Route path="/" component={BusOverview}>
    </Route>
);


function main() {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory} routes={routes}/>
        </Provider>,

        document.getElementById("root")
    )
}


ready(function () {
    main();
});

*/



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
