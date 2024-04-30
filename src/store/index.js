// third-party
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { mainManagement } from '../hooks/api/MainManagement/MainManagement';
import { loginManagement } from '../hooks/api/LoginManagement/LoginManagement';
import { contentsManagement } from '../hooks/api/ContentsManagement/ContentsManagement';
import { preferencesManagement } from '../hooks/api/PreferencesManagement/PreferencesManagement';
import { pictureManagement } from '../hooks/api/PictureManagement/PictureManagement';
import { statisticsManagement } from '../hooks/api/StatisticsManagement/StatisticsManagement';

import { calenderManagement } from '../hooks/api/CalenderManagement/CalenderManagement';
import { boardManagement } from 'hooks/api/BoardManagement/BoardManagement';
import { fileManagement } from 'hooks/api/FileManagement/FIleManagement';
import { xbtCrossManagement } from 'hooks/api/XbtCrossManagement/XbtCrossManagement';
// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

export const store = configureStore({
    reducer: {
        [boardManagement.reducerPath]: boardManagement.reducer,
        [calenderManagement.reducerPath]: calenderManagement.reducer,
        [contentsManagement.reducerPath]: contentsManagement.reducer,
        [pictureManagement.reducerPath]: pictureManagement.reducer,
        [fileManagement.reducerPath]: fileManagement.reducer,
        [loginManagement.reducerPath]: loginManagement.reducer,
        [mainManagement.reducerPath]: mainManagement.reducer,
        [preferencesManagement.reducerPath]: preferencesManagement.reducer,
        [statisticsManagement.reducerPath]: statisticsManagement.reducer,
        [xbtCrossManagement.reducerPath]: xbtCrossManagement.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(boardManagement.middleware)
            .concat(calenderManagement.middleware)
            .concat(contentsManagement.middleware)
            .concat(pictureManagement.middleware)
            .concat(fileManagement.middleware)
            .concat(loginManagement.middleware)
            .concat(mainManagement.middleware)
            .concat(preferencesManagement.middleware)
            .concat(statisticsManagement.middleware)
            .concat(xbtCrossManagement.middleware)
});

setupListeners(store.dispatch);
