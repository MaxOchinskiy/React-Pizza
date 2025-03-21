import filters from './filters';
import pizzas from './pizzas';
import cart from './cart';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    pizzas,
    filters,
    cart
})
export default rootReducer;

