import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk";

const festivalSlice = createSlice({
  name: 'festivalSlice',
  initialState: {
    list: null, // 페스티벌 리스트
  },
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        console.log(action.payload, action.type);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state) => {
          console.log('처리 중입니다.');
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          console.error('에러에러.', action.payload);
        }
      );
  }
})

export const {
  setList
} = festivalSlice.actions;

export default festivalSlice.reducer;