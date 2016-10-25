
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import allReducer from '../reducers/index';


const loggerMiddleware = createLogger({
    collapsed: true,
    predicate: () => process.env.NODE_ENV === 'development'
});

export default function configureStore(initalState = {}, reducer = allReducer) {
    const store = createStore(
        reducer,
        initalState,
        applyMiddleware(
            thunkMiddleware,
            promiseMiddleware(),
            loggerMiddleware
        )
    );

    if(module.hot) {
        module.hot.accept("../reducers", () => {
            const nextRootReducers = require('../reducers/index');
            store.replaceReducer(nextRootReducers);
        });
    }

    return store;
}