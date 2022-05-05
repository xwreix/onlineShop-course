import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'


const cors = require('cors');
//App.use(cors()); // Use this after the variable declaration

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);