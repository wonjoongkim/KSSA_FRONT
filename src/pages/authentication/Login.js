/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// antd
import { Button } from 'antd';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';

// ================================|| LOGIN ||================================ //

export const Login = (props) => {
    const navigate = useNavigate();

    const handelRegister = () => {
        navigate('/Register');
        props.ModalCancel();
    };

    const hadelClose = () => {
        navigate('/');
        props.ModalCancel();
    };
    return (
        <>
            <AuthWrapper>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                            <Typography variant="h3">로그인</Typography>
                            <Button type="text" onClick={() => handelRegister()}>
                                <Typography variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                                    아직 회원이 아니신가요?
                                </Typography>
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <AuthLogin ModalClose={hadelClose} />
                    </Grid>
                </Grid>
            </AuthWrapper>
        </>
    );
};
