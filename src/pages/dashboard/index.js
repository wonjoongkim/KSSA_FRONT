/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useMemberInfoMutation, useBoardMainListMutation } from '../../hooks/api/MainManagement/MainManagement';

import CountUp from 'react-countup';
import '../../../src/';
// material-ui
import { Divider, Card, Col, Row, Statistic, FloatButton, List, Tooltip } from 'antd';
import { Box, Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import CalenderApp from 'pages/calender/CalenderApp';
import Slick from '../slick/Slick';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export const DashboardDefault = () => {
    const [MemberInfoApi] = useMemberInfoMutation();
    const [BoardMainListApi] = useBoardMainListMutation();
    const [board_DataE, setBoard_DataE] = useState([]);
    const [board_DataN, setBoard_DataN] = useState([]);
    const formatter = (value) => <CountUp end={value} separator="," />;

    // 회원정보
    const handleMemberInfo = async () => {
        const MemberInfoeResponse = await MemberInfoApi({
            Idx: viewContainer.id
        });
        MemberInfoeResponse?.data?.RET_CODE === '0000' ? '' : '';
    };

    // 교육안내
    const handleBoardMainList_E = async () => {
        const BoardMainListEResponse = await BoardMainListApi({
            Board_Type: 'Education'
        });
        BoardMainListEResponse?.data?.RET_CODE === '0000'
            ? setBoard_DataE(
                  BoardMainListEResponse?.data?.RET_DATA.map((d) => ({
                      title: d.Subject,
                      date: d.InDate.substring(0, 10).replace(/-/g, '.')
                  }))
              )
            : setBoard_DataE('');
    };

    // 공지사항
    const handleBoardMainList_N = async () => {
        const BoardMainListNResponse = await BoardMainListApi({
            Board_Type: 'Notice'
        });
        BoardMainListNResponse?.data?.RET_CODE === '0000'
            ? setBoard_DataN(
                  BoardMainListNResponse?.data?.RET_DATA.map((d) => ({
                      title: d.Subject,
                      date: d.InDate.substring(0, 10).replace(/-/g, '.')
                  }))
              )
            : setBoard_DataN('');
    };

    useEffect(() => {
        handleBoardMainList_E();
        handleBoardMainList_N();
    }, []);

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

            {/* 교육 스케쥴 Start */}
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
            {/* 교육 스케쥴 End */}

            {/* 제휴, 협력 로고 Start */}
            <Grid container>
                <Grid item xs={12} mb={7} lg={12}>
                    <MainCard content={false}>
                        <Box sx={{ pt: 3, pl: 3, pr: 3, pb: 3 }}>
                            <Slick />
                        </Box>
                    </MainCard>
                </Grid>
            </Grid>
            {/* 제휴, 협력 로고 End */}

            {/* 교육안내, 공지사항 Start */}
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
                            <Link
                                to="contents/Board/Lists"
                                state={{ board: '게시판', flag: 'Education', title: '교육안내' }}
                                style={{ fontWeight: '700' }}
                            >
                                <Tooltip title="더보기" color={'#108ee9'} key={'#108ee9'}>
                                    More
                                </Tooltip>
                            </Link>
                        }
                        style={{ border: '0px' }}
                    >
                        <List
                            size="large"
                            bordered
                            dataSource={board_DataE}
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
                            <Link
                                to="contents/Board/Lists"
                                state={{ board: '게시판', flag: 'Notice', title: '공지사항' }}
                                style={{ fontWeight: '700' }}
                            >
                                <Tooltip title="더보기" color={'#108ee9'} key={'#108ee9'}>
                                    More
                                </Tooltip>
                            </Link>
                        }
                        style={{ border: '0px' }}
                    >
                        <List
                            size="large"
                            bordered
                            dataSource={board_DataN}
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
            {/* 교육안내, 공지사항 End */}

            <FloatButton.BackTop />
        </>
    );
};
