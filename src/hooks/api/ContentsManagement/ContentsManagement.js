/* eslint-disable */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const contentsManagement = createApi({
    reducerPath: 'contentsManagement',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
        prepareHeaders: (headers) => {
            const jwtToken = localStorage.getItem('userToken');
            if (jwtToken) {
                headers.set('authorization', `Bearer ${jwtToken}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        // 콘텐츠
        ContentsList: builder.mutation({
            query: (body) => ({
                url: 'User/Contets_List',
                method: 'POST',
                body: body
            })
        })
    })
});

export const { useContentsListMutation } = contentsManagement;
