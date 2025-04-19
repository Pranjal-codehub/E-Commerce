import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
}); //object.freeze let u read data only
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const {setProducts,setStatus}= productSlice.actions;
export default productSlice.reducer;

//middleware
export function fetchProducts(){
return async function fetchProductThunk(dispatch){
    dispatch(setStatus(STATUSES.LOADING))
    try{
        const res= await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        dispatch(setProducts(data))
dispatch(setStatus(STATUSES.SUCCESS))
    }catch(error){
        console.log(error);
        dispatch(setStatus(STATUSES.ERROR))
    }
}
}
