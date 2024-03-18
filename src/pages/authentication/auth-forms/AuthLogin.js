/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Modal, message, Row, Col, Space, Dropdown, Form, Input, DatePicker, Tabs, Card } from 'antd';

// material-ui
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined, PoweroffOutlined } from '@ant-design/icons';

// 토큰
import { useUserToken } from '../../../hooks/core/UserToken';

// 로그인 API
import { useMember_LoginMutation } from '../../../hooks/api/LoginManagement/LoginManagement';
// ============================|| FIREBASE - LOGIN ||============================ //
import { Search } from './Search';

const AuthLogin = (props) => {
    // 아이디 저장 및 체크
    const LS_KEY_ID = 'LS_KEY_ID';
    const LS_KEY_SAVE_ID_FLAG = 'LS_KEY_SAVE_ID_FLAG';
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [formid, setFormid] = useState(1);
    const [valueId, setValueId] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [saveIDFlag, setSaveIDFlag] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    // 로그인 토큰 정보
    const [userToken] = useUserToken();

    // 로그인 api 정보
    const [Member_Login] = useMember_LoginMutation();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // 아이디 저장
    const handleSaveIDFlag = (e) => {
        if (e.target.checked === false) {
            setValueId('');
        }
        localStorage.setItem(LS_KEY_SAVE_ID_FLAG, !saveIDFlag);
        setSaveIDFlag(!saveIDFlag);
    };

    const handleLogin = async (values) => {
        const userMember_LoginResponse = await Member_Login({
            userid: values.UserId,
            userpw: values.PassWord
        });

        if (userMember_LoginResponse?.data?.RET_CODE === '0000') {
            messageApi.open({
                type: 'success',
                content: userMember_LoginResponse?.data?.RET_DATA?.USER_ID + '님 로그인 했습니다.'
            });

            const jwtToken = userMember_LoginResponse?.data?.RET_DATA?.accessToken;
            userToken.setItem(jwtToken);
            localStorage.setItem('LoginId', userMember_LoginResponse?.data?.RET_DATA?.User_Id);
            localStorage.setItem('LoginNm', userMember_LoginResponse?.data?.RET_DATA?.User_Nm);

            if (true) {
                if (saveIDFlag) localStorage.setItem(LS_KEY_ID, userMember_LoginResponse?.data?.RET_DATA?.USER_ID);
            }

            setTimeout(() => {
                navigate('/');
                props.ModalClose();
            }, 500);
        } else {
            Modal.error({ title: 'Error', content: '로그인에 실패하였습니다.' });
        }
    };
    // 아이디 찾기, 비밀번호 변경 Start
    const searchhandleOk = () => {
        setSearchModalOpen(false);
        form.resetFields();
    };

    const searchhandleCancel = () => {
        setSearchModalOpen(false);
        form.resetFields();
    };
    // 아이디 찾기, 비밀번호 변경 End

    // 아이디 찾기
    const SearchId = (values) => {
        console.log('아이디 찾기', values);
        // SelectUserId_ApiCall(values);
    };

    // 비밀번호 변경
    const ChangePw = (values) => {
        console.log('비밀번호 변경', values);
        // UpdateUserPwd_ApiCall(values);
    };

    useEffect(() => {
        let idFlag = JSON.parse(localStorage.getItem(LS_KEY_SAVE_ID_FLAG));
        if (idFlag !== null) setSaveIDFlag(idFlag);
        if (idFlag === false) localStorage.setItem(LS_KEY_ID, '');
        let data = localStorage.getItem(LS_KEY_ID);
        if (data !== null) setValueId(data);
    }, []);

    return (
        <div>
            {contextHolder}
            <Formik
                initialValues={{
                    // Adminid: localStorage.getItem(LS_KEY_SAVE_ID_FLAG) === 'false' ? '' : localStorage.getItem(LS_KEY_ID),
                    UserId: '',
                    PassWord: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    UserId: Yup.string()
                        .required(<span style={{ fontSize: '14px', fontWeight: '600' }}>아이디를 입력해주세요.</span>)
                        .min(4, <span style={{ fontSize: '14px', fontWeight: '600' }}>4자 이상 입력해주세요!</span>),
                    PassWord: Yup.string()
                        .required(<span style={{ fontSize: '14px', fontWeight: '600' }}>비밀번호를 입력해주세요.</span>)
                        .min(4, <span style={{ fontSize: '14px', fontWeight: '600' }}>4자 이상 입력해주세요!</span>)
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: true });
                        setSubmitting(true);
                        handleLogin(values);
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={2}>
                                    <InputLabel htmlFor="UserId-login" style={{ fontWeight: '600', fontSize: '17px' }}>
                                        아이디
                                    </InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.id && errors.id)}
                                        id="UserId-login"
                                        type="UserId"
                                        value={values.id}
                                        name="UserId"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter UserId"
                                    />
                                    {touched.UserId && errors.UserId && (
                                        <FormHelperText error UserId="standard-weight-helper-text-id-login">
                                            {errors.UserId}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={2}>
                                    <InputLabel htmlFor="PassWord-login" style={{ fontWeight: '600', fontSize: '17px' }}>
                                        비밀번호
                                    </InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.PassWord && errors.PassWord)}
                                        id="PassWord-login"
                                        type={showPassword ? 'text' : 'PassWord'}
                                        value={values.Password}
                                        name="PassWord"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter PassWord"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle Password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    {touched.Password && errors.Password && (
                                        <FormHelperText error id="standard-weight-helper-text-Password-login">
                                            {errors.Password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: -1 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={saveIDFlag}
                                                onChange={handleSaveIDFlag}
                                                name="saveId"
                                                id="saveId"
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label={<Typography variant="h6">아이디 저장</Typography>}
                                    />
                                    <Button
                                        type="text"
                                        onClick={() => setSearchModalOpen(true)}
                                        style={{ backgroundColor: '#aaaaaa', color: '#ffffff', borderRadius: '5px' }}
                                    >
                                        아이디 / 비밀번호를 잊으셨나요?
                                    </Button>
                                </Stack>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        fullWidth
                                        icon={<PoweroffOutlined />}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        로그인
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>

            {/* 아이디 찾기 | 비번 변경 폼 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={searchModalOpen}
                onOk={searchhandleOk}
                onCancel={searchhandleCancel}
                width={580}
                style={{
                    top: 200,
                    zIndex: 999
                }}
                footer={[]}
            >
                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={[
                        {
                            label: (
                                <Button
                                    style={{ border: '0px' }}
                                    onClick={() => {
                                        form.resetFields();
                                        setFormid(1);
                                    }}
                                >
                                    <span
                                        style={{
                                            color: formid === 1 ? '#1677ff' : '#777777',
                                            fontWeight: '600',
                                            margin: '0 25px',
                                            fontSize: '1.4rem'
                                        }}
                                    >
                                        아이디 찾기
                                    </span>
                                </Button>
                            ),
                            key: 'id',
                            children: <Search form={form} formid="1" IdSearch={SearchId} Modal_Cancel={searchhandleCancel} />
                        },
                        {
                            label: (
                                <Button
                                    style={{ border: '0px' }}
                                    onClick={() => {
                                        form.resetFields();
                                        setFormid(2);
                                    }}
                                >
                                    <span
                                        style={{
                                            color: formid === 2 ? '#1677ff' : '#777777',
                                            fontWeight: '600',
                                            margin: '0 25px',
                                            fontSize: '1.4rem'
                                        }}
                                    >
                                        비밀번호 변경
                                    </span>
                                </Button>
                            ),
                            key: 'pw',
                            children: <Search form={form} formid="2" PwChange={ChangePw} Modal_Cancel={searchhandleCancel} />
                        }
                    ]}
                />
            </Modal>
            {/* 아이디 찾기 | 비번 변경 폼 모달 창 End */}
        </div>
    );
};

export default AuthLogin;
