import { configureStore } from "@reduxjs/toolkit";

import { blogApi } from "../service/blogApi";

export default configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
    }
});