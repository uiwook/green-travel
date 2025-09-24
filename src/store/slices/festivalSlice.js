import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk";
// import { localStorageUtil } from "../../utils/localStorageUtil";

const festivalSlice = createSlice({
  name: 'festivalSlice',
  initialState: {
    // 서버에 통신을 보내는 처리(네비게이션 바를 이용)
    list: [], // 페스티벌 리스트
    page: 0,
    scrollEventFlg: true,
    // localStorage에서 불러와서 DB에 요청을 아끼는 처리
    // list: localStorageUtil.getFestivalList() ? localStorageUtil.getFestivalList() : [], // 페스티벌 리스트
    // page: localStorageUtil.getFestivalPage() ? localStorageUtil.getFestivalPage() : 0, // 현재 페이지 번호
    // scrollEventFlg: localStorageUtil.getFestivalScrollFlg() ? localStorageUtil.getFestivalScrollFlg() : true, // 스크롤 이벤트 디바운싱 제어 플래그
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    },
    resetFestivalList: (state) => {
      state.list = [];
      state.page = 0;
      state.scrollEventFlg = true;
      // localStorage에 정보 등록하는 처리
      // localStorageUtil.setFestivalList([]);
      // localStorageUtil.setFestivalPage(0);
      // localStorageUtil.setFestivalScrollFlg(true);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        // console.log(action.payload, action.type);
        // if(state.list !== null) {
        //   // 페이지 추가 처리
        //   state.list = [...state.list, ...action.payload.items.item];
        //   state.page = action.payload.pageNo;
        // } else {
        //   // 초기 페이지 처리
        //   state.list = action.payload.items.item;
        // }
        if(action.payload.items?.item) {
          // state 재할당(저장)
          state.list = [...state.list, ...action.payload.items.item];
          state.page = action.payload.pageNo;
          state.scrollEventFlg = true;

          // localstorage 재할당(저장)
          // localStorageUtil.setFestivalList(state.list);
          // localStorageUtil.setFestivalPage(state.page);
          // localStorageUtil.setFestivalScrollFlg(state.scrollEventFlg);
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

export const {
  setScrollEventFlg,
  resetFestivalList,
} = festivalSlice.actions;

export default festivalSlice.reducer;