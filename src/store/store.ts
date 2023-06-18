import {configureStore} from "@reduxjs/toolkit";
import themeSlice from "./themeSlice/themeSlice.ts";
import appSlice from "./appSlice/appSlice.ts";

const store = configureStore(
    {
        reducer: {
            theme: themeSlice,
            appState: appSlice
        }
    }
);
export default store;

export type State = ReturnType<typeof store.getState>

export const CollapseSelector = (s:State) => s.appState.isOpenSidebar;
export  const thmeSelector = (s:State) => s.theme.isDark;