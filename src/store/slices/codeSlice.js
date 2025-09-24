import { createSlice } from "@reduxjs/toolkit";
import { codeIndex } from "../thunks/codeThunk";

const codeSlice = createSlice({
  name: 'codeSlice',
  initialState: {
    areaCode: [],
  },
  // reducers: {
  //   setAreaCodeInfo(state, action) {
  //     state.areaCode = action.payload
  //   }
  // },
  extraReducers: builder => {
    builder
      .addCase(codeIndex.fulfilled, (state,action)=> {
        if(action.payload.items?.item) {
          state.areaCode = action.payload.items.item;
        }
      })
  }
})

// export const {
//   setAreaCodeInfo
// } = codeSlice.actions;

export default codeSlice.reducer;