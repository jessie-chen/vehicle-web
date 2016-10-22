import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';
import LicaiProducts from './containers/licai';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="licai" component={LicaiProducts} />
    </Route>
);

export default routes;