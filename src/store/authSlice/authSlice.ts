import {createSlice} from "@reduxjs/toolkit";
import {getToken} from "../../utils/auth.ts";

const initialVal = {
  token: getToken(),
  isLogin: getToken() != null,
}

const authSlice = createSlice({
  initialState: initialVal,
  name: "userAuth",
  reducers: {

  }
})

export default authSlice.reducer;