/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { Row, Col, Spin, Avatar, Tooltip, Button, DatePicker, Card, Radio, Select, Modal } from 'antd';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';

// ================================|| REGISTER ||================================ //

export const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const ShotLayOut = (flag) => {
        navigate('/Register_Step', { state: { StepProps: { flag } } });
    };
    return (
        <Box sx={{ width: '100%', backgroundColor: '#FFFFFF' }}>
            <Spin tip="Loading..." spinning={loading}>
                <Card title="회원가입">
                    <Row justify="center" align="top" style={{ margin: '50px 0px' }}>
                        <Col
                            xs={{ span: 8, offset: 1 }}
                            lg={{ span: 4, offset: 2 }}
                            style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                            onClick={() => ShotLayOut('Team')}
                        >
                            <Tooltip title="업체 회원가입" placement="top">
                                <Avatar
                                    size={{ xs: 124, sm: 132, md: 140, lg: 164, xl: 180, xxl: 250 }}
                                    style={{ backgroundColor: '#efefef', transition: 'background-color 0.3s', cursor: 'pointer' }}
                                    icon={<TeamOutlined style={{ color: '#24CAC2' }} />}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f3dede';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '#efefef';
                                    }}
                                />
                            </Tooltip>
                            <div style={{ fontSize: '21px', fontWeight: '600', marginTop: '30px', color: '#24CAC2' }}>
                                업체
                                <br />
                                회원가입
                            </div>
                        </Col>
                        <Col
                            xs={{ span: 8, offset: 1 }}
                            lg={{ span: 4, offset: 2 }}
                            style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                            onClick={() => ShotLayOut('User')}
                        >
                            <Tooltip title="교육생 회원가입" placement="top">
                                <Avatar
                                    className="hover-avatar"
                                    size={{ xs: 124, sm: 132, md: 140, lg: 164, xl: 180, xxl: 250 }}
                                    style={{ backgroundColor: '#efefef', transition: 'background-color 0.3s', cursor: 'pointer' }}
                                    icon={<UserOutlined style={{ color: '#71A7EF' }} />}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f3dede';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = '#efefef';
                                    }}
                                />
                            </Tooltip>
                            <div style={{ fontSize: '21px', fontWeight: '600', marginTop: '30px', textAlign: 'center', color: '#71A7EF' }}>
                                교육생
                                <br />
                                회원가입
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Spin>
        </Box>
    );
};
