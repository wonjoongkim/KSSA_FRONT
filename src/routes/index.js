import { useEffect } from 'react';

import { useRoutes, useNavigate } from 'react-router-dom';
// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// 토큰
import { useUserToken } from '../hooks/core/UserToken';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    // 로그인 토큰 정보
    const [userToken] = useUserToken();
    const navigate = useNavigate();

    useEffect(() => {
        if (userToken.isValid()) {
            navigate('/');
        }
    }, []);

    return useRoutes([MainRoutes, LoginRoutes]);
}
