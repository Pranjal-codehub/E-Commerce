import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import productReducer from "./ProductSlice"
const store=configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer
    } //in store all reducer are kept and define as object, if whenever cart will call it automatically call cartReducer
})
export default store;