import {Provider} from "react-redux";
import Login from "../containers/login";
import React from "react";
import {render} from "react-dom";
import ReactDOM from 'react-dom';
import configureStore from '../store/configureStore';
import {ready} from "../utils";
import { Router, Route, browserHistory, hashHistory } from 'react-router';

const store = configureStore();
// const routes = (
//     <Route path="/login" component={Login}>
//     </Route>
// );
ready(()=>{
    ReactDOM.render(
        <Provider store={store}>
            <Login/>
        </Provider>
        , document.getElementById("main"));
});
