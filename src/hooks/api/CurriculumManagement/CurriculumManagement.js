/* eslint-disable */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const curriculumManagement = createApi({
    reducerPath: 'curriculumManagement',
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
        // 학습모듈 관리 > 조회
        selectModuleMgrList: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/selectModuleMgrList.do',
                method: 'POST',
                body: body
            })
        }),
        selectModuleList: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/selectModuleList.do',
                method: 'POST',
                body: body
            })
        }),
        // 학습모듈 관리 > 등록
        insertModule: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/insertModule.do',
                method: 'POST',
                body: body
            })
        }),
        // 학습모듈 관리 > 상세
        selectModule: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/selectModule.do',
                method: 'POST',
                body: body
            })
        }),
        // 학습모듈 관리 > 랜덤추출
        selectModuleRandom: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/selectModuleRandom.do',
                method: 'POST',
                body: body
            })
        }),
        // 학습모듈 관리 > 수정
        updateModule: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/updateModule.do',
                method: 'POST',
                body: body
            })
        }),
        // 학습모듈 관리 > 삭제
        deleteModule: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/deleteModule.do',
                method: 'POST',
                body: body
            })
        }),
        // 학습모듈 관리 > 물품팝업조회
        selectModuleXrayPopList: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/selectModuleXrayPopList.do',
                method: 'POST',
                body: body
            })
        }),
        // 학습모듈 관리 > 모듈에 등록된 문제목록 가져오기
        selectModuleQuestion: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/selectModuleQuestion.do',
                method: 'POST',
                body: body
            })
        }),

        // 모듈복사
        insertModuleCopy: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/insertModuleCopy.do',
                method: 'POST',
                body: body
            })
        }),

        // 차수 관리 > 조회
        selectBaselineList: builder.mutation({
            query: (body) => ({
                url: 'adm/eduMgr/selectBaselineList.do',
                method: 'POST',
                body: body
            })
        }),
        // 차수 관리 > 상세
        selectBaseline: builder.mutation({
            query: (body) => ({
                url: 'adm/eduMgr/selectBaseline.do',
                method: 'POST',
                body: body
            })
        }),
        // 차수 관리 > 등록
        insertBaseline: builder.mutation({
            query: (body) => ({
                url: 'adm/eduMgr/insertBaseline.do',
                method: 'POST',
                body: body
            })
        }),
        // 차수 관리 > 등록 - (커리큘럼 메뉴목록 조회)
        selectMenuList: builder.mutation({
            query: (body) => ({
                url: 'adm/system/selectModuleMenuList.do',
                method: 'POST',
                body: body
            })
        }),
        // 차수 관리 > 수정
        updateBaseline: builder.mutation({
            query: (body) => ({
                url: 'adm/eduMgr/updateBaseline.do',
                method: 'POST',
                body: body
            })
        }),
        // 차수 관리 > 삭제
        deleteBaseline: builder.mutation({
            query: (body) => ({
                url: 'adm/eduMgr/deleteBaseline.do',
                method: 'POST',
                body: body
            })
        }),
        // 차수 관리 > 커리큘럼 교육생삭제
        deleteBaselineStudent: builder.mutation({
            query: (body) => ({
                url: 'adm/eduMgr/deleteBaselineStudent.do',
                method: 'POST',
                body: body
            })
        }),
        // 차수 관리 > 학습일정 상세정보 팝업
        selectBaselineEduDateList: builder.mutation({
            query: (body) => ({
                url: 'adm/eduMgr/selectBaselineEduDateList.do',
                method: 'POST',
                body: body
            })
        }),
        // 차수 관리 > 학습생 인원 상세정보 팝업
        selectBaselineStuList: builder.mutation({
            query: (body) => ({
                url: 'adm/eduMgr/selectBaselineStuList.do',
                method: 'POST',
                body: body
            })
        }),
        // 차수 관리 > 차수 복사
        insertBaselineCopy: builder.mutation({
            query: (body) => ({
                url: 'adm/eduMgr/insertBaselineCopy.do',
                method: 'POST',
                body: body
            })
        }),
        // Xray배점관리 > 조회 (상단)
        selectPointStdList: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/selectPointStdList.do',
                method: 'POST',
                body: body
            })
        }),
        // Xray배점관리 > 등록 (상단)
        insertPointStd: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/insertPointStd.do',
                method: 'POST',
                body: body
            })
        }),
        // Xray배점관리 > 상세 (상단)
        selectPointStd: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/selectPointStd.do',
                method: 'POST',
                body: body
            })
        }),
        // Xray배점관리 > 수정 (상단)
        updatePointStd: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/updatePointStd.do',
                method: 'POST',
                body: body
            })
        }),
        // Xray배점관리 > 삭제 (상단)
        deletePointStd: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/deletePointStd.do',
                method: 'POST',
                body: body
            })
        }),
        // Xray배점관리 > 조회 (하단)
        selectPointStdDetailList: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/selectPointStdDetailList.do',
                method: 'POST',
                body: body
            })
        }),
        // Xray배점관리 > 등록 (하단)
        insertPointStdDetail: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/insertPointStdDetail.do',
                method: 'POST',
                body: body
            })
        }),
        // Xray배점관리 > 상세 (하단)
        selectPointStdDetail: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/selectPointStdDetail.do',
                method: 'POST',
                body: body
            })
        }),
        // Xray배점관리 > 수정 (하단)
        updatePointStdDetail: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/updatePointStdDetail.do',
                method: 'POST',
                body: body
            })
        }),
        // Xray배점관리 > 삭제 (하단)
        deletePointStdDetail: builder.mutation({
            query: (body) => ({
                url: 'adm/learningMgr/deletePointStdDetail.do',
                method: 'POST',
                body: body
            })
        }),

        // Xray배점관리 > 삭제 (하단)
        selectTeacherList: builder.mutation({
            query: (body) => ({
                url: 'adm/userMgr/selectTeacherList.do',
                method: 'POST',
                body: body
            })
        })
    })
});

export const {
    useSelectModuleMgrListMutation, // 학습모듈 관리 > 조회
    useSelectModuleListMutation, // 학습모듈 (학습, 평가) 조회
    useInsertModuleMutation, // 학습모듈 관리 > 등록
    useSelectModuleMutation, // 학습모듈 관리 > 상세
    useSelectModuleRandomMutation, // 학습모듈 관리 > 랜덤추출
    useUpdateModuleMutation, // 학습모듈 관리 > 수정
    useDeleteModuleMutation, // 학습모듈 관리 > 삭제
    useSelectModuleXrayPopListMutation, // 학습모듈 관리 > 물품팝업조회
    useSelectModuleQuestionMutation, // 학습모듈 관리 > 모듈에 등록된 문제목록 가져오기
    useInsertModuleCopyMutation, // 학습모듈 관리 > 모듈 복사

    useSelectBaselineListMutation, // 차수 관리 조회
    useSelectBaselineMutation, // 차수 관리 상세
    useInsertBaselineMutation, // 차수 관리 등록
    useSelectMenuListMutation, // 차수 관리 등록-(커리큘럼 메뉴목록 조회)
    useUpdateBaselineMutation, // 차수 관리 수정
    useDeleteBaselineMutation, // 차수 관리 삭제
    useDeleteBaselineStudentMutation, // 차수 관리 커리큘럼 교육생삭제
    useSelectBaselineEduDateListMutation, // 차수 관리 학습일정 상세정보 팝업
    useSelectBaselineStuListMutation, // 차수 관리 학습생 인원 상세정보 팝업
    useInsertBaselineCopyMutation, // 차수 관리 차수 복사

    useSelectPointStdListMutation, // Xray배점관리 조회 (상단)
    useInsertPointStdMutation, // Xray배점관리 등록 (상단)
    useSelectPointStdMutation, // Xray배점관리 상세 (상단)
    useUpdatePointStdMutation, // Xray배점관리 수정 (상단)
    useDeletePointStdMutation, // Xray배점관리 삭제 (상단)
    useSelectPointStdDetailListMutation, // Xray배점관리 조회 (하단)
    useInsertPointStdDetailMutation, // Xray배점관리 등록 (하단)
    useSelectPointStdDetailMutation, // Xray배점관리 상세 (하단)
    useUpdatePointStdDetailMutation, // Xray배점관리 수정 (하단)
    useDeletePointStdDetailMutation, // Xray배점관리 삭제 (하단)

    useSelectTeacherListMutation // 강사 리스트
} = curriculumManagement;
