/* eslint-disable no-unused-vars */
// project import
import MainLayout from 'layout/MainLayout';

// 메인 대시보드
import { DashboardDefault } from 'pages/dashboard';

import { Register } from 'pages/authentication/Register'; // 오시는길
import { Register_Step } from 'pages/authentication/Register_Step'; // 회원가입 (업체, 교육생)

import { MyPage } from 'pages/authentication/mypage'; // 마이페이지_

// import { MyPage_User } from 'pages/authentication/mypage/MyPage_User'; // 마이페이지_교육생
// import { MyPage_Team } from 'pages/authentication/mypage/MyPage_Team'; // 마이페이지_업체

import { Greeting } from 'pages/contents/Greeting'; // 원장인사
import { Groups } from 'pages/contents/Groups'; // 조직도
import { Facility } from 'pages/contents/Facility'; // 교육시설
import { Directions } from 'pages/contents/Directions'; // 오시는길

import { Security } from 'pages/contents/Security'; // 보안검색 교육과정
import { Airline } from 'pages/contents/Airline'; // 항공경비 교육과정
import { Operate } from 'pages/contents/Operate'; // 정원 및 운영계획
import { Admission } from 'pages/contents/Admission'; // 입교절차

import { Reason } from 'pages/contents/Reason'; // 관련근거
import { Application } from 'pages/contents/Application'; // 신청방법

import { Lists } from 'pages/contents/Board/Lists'; // 게시판, 자료실 List
import { Views } from 'pages/contents/Board/Views'; // 게시판, 자료실 View

// import { Notification } from 'pages/contents/Notification'; // 공지사항
// import { View as Notification_View } from 'pages/contents/Notification';

// import { Education } from 'pages/contents/Education'; // 교육안내
// import { View as Education_View } from 'pages/contents/Education';

// import { Faq } from 'pages/contents/Faq'; // Faq
// import { View as Faq_View } from 'pages/contents/Faq';

import { Picture } from 'pages/contents/Picture'; // 사진자료
import { View as Picture_View } from 'pages/contents/Picture';

// import { News } from 'pages/contents/News'; // 최신뉴스
// import { View as News_View } from 'pages/contents/News';

// import { Laws } from 'pages/contents/Laws'; // 관련법령
// import { View as Laws_View } from 'pages/contents/Laws';

// import { Datum } from 'pages/contents/Datum'; // 교육자료
// import { View as Datum_View } from 'pages/contents/Datum';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            // 데시보드
            path: '/',
            element: <DashboardDefault />
        },
        {
            // 데시보드
            path: 'dashboard',
            element: <DashboardDefault />
        },
        {
            // 회원가입
            path: 'Register',
            element: <Register />
        },
        {
            // 회원가입 - 업체, 교육생
            path: 'Register_Step',
            element: <Register_Step />
        },
        {
            // 마이페이지
            path: 'MyPage',
            element: <MyPage />
        },
        {
            // 원장인사
            path: 'contents/Greeting',
            element: <Greeting />
        },
        {
            // 조직도
            path: 'contents/Groups',
            element: <Groups />
        },
        {
            // 교육시설
            path: 'contents/Facility',
            element: <Facility />
        },
        {
            // 오시는길
            path: 'contents/Directions',
            element: <Directions />
        },
        {
            // 보안검색 교육과정
            path: 'contents/Security',
            element: <Security />
        },
        {
            // 항공경비 교육과정
            path: 'contents/Airline',
            element: <Airline />
        },
        {
            // 정원 및 운영계획
            path: 'contents/Operate',
            element: <Operate />
        },
        {
            // 입교절차
            path: 'contents/Admission',
            element: <Admission />
        },
        {
            // 관련근거
            path: 'contents/Reason',
            element: <Reason />
        },
        {
            // 신청방법
            path: 'contents/Application',
            element: <Application />
        },
        {
            // 게시판, 자료실
            path: 'contents/Board/Lists',
            element: <Lists />
        },
        {
            // 게시판, 자료실
            path: 'contents/Board/Views',
            element: <Views />
        },

        // {
        //     // 공지사항
        //     path: 'contents/Notification',
        //     element: <Notification />
        // },
        // {
        //     // 공지사항_View
        //     path: 'contents/Notification/View',
        //     element: <Notification_View />
        // },
        // {
        //     // 교육안내
        //     path: 'contents/Education',
        //     element: <Education />
        // },
        // {
        //     // 교육안내_View
        //     path: 'contents/Education/View',
        //     element: <Education_View />
        // },
        // {
        //     // Faq
        //     path: 'contents/Faq',
        //     element: <Faq />
        // },
        // {
        //     // Faq_View
        //     path: 'contents/Faq/View',
        //     element: <Faq_View />
        // },
        {
            // 사진자료
            path: 'contents/Picture',
            element: <Picture />
        },
        {
            // 사진자료_View
            path: 'contents/Picture/View',
            element: <Picture_View />
        }
        // {
        //     // 최신뉴스
        //     path: 'contents/News',
        //     element: <News />
        // },
        // {
        //     // 최신뉴스_View
        //     path: 'contents/News/View',
        //     element: <News_View />
        // },
        // {
        //     // 관련법령
        //     path: 'contents/Laws',
        //     element: <Laws />
        // },
        // {
        //     // 관련법령_View
        //     path: 'contents/Laws/View',
        //     element: <Laws_View />
        // },
        // {
        //     // 교육자료
        //     path: 'contents/Datum',
        //     element: <Datum />
        // },
        // {
        //     // 교육자료_View
        //     path: 'contents/Datum/View',
        //     element: <Datum_View />
        // }
    ]
};

export default MainRoutes;
