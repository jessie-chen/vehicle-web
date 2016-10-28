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
import React from 'react';
import { Route } from 'react-router';
import {bootstrap} from '../utils';
import Test from '../containers/Test';

const routes = (
    <Route path="/" component={Test}>
    </Route>
);

bootstrap(routes);
