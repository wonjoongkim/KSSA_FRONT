/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetLoginInfoMutation } from '../../../../../hooks/api/MainManagement/MainManagement';
import { remove } from '../../../../../services/core/User/Token';

// 토큰
import { useUserToken } from '../../../../../hooks/core/UserToken';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, CardContent, ClickAwayListener, Grid, IconButton, Paper, Popper, Stack, Typography } from '@mui/material';
// import 'antd/dist/antd.css';
import { Modal, Tooltip } from 'antd';
import { FormOutlined } from '@ant-design/icons';

// project import
import MainCard from 'components/MainCard';
import Transitions from 'components/@extended/Transitions';
import ProfileTab from './ProfileTab';
import SettingTab from './SettingTab';
import { Login } from '../../../../../pages/authentication/Login';
import Register from '../../../../../pages/authentication/Register';

// 아이콘 이미지
import { UserOutlined, LoginOutlined } from '@ant-design/icons';

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
            {value === index && children}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const iconBackColorOpen = 'grey.300';
    const [getLoginInfo] = useGetLoginInfoMutation();

    // 로그인 토큰 정보
    const [userToken] = useUserToken();

    // 모달창 세팅
    const [Modal_Out, setModal_Out] = useState(false);
    const [Modal_Login, setModal_Login] = useState(false); // 로그인 모달창
    const [confirmLoading_Out, setConfirmLoading_Out] = useState(false);
    const [modalText_Out, setModalText_Out] = useState('로그아웃 하시겠습니까?');

    // 회원 정보 호출
    const [loginInfo, setLoginInfo] = useState(null);

    // 로그아웃 처리
    const handleLogout = async () => {
        // setModalText_Out('로그아웃 완료!');
        setConfirmLoading_Out(true);
        setTimeout(() => {
            setModal_Out(false);
            setConfirmLoading_Out(false);
            remove();
            navigate('/');
            setLoginInfo(null);
        }, 800);
    };

    // 로그아웃 취소
    const handleCancel = () => {
        setModal_Out(false);
    };

    const handleLogin = () => {
        setModal_Login(false);
    };

    // 로그인 모달창 닫기
    const handleLogin_Modal_Cancel = () => {
        setModal_Login(false);
    };

    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const [value, setValue] = useState(0);

    const Login_Modal = () => {
        setModal_Login(true);
    };

    // 회원가입 폼
    const Register = () => {
        navigate('/Register');
    };

    useEffect(() => {
        if (userToken.isValid()) {
            setLoginInfo({
                USER_ID: localStorage.getItem('LoginId'),
                USER_NM: localStorage.getItem('LoginNm')
            });
        }
    }, [userToken.isValid()]);

    return (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
            {userToken.isValid() === true ? (
                <>
                    <ButtonBase
                        sx={{
                            p: 0.25,
                            bgcolor: open ? iconBackColorOpen : 'transparent',
                            borderRadius: 1,
                            '&:hover': { bgcolor: 'secondary.lighter' }
                        }}
                        aria-label="open profile"
                        ref={anchorRef}
                        aria-controls={open ? 'profile-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
                            <Avatar style={{ backgroundColor: '#87d068', width: 26, height: 26 }} icon={<UserOutlined />} />
                            <Typography variant="subtitle1">{loginInfo?.USER_NM}</Typography>
                        </Stack>
                    </ButtonBase>

                    <Popper
                        placement="bottom-end"
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                        popperOptions={{
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, 9]
                                    }
                                }
                            ]
                        }}
                    >
                        {({ TransitionProps }) => (
                            <Transitions type="fade" in={open} {...TransitionProps}>
                                {open && (
                                    <Paper
                                        sx={{
                                            boxShadow: theme.customShadows.z1,
                                            width: 190,
                                            minWidth: 140,
                                            maxWidth: 190,
                                            [theme.breakpoints.down('md')]: {
                                                maxWidth: 150
                                            }
                                        }}
                                    >
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MainCard elevation={0} border={false} content={false}>
                                                <CardContent sx={{ px: 2.5, pt: 3 }}>
                                                    <Grid container justifyContent="space-between" alignItems="center">
                                                        <Grid item>
                                                            <Stack direction="row" spacing={1.25} alignItems="center">
                                                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                                                <Stack>
                                                                    <Typography variant="h6">{loginInfo?.USER_NM}</Typography>
                                                                    <Typography variant="body2" color="textSecondary">
                                                                        {loginInfo?.USER_ID}
                                                                    </Typography>
                                                                </Stack>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                                {open && (
                                                    <>
                                                        <TabPanel value={value} index={0} dir={theme.direction}>
                                                            <ProfileTab handleLogout={() => setModal_Out(true)} />
                                                        </TabPanel>
                                                        <TabPanel value={value} index={1} dir={theme.direction}>
                                                            <SettingTab />
                                                        </TabPanel>
                                                    </>
                                                )}
                                            </MainCard>
                                        </ClickAwayListener>
                                    </Paper>
                                )}
                            </Transitions>
                        )}
                    </Popper>
                </>
            ) : (
                <>
                    <span style={{ marginRight: '5px' }}>
                        <Tooltip title="회원가입" color="#2db7f5" key="#2db7f5">
                            <IconButton
                                disableRipple
                                color="secondary"
                                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                                aria-label="open profile"
                                ref={anchorRef}
                                aria-controls={open ? 'profile-grow' : undefined}
                                aria-haspopup="true"
                                style={{ width: '80px' }}
                                onClick={() => Register()}
                            >
                                <FormOutlined style={{ fontSize: '15px' }} />
                                <span style={{ marginLeft: '0px', width: '55px' }}>회원가입</span>
                            </IconButton>
                        </Tooltip>
                    </span>
                    <span>
                        <Tooltip title="로그인" color="#2db7f5" key="#2db7f5">
                            <IconButton
                                disableRipple
                                color="secondary"
                                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                                aria-label="open profile"
                                ref={anchorRef}
                                aria-controls={open ? 'profile-grow' : undefined}
                                aria-haspopup="true"
                                style={{ width: '70px' }}
                                onClick={() => Login_Modal()}
                            >
                                <LoginOutlined style={{ fontSize: '15px' }} />
                                <span style={{ marginLeft: '0px', width: '50px' }}>로그인</span>
                            </IconButton>
                        </Tooltip>
                    </span>
                </>
            )}
            <Modal title="알림" open={Modal_Out} onOk={handleLogout} confirmLoading={confirmLoading_Out} onCancel={handleCancel}>
                <p>{modalText_Out}</p>
            </Modal>
            {/* 로그인 창 Start */}
            <Modal
                className="custom-modal"
                maskClosable={false}
                open={Modal_Login}
                onOk={handleLogin}
                onCancel={handleLogin_Modal_Cancel}
                width={700}
                style={{
                    zIndex: 999
                }}
                footer={null}
            >
                <Login ModalCancel={handleLogin_Modal_Cancel} CloseProps={'login'} />
            </Modal>
            {/* 로그인 창 End */}
        </Box>
    );
};

export default Profile;
