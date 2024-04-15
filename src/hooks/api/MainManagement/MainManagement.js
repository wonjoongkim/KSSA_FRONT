import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const mainManagement = createApi({
    reducerPath: 'mainManagement',
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
        // 로그인 정보
        MemberInfo: builder.mutation({
            query: (body) => ({
                url: 'User/Member_Info',
                method: 'POST',
                body: body
            })
        }),
        // 메인 - 교육안내, 공지사항
        BoardMainList: builder.mutation({
            query: (body) => ({
                url: 'User/Board_Main_List',
                method: 'POST',
                body: body
            })
        })
    })
});

export const { useMemberInfoMutation, useBoardMainListMutation } = mainManagement;
