import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

/*  value : [
{product_id : },
{product_price: 5666},
{quantity : 1}

]*/



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setReduxCart: (state, action) => {
      // console.log(action);
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setReduxCart } = cartSlice.actions

export default cartSlice.reducer