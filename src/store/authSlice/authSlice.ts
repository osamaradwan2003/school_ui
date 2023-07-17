import {createSlice} from "@reduxjs/toolkit";
import {getToken} from "../../utils/auth.ts";
import {loginUser} from "../api/authAPI.ts";

const initialVal = {
  token: getToken(),
  isLogin: true,
  error:{},
  loading: false,
}

const authSlice = createSlice({
  initialState: initialVal,
  name: "auth",
  reducers: {

  },
  extraReducers: (builder)=>{
    builder.addCase(loginUser.fulfilled, (state, action)=>{
      console.log(state, action);
    })
    builder.addCase(loginUser.pending, (state, action)=>{
      console.log(state, action);
    })
    builder.addCase(loginUser.rejected, (state, action)=>{
      console.log(state, action);
    })
  }
})

export default authSlice.reducer;