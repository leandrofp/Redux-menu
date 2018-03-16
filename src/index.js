import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';             /* crea provider(quien habilita el connect) */
import { createStore } from 'redux';                /* crea store */
import reducer from './reducers/reducer';    /* crea reducer */
//import thunk from "redux-thunk";

let store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <App />

  </Provider>, document.getElementById('root'));

registerServiceWorker();
