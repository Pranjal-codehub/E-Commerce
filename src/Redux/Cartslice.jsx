import { createSlice } from "@reduxjs/toolkit";
//slice is a function used to mutate the state
const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state,action){
        return state.filter((item)=>item.id !==action.payload)
    }
  }, //an object which take state & action by default,what ever state we have we used to send it as action
});
export const {add,remove} =cartSlice.actions; // in reducer we have added action to perform,here add and remove are action
export default cartSlice.reducer;