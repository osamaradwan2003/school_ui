import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appStates",
    initialState: {
        isOpenSidebar: true,
    },
    reducers: {
        toggleSidebar(state){
            state.isOpenSidebar = !state.isOpenSidebar;
        }
    }
})

export const {toggleSidebar} = appSlice.actions;

export default  appSlice.reducer;

