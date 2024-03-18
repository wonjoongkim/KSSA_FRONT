/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

// material-ui
import { Box, Grid } from '@mui/material';

// project import
import AuthCard from './AuthCard';
import Logo from 'components/Logo';
import AuthFooter from 'components/cards/AuthFooter';

// assets
// import AuthBackground from 'assets/images/auth/AuthBackground';
import DefaultBackgroundImg from '../../assets/images/bg.png';
// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }) => (
    <Box
        sx={{
            backgroundImage: `url(${DefaultBackgroundImg})`, // 배경 이미지 추가
            backgroundSize: '80%', // 이미지를 화면에 꽉 채우도록 설정
            backgroundRepeat: 'no-repeat', // 이미지 반복 방지
            backgroundPosition: 'right' // 이미지를 우측으로 조절
        }}
    >
        <Grid container direction="column" justifyContent="flex-end">
            {/* <Grid item xs={12} sx={{ ml: 3, mt: 5 }}>
                <Logo />
            </Grid> */}
            <Grid item xs={12}>
                <Grid item xs={12} container justifyContent="start" alignItems="center">
                    <Grid item>
                        <AuthCard>{children}</AuthCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
);

AuthWrapper.propTypes = {
    children: PropTypes.node
};

export default AuthWrapper;
