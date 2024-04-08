/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CountUp from 'react-countup';
import '../../../src/';
// material-ui
import { Divider, Card, Col, Row, Statistic, FloatButton, List, Tooltip } from 'antd';
import { Box, Grid, Typography } from '@mui/material';
import { HolderOutlined, PushpinOutlined, SoundOutlined, LineOutlined } from '@ant-design/icons';

// project import
import MainCard from 'components/MainCard';
import CalenderApp from 'pages/calender/CalenderApp';
import Slick from '../slick/Slick';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export const DashboardDefault = () => {
    let [stateShow, setStateShow] = useState(false);

    const formatter = (value) => <CountUp end={value} separator="," />;

    const data = [
        {
            title: '항공보안학회 2023년 추계학술대회',
            date: '2024-01-01'
        },

        {
            title: '항공보안파트너스(주) 채용공고_2023.09.27',
            date: '2024-01-02'
        },
        {
            title: '인천국제공항보안 보안검색직 직원채용공고_2023.10.20',
            date: '2024-01-03'
        },
        {
            title: '한국항공보안학회_국제분과위원회 포럼(2023.10.13)',
            date: '2024-01-04'
        },
        {
            title: '2023년 보안검색장비산업 발전 세미나',
            date: '2024-01-05'
        }
    ];

    useEffect(() => {
        let timer = setTimeout(() => {
            setStateShow(true);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [stateShow]);

    return (
        <>
            <Divider />
            <Row gutter={[18, 8]}>
                <Col span={8}>
                    <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5DC' }}>
                        <Statistic
                            title={<div style={{ fontSize: '19px', color: '#444', fontWeight: '700' }}>전체 교육</div>}
                            value={112893}
                            formatter={formatter}
                            style={{ fontWeight: '600', fontSize: '19px' }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#D0EAD0' }}>
                        <Statistic
                            title={<div style={{ fontSize: '19px', color: '#444', fontWeight: '700' }}>교육중</div>}
                            value={167}
                            precision={2}
                            formatter={formatter}
                            style={{ fontWeight: '600', fontSize: '19px' }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFE4E1' }}>
                        <Statistic
                            title={<div style={{ fontSize: '19px', color: '#444', fontWeight: '700' }}>이수교육</div>}
                            value={1821}
                            precision={2}
                            formatter={formatter}
                            style={{ fontWeight: '600', fontSize: '19px' }}
                        />
                    </Card>
                </Col>
            </Row>
            <Divider />
            <Grid container>
                <Grid item xs={12} mb={5} lg={12}>
                    {/* <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h4">교육 스케쥴</Typography>
                        </Grid>
                    </Grid> */}
                    <MainCard content={false} sx={{ mt: 1.5 }}>
                        <Box sx={{ pt: 3, pl: 5, pr: 5, pb: 3 }}>
                            <CalenderApp />
                        </Box>
                    </MainCard>
                </Grid>
            </Grid>

            {/* 제휴, 협력 로고 */}
            <Grid container>
                <Grid item xs={12} mb={7} lg={12}>
                    <MainCard content={false}>
                        <Box sx={{ pt: 3, pl: 3, pr: 3, pb: 3 }}>
                            <Slick />
                        </Box>
                    </MainCard>
                </Grid>
            </Grid>

            {/* 교육안내, 공지사항 */}
            <Row gutter={[48, 16]}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <Card
                        bordered={true}
                        title={
                            <div style={{ display: 'inline-block' }}>
                                <div style={{ borderBottom: '3px solid #666666', paddingBottom: '3px' }}>
                                    <Typography variant="h4">교육안내</Typography>
                                </div>
                            </div>
                        }
                        extra={
                            <Link to="contents/Education" style={{ fontWeight: '700' }}>
                                <Tooltip title="More" color={'#108ee9'} key={'#108ee9'}>
                                    More
                                </Tooltip>
                            </Link>
                        }
                        style={{ border: '0px' }}
                    >
                        <List
                            size="large"
                            bordered
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item style={{ fontSize: '18px', fontWeight: '600' }}>
                                    <List.Item.Meta
                                        title={
                                            <a href="#" style={{ fontSize: '18px', fontWeight: '600' }}>
                                                {item.title}
                                            </a>
                                        }
                                    />
                                    <div style={{ width: '110px', textAlign: 'right' }}>{item.date}</div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <Card
                        bordered={true}
                        title={
                            <div style={{ display: 'inline-block' }}>
                                <div style={{ borderBottom: '3px solid #666666', paddingBottom: '3px' }}>
                                    <Typography variant="h4">공지사항</Typography>
                                </div>
                            </div>
                        }
                        extra={
                            <Link to="contents/Notification" style={{ fontWeight: '700' }}>
                                <Tooltip title="More" color={'#108ee9'} key={'#108ee9'}>
                                    More
                                </Tooltip>
                            </Link>
                        }
                        style={{ border: '0px' }}
                    >
                        <List
                            size="large"
                            bordered
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item style={{ fontSize: '18px', fontWeight: '600' }}>
                                    <List.Item.Meta
                                        title={
                                            <a href="#" style={{ fontSize: '18px', fontWeight: '600' }}>
                                                {item.title}
                                            </a>
                                        }
                                    />
                                    <div style={{ width: '110px', textAlign: 'right' }}>{item.date}</div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
            <FloatButton.BackTop />
        </>
    );
};
