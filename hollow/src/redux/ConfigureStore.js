import { createStore, applyMiddleware } from 'redux';
import { MainState } from './mainState';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        MainState,
        applyMiddleware(thunk, logger)
    );

    return store;
}