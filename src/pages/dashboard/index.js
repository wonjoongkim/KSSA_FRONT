/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Divider, Card, Col, Row, Statistic, FloatButton, List, Tooltip, Modal, Button, Space, Spin } from 'antd';
import { useMemberInfoMutation, useBoardMainListMutation, useBoardMainViewMutation } from '../../hooks/api/MainManagement/MainManagement';
import { FileDoneOutlined, DownloadOutlined, EyeOutlined } from '@ant-design/icons';

import CountUp from 'react-countup';
import '../../../src/';
// material-ui
import { Box, Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import CalenderApp from 'pages/calender/CalenderApp';
import Slick from '../slick/Slick';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export const DashboardDefault = () => {
    const [loading, setLoading] = useState(false); // 로딩 초기값
    const [MemberInfoApi] = useMemberInfoMutation();
    const [BoardMainListApi] = useBoardMainListMutation();
    const [BoardMainViewApi] = useBoardMainViewMutation();
    const [board_DataE, setBoard_DataE] = useState([]);
    const [board_DataN, setBoard_DataN] = useState([]);
    const [board_DataV, setBoard_DataV] = useState([]);
    const [board_FileData, setBoard_FileData] = useState([]);

    const [modal_Board, setModal_Board] = useState(false);
    const formatter = (value) => <CountUp end={value} separator="," />;

    const DataOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

    // 회원정보
    const handleMemberInfo = async () => {
        const MemberInfoeResponse = await MemberInfoApi({
            Idx: viewContainer.id
        });
        MemberInfoeResponse?.data?.RET_CODE === '0000' ? '' : '';
    };

    // 교육안내 List
    const handleBoardMainList_E = async () => {
        const BoardMainListEResponse = await BoardMainListApi({
            Board_Type: 'Education'
        });
        BoardMainListEResponse?.data?.RET_CODE === '0000'
            ? setBoard_DataE(
                  BoardMainListEResponse?.data?.RET_DATA.map((d) => ({
                      Idx: d.Idx,
                      title: d.Subject,
                      date: d.InDate.substring(0, 10).replace(/-/g, '.')
                  }))
              )
            : setBoard_DataE('');
    };

    // 공지사항 List
    const handleBoardMainList_N = async () => {
        const BoardMainListNResponse = await BoardMainListApi({
            Board_Type: 'Notice'
        });
        BoardMainListNResponse?.data?.RET_CODE === '0000'
            ? setBoard_DataN(
                  BoardMainListNResponse?.data?.RET_DATA.map((d) => ({
                      Idx: d.Idx,
                      title: d.Subject,
                      date: d.InDate.substring(0, 10).replace(/-/g, '.')
                  }))
              )
            : setBoard_DataN('');
    };

    // 교육안내, 공지사항 View
    const handelBoardMainView = async (type, idx) => {
        setModal_Board(true);
        const BoardMainViewResponse = await BoardMainViewApi({
            Board_Type: type,
            Idx: idx
        });
        if (BoardMainViewResponse?.data?.RET_CODE === '0000') {
            setBoard_DataV({
                Total: BoardMainViewResponse?.data?.RET_DATA?.serializedResult[0].Total,
                Subject: BoardMainViewResponse?.data?.RET_DATA?.serializedResult[0].Subject,
                Contents: BoardMainViewResponse?.data?.RET_DATA?.serializedResult[0].Contents,
                InDate: BoardMainViewResponse?.data?.RET_DATA?.serializedResult[0].InDate.substring(0, 10).replace(/-/g, '.')
            });
            setBoard_FileData(BoardMainViewResponse?.data?.RET_DATA?.file_result);
        } else {
            setBoard_DataV('');
        }

        setLoading(false);
    };
    // 닫기
    const Modal_Boards = () => {
        setModal_Board((prev) => !prev);
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
                                            <Button
                                                type="text"
                                                onClick={() => handelBoardMainView('Education', item.Idx)}
                                                style={{ fontSize: '18px', fontWeight: '600' }}
                                            >
                                                {item.title}
                                            </Button>
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
                                            <Button
                                                type="text"
                                                onClick={() => handelBoardMainView('Notice', item.Idx)}
                                                style={{ fontSize: '18px', fontWeight: '600' }}
                                            >
                                                {item.title}
                                            </Button>
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
            {modal_Board && (
                <Modal
                    visible={true}
                    maskClosable={false}
                    onOk={Modal_Boards}
                    closable={false}
                    width={567}
                    style={{
                        zIndex: 999
                    }}
                    footer={[]}
                >
                    <Spin tip="Loading..." spinning={loading}>
                        <Row
                            style={{
                                border: '2px solid #ebe9e9',
                                borderRadius: '12px',
                                marginTop: '20px',
                                height: '90px'
                            }}
                        >
                            <Col
                                span={24}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    fontSize: '21px',
                                    fontWeight: '600'
                                }}
                            >
                                {board_DataV?.Subject}
                            </Col>
                            <Col
                                span={24}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    fontSize: '15px'
                                }}
                            >
                                {new Date(board_DataV?.InDate).toLocaleTimeString('ko-KR', DataOptions)}
                            </Col>
                        </Row>
                        <Row style={{ padding: '20px 0px' }}>
                            <Col>
                                <div dangerouslySetInnerHTML={{ __html: board_DataV?.Contents }} />
                            </Col>
                        </Row>
                        <Row
                            gutter={[0, 10]}
                            style={{
                                border: '2px solid #ebe9e9',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px 20px'
                            }}
                        >
                            {board_FileData?.map((d, i) => (
                                <>
                                    <Col xs={11} lg={16} style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                        <a href="#">
                                            <FileDoneOutlined /> {d.Original_FileName}
                                        </a>
                                    </Col>
                                    <Col xs={13} lg={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                        <Space>
                                            <Tooltip
                                                title={<span style={{ fontSize: '13px' }}>다운로드</span>}
                                                color={'#f50'}
                                                placement="top"
                                            >
                                                <Button
                                                    type="default"
                                                    icon={<DownloadOutlined />}
                                                    style={{
                                                        height: '30px',
                                                        width: '45px',
                                                        backgroundColor: '#efefef',
                                                        fontSize: '13px'
                                                    }}
                                                ></Button>
                                            </Tooltip>
                                            <Tooltip
                                                title={<span style={{ fontSize: '13px' }}>미리보기</span>}
                                                color={'#108ee9'}
                                                placement="top"
                                            >
                                                <Button
                                                    type="default"
                                                    icon={<EyeOutlined />}
                                                    style={{
                                                        height: '30px',
                                                        width: '45px',
                                                        backgroundColor: '#efefef',
                                                        fontSize: '13px'
                                                    }}
                                                ></Button>
                                            </Tooltip>
                                        </Space>
                                    </Col>
                                </>
                            ))}
                        </Row>
                    </Spin>
                    <Divider />
                    <Space style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button type="primary" onClick={Modal_Boards} style={{ width: '120px', height: '50px', fontWeight: '600' }}>
                            취소
                        </Button>
                    </Space>
                </Modal>
            )}
        </>
    );
};
