/* eslint-disable */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const boardManagement = createApi({
    reducerPath: 'boardManagement',
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
        // Board 리스트
        BoardList: builder.mutation({
            query: (body) => ({
                url: 'User/Board_List',
                method: 'POST',
                body: body
            })
        }),

        // Board 상세정보
        BoardView: builder.mutation({
            query: (body) => ({
                url: 'User/Board_View',
                method: 'POST',
                body: body
            })
        }),

        // Picture 리스트
        PictureList: builder.mutation({
            query: (body) => ({
                url: 'User/Picture_List',
                method: 'POST',
                body: body
            })
        }),

        // Picture 상세정보
        PictureView: builder.mutation({
            query: (body) => ({
                url: 'User/Picture_View',
                method: 'POST',
                body: body
            })
        })
    })
});

export const { useBoardListMutation, useBoardViewMutation, usePictureListMutation, usePictureViewMutation } = boardManagement;
