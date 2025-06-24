import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create a default api get
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/",
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('x-zocom', 'yum-7BTxHCyHhzI');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getMenuItems: builder.query({
            query: () => `menu`,
        })

    /* WHEN POST ADD TENANT {
        "id": "gk1z",
        "name": "elinl"
    */
   }),
})
export const { useGetMenuItemsQuery, useGetMenuByIdQuery } = apiSlice;
