import React from 'react';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';
import { configureStore } from '@reduxjs/toolkit';

export default ({children, initialState = {} }) => {
    const store = configureStore({ 
        reducer: reducers, 
        preloadedState: initialState, 
        middleware: [reduxPromise]
    });
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};