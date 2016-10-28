/**
 * Created by IT on 16/10/28.
 */

import configureStore from '../store/configureStore';
import {ready} from '../utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';



export default function bootstrap(routes, initialState = {}, mount_node = document.getElementById("root")) {
    ready(() => {
        const store = configureStore(initialState);
        ReactDOM.render(
            <Provider store={store}>
                <Router history={hashHistory} routes={routes} />
            </Provider>,
            mount_node
        );
    });
}
