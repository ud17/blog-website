import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const CONSTANT = require("../global/constant.js");
const baseUrl = CONSTANT.baseUrl;

export const blogApi = createApi({
    reducerPath: `blog`,
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getLatestBlogs: builder.query({
            query: () => `get-latest-blogs`
        })
    })
});

export const {
    useGetLatestBlogsQuery
} = blogApi;