import { configureStore } from "@reduxjs/toolkit";
import changeValueSlice from "./slices/changeval";


export const store = configureStore({
    reducer :{
        changeVal : changeValueSlice.reducer
    }
})