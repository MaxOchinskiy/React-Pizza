import filtersReducer from './filters';
import pizzasReducer from './pizzas';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer,
})
export default rootReducer;

