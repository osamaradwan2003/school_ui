import {createAsyncThunk} from "@reduxjs/toolkit";
import {login} from "../../api/user.ts";
type loginProps = {
    username: string;
    password: string;
}
export const loginUser = createAsyncThunk(
    "auth/login",
    async function ({username, password}: loginProps){
        return  await login(username, password);
    }
)