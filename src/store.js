import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {createStore ,combineReducers} from 'redux';
import { productDetailsReducer, productListReducer } from './components/redux/product.reducer';
import { cartReducer } from './components/redux/cart.reducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const initialState= {cart: {cartItems}};

const reducer = combineReducers({
    cart: cartReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

const store = createStore(reducer,initialState, compose(applyMiddleware(thunk)));
export default store;