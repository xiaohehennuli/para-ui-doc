import 'core-js';
import 'react-app-polyfill/ie11';
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import App from "./App";

import './styles/index.scss';

const init = async () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
    reportWebVitals();
};

init();
