import React from 'react';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import { configureStore } from '@reduxjs/toolkit';

export default ({children, initialState = {} }) => {
    return (
        <Provider store={configureStore({ reducer: reducers, preloadedState: initialState})}>
            {children}
        </Provider>
    );
};