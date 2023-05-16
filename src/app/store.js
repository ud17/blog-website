import { configureStore } from "@reduxjs/toolkit";

import { blogApi } from "../service/blogApi";

export default configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});