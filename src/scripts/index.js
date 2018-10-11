import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ApolloClient from "apollo-boost";

import App from './components/App';
import reducer from './reducers/root';

import "../styles/styles.css";

const store = createStore(reducer);
export const api = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        'Authorization': 'bearer 3acc857a2d4b6c94861bc0f9c7ef1bacd9f75ed4'
    }
});

render(
    () => (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById("root")
);
