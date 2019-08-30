import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import store from './store/store';
import '@babel/polyfill';
render(React.createElement(Provider, { store: store },
    React.createElement(App, null)), document.getElementById('app'));
