import { createStore,combineReducers,applyMiddleware } from "redux";

import { thunk } from "redux-thunk";
import homereducer from "./reducer";


const reducer = combineReducers({
    productreducer: homereducer
})

const Middleware =[thunk]
const store = createStore(reducer,applyMiddleware(...Middleware))
export default store