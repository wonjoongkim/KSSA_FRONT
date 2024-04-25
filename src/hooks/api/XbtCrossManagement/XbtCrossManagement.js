import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const xbtCrossManagement = createApi({
    reducerPath: 'xbtCrossManagement',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`
    }),
    endpoints: (builder) => ({
        // XBT 연동 회원, 교육 정보 가져오기
        XbtUserInfo: builder.mutation({
            query: (body) => ({
                url: 'XBT/User_Info',
                method: 'POST',
                body: body
            })
        }),
        // XBT 연동 회원 교육 정보 가져오기
        // XbtMyPageEdu: builder.mutation({
        //     query: (body) => ({
        //         url: 'XBT/MyPage_Edu',
        //         method: 'POST',
        //         body: body
        //     })
        // }),
        // XBT 연동 회원 교육 상세정보 가져오기
        XbtMyPageEduDetail: builder.mutation({
            query: (body) => ({
                url: 'XBT/MyPage_Edu_Detail',
                method: 'POST',
                body: body
            })
        })
    })
});

export const { useXbtUserInfoMutation, useXbtMyPageEduDetailMutation } = xbtCrossManagement;
