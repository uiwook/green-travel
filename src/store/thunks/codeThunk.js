import { createAsyncThunk } from "@reduxjs/toolkit";
import codeAxiosConfig from "../../configs/codeAxiosConfig.js";
import axios from "axios";

const codeIndex = createAsyncThunk(
  'codeSlice/codeIndex',
  async () => {
    const url = `${codeAxiosConfig.BASE_URL}/areaCode2`;
    const config = {
      params: {
        serviceKey: codeAxiosConfig.SERVICE_KEY,
        MobileOS: codeAxiosConfig.MOBILE_OS,
        MobileApp: codeAxiosConfig.MOBILE_APP,
        _type: codeAxiosConfig.TYPE,
        numOfRows: codeAxiosConfig.NUM_OF_ROWS,
      }
    }

    const response = await axios.get(url, config);
    return response.data.response.body;
  }
)

export {
  codeIndex
};