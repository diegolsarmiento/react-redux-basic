import React from 'react';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import { configureStore } from '@reduxjs/toolkit';

export default (props) => {
    return (
        <Provider store={configureStore({ reducer: reducers })}>
            {props.children}
        </Provider>
    );
};