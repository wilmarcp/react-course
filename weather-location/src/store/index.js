import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {city} from './../reducers/city'


const initialState = {city: "Buenos Aires"}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    city, 
    initialState,
    composeEnhancers(applyMiddleware(thunk)));


/*const initialState = {city: "Buenos Aires"}
export const store = createStore(
    city, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

*/
