/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, useMediaQuery } from '@mui/material';

// project import
// import Drawer from './Drawer';
import Header from './Header';
import { Footer } from './Footer';

// types
import { openDrawer } from 'store/reducers/menu';

// ==============================|| MAIN LAYOUT ||============================== //

import { useUserStatus } from '../../hooks/core/UserStatus';
import DefaultBackgroundImg from '../../assets/images/kssa_title_20230907_2.png';

const MainLayout = () => {
    const navigate = useNavigate();
    const isLoggedIn = useUserStatus();

    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
    const dispatch = useDispatch();

    // const { drawerOpen } = useSelector((state) => state.menuItems);
    const { drawerOpen } = useState('');

    // drawer toggler
    const [open, setOpen] = useState(drawerOpen);
    const handleDrawerToggle = () => {
        setOpen(!open);
        dispatch(openDrawer({ drawerOpen: !open }));
    };

    // set media wise responsive drawer
    useEffect(() => {
        // if (isLoggedIn === false) {
        //     navigate('/login');
        // }

        setOpen(!matchDownLG);
        dispatch(openDrawer({ drawerOpen: !matchDownLG }));
    }, [matchDownLG]);

    useEffect(() => {
        if (open !== drawerOpen) setOpen(drawerOpen);
    }, [drawerOpen]);

    return (
        <>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Header open={open} handleDrawerToggle={handleDrawerToggle} />
                {/* <Drawer open={open} handleDrawerToggle={handleDrawerToggle} /> */}
                <Box component="main" sx={{ width: '100%', backgroundColor: '#FFFFFF', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                    <Toolbar
                        sx={{
                            marginTop: '45px',
                            height: '190px',
                            backgroundImage: `url(${DefaultBackgroundImg})`, // 배경 이미지 추가
                            backgroundSize: 'cover', // 이미지를 화면에 꽉 채우도록 설정
                            backgroundRepeat: 'no-repeat', // 이미지 반복 방지
                            backgroundPosition: 'bottom', // 이미지를 우측으로 조절
                            borderRadius: '3px' // 라운드된 테두리 적용
                        }}
                    />

                    {/* <Breadcrumbs navigation={navigation} title divider={false} /> */}
                    <Outlet />
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default MainLayout;
