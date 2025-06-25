import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tenantId = 'gk1z';
const tenantName = 'elinl';

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
        }),
        createOrder: builder.mutation({
            query: (orderPayload) => ({
                url: `${tenantId}/orders`,
                method: 'POST',
                body: orderPayload
            })
        }),
        getOrders: builder.query({
            query: () => `${tenantId}/orders`,
        })
   }),
})
export const { useGetMenuItemsQuery, useCreateOrderMutation, useGetOrdersQuery } = apiSlice;
