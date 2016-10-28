/**
 * Created by IT on 16/10/27.
 */
if (process.env.NODE_ENV !== 'production') {
    require('../../test.html');

    // Hot replacement; Comment below for hot reload
    // if (module.hot) {
    //     module.hot.accept();
    // }
}

import '../../styles/test.scss';
import configureStore from '../store/configureStore';
import {ready} from '../utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Test from '../containers/Test';

const initialState = {};
const store = configureStore(initialState);

const routes = (
    <Route path="/" component={Test}>
    </Route>
);

function main() {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory} routes={routes} />
        </Provider>,

        document.getElementById("root")
    )
}

ready(function () {
    main();
});
