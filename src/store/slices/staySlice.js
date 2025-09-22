import { createSlice } from "@reduxjs/toolkit";
import { stayIndex } from "../thunks/stayThunk";
import { stayUtil } from "../../utils/localStorageUtil"


const staySlice = createSlice({
  name: 'staySlice',
  initialState: {
    stayList: stayUtil.getStayList() ? stayUtil.getStayList() : [],
    stayPage: stayUtil.getStayPage() ? stayUtil.getStayPage() : 0,
    scrollEventFlg: stayUtil.getStayScrollFlg() ? stayUtil.getStayScrollFlg() : true,
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase( stayIndex.fulfilled, (state, action) => {
        if(action.payload.items?.item) {
          state.stayList = [...state.stayList, ...action.payload.items.item];
          state.stayPage = action.payload.pageNo;
        
          stayUtil.setStayList(state.stayList);
          stayUtil.setStayPage(state.stayPage);
          stayUtil.setStayScrollFlg(state.scrollEventFlg);        
        } else {
          state.scrollEventFlg = false;
        }
      })

      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          console.error('axios 에러.', action.error);
        }
      );
  }
})

export const { setScrollEventFlg } = staySlice.actions;

export default staySlice.reducer;