import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const CONSTANT = require("../global/constant.js");
const baseUrl = CONSTANT.baseUrl;

export const blogApi = createApi({
    reducerPath: `blogApi`,
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getLatestBlogs: builder.query({
            query: () => `blog/get-latest-blogs`
        }),
        getMostViewedBlogs: builder.query({
            query: () => `blog/get-most-viewed-blogs`
        }),
        getAllBlogs: builder.query({
            query: () => `blog/get-all-blogs`
        })
    })
});

export const {
    useGetLatestBlogsQuery,
    useGetMostViewedBlogsQuery,
    useGetAllBlogsQuery
} = blogApi;