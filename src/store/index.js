// third-party
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { mainManagement } from '../hooks/api/MainManagement/MainManagement';
import { loginManagement } from '../hooks/api/LoginManagement/LoginManagement';
import { contentsManagement } from '../hooks/api/ContentsManagement/ContentsManagement';
import { learningMaqnagement } from '../hooks/api/LearningMaqnagement/LearningMaqnagement';
import { eduManagement } from '../hooks/api/EduManagement/EduManagement';
import { studentsManagement } from '../hooks/api/StudentsManagement/StudentsManagement';
import { preferencesManagement } from '../hooks/api/PreferencesManagement/PreferencesManagement';
import { curriculumManagement } from '../hooks/api/CurriculumManagement/CurriculumManagement';
import { teacherManagement } from '../hooks/api/TeacherManagement/TeacherManagement';
import { theoryGroupManagement } from '../hooks/api/TheoryGroupManagement/TheoryGroupManagement';
import { statisticsManagement } from '../hooks/api/StatisticsManagement/StatisticsManagement';

import { calenderManagement } from '../hooks/api/CalenderManagement/CalenderManagement';
import { boardManagement } from 'hooks/api/BoardManagement/BoardManagement';
import { fileManagement } from 'hooks/api/FileManagement/FIleManagement';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

export const store = configureStore({
    reducer: {
        [boardManagement.reducerPath]: boardManagement.reducer,
        [calenderManagement.reducerPath]: calenderManagement.reducer,
        [contentsManagement.reducerPath]: contentsManagement.reducer,
        [curriculumManagement.reducerPath]: curriculumManagement.reducer,
        [eduManagement.reducerPath]: eduManagement.reducer,
        [fileManagement.reducerPath]: fileManagement.reducer,
        [learningMaqnagement.reducerPath]: learningMaqnagement.reducer,
        [loginManagement.reducerPath]: loginManagement.reducer,
        [mainManagement.reducerPath]: mainManagement.reducer,
        [preferencesManagement.reducerPath]: preferencesManagement.reducer,
        [statisticsManagement.reducerPath]: statisticsManagement.reducer,
        [studentsManagement.reducerPath]: studentsManagement.reducer,
        [teacherManagement.reducerPath]: teacherManagement.reducer,
        [theoryGroupManagement.reducerPath]: theoryGroupManagement.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(boardManagement.middleware)
            .concat(calenderManagement.middleware)
            .concat(contentsManagement.middleware)
            .concat(curriculumManagement.middleware)
            .concat(eduManagement.middleware)
            .concat(fileManagement.middleware)
            .concat(learningMaqnagement.middleware)
            .concat(loginManagement.middleware)
            .concat(mainManagement.middleware)
            .concat(preferencesManagement.middleware)
            .concat(statisticsManagement.middleware)
            .concat(studentsManagement.middleware)
            .concat(teacherManagement.middleware)
            .concat(theoryGroupManagement.middleware)
});

setupListeners(store.dispatch);
