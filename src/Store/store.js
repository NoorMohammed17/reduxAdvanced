import { configureStore } from "@reduxjs/toolkit"
import uiSlice from "./ui-slice"
const store = configureStore({
    reducer :{uiReducer : uiSlice.reducer}
})

export default store;