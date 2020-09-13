import {createStore,combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducer/productReducers';
import { cartReducer } from './reducer/cartReducer'
import { userSigninReducer } from './reducer/userReducer';
import { userRegisterReducer } from './reducer/userRegisterReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON('userInfo') || null;
const initialState = {cart : { cartItems },userSign:{userInfo}};
const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer,
    userSign : userSigninReducer,
    userRegister : userRegisterReducer,
    productSave : productSaveReducer,
    productDelete: productDeleteReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

 export default store;