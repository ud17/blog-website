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
        }),
        getBlogById: builder.query({
            query: (blogId) => `blog/get-blog/${blogId}`
        }),
        incrementBlogView: builder.mutation({
            query: (blogId) => ({
                url: `blog/increment-blog-view/${blogId}`,
                method: 'PATCH',
                body: blogId
            })
        })
    })
});

export const {
    useGetLatestBlogsQuery,
    useGetMostViewedBlogsQuery,
    useGetAllBlogsQuery,
    useGetBlogByIdQuery,
    useIncrementBlogViewMutation
} = blogApi;