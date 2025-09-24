import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../configs/axiosConfig.js";
import axios from "axios";

const stayIndex = createAsyncThunk(
  'staySlice/stayIndex',
  // async (arg, thunkAPI) => {
    // const state = thunkAPI.getState();
    
  async ({ areacode = '', pageNo = 1 }) => {
    const url = `${axiosConfig.BASE_URL}/searchStay2`;

    const config = {
      params: {
      serviceKey: axiosConfig.SERVICE_KEY,
      MobileOS: axiosConfig.MOBILE_OS,
      MobileApp: axiosConfig.MOBILE_APP,
      _type: axiosConfig.TYPE,
      arrange: axiosConfig.ARRANGE,
      numOfRows: axiosConfig.NUM_OF_ROWS,
      pageNo: pageNo,
      // 네비게이션 바 없을때의 처리
      //pageNo: state.stay.stayPage + 1,
      ...(areacode && { areaCode: areacode }),
    }
  }

    const response = await axios.get(url, config);

    return response.data.response.body;
  }
)

export { stayIndex };