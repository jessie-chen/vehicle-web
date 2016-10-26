import {Provider} from "react-redux";
import Login from "../app/login";
import React from "react";
//noinspection JSUnresolvedVariable
import {render} from "react-dom";
import createStore from "../store/configureStore";
const store = createStore();
render(
    <Provider store={store}>
        <Login/>
    </Provider>
,document.getElementById("main"));