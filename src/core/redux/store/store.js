import { createStore } from 'redux';

import reducers from '../reducer';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, devtools);

export default store;
