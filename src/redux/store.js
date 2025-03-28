import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import rootReducer from "./reducers";
import {thunk} from "redux-thunk";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)));


export default store;