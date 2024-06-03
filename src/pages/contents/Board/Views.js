/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Spin, Typography, Row, Col, Card, Button, FloatButton, Breadcrumb, Input, Space, Tooltip } from 'antd';
import { EditOutlined, SearchOutlined, HomeOutlined, FileDoneOutlined, DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import { useBoardViewMutation } from '../../../hooks/api/BoardManagement/BoardManagement';
import MainCard from 'components/MainCard';

export const Views = () => {
    const location = useLocation();
    const { Meta } = Card;
    const { Search } = Input;
    const [loading, setLoading] = useState(true); // 로딩 초기값
    const [boardProp, setBoardProp] = useState(null); // 타겟 타이틀 명
    const [flagProp, setFlagProp] = useState(null); // 타겟 게시판 명
    const [titleProp, setTitleProp] = useState(null); // 타겟 게시판 타이틀
    const [board_Data, setBoard_Data] = useState(''); // Board Data
    const [board_FileData, setBoard_FileData] = useState([]); // Board Data

    const DataOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

    const [BoardViewApi] = useBoardViewMutation();
    // 교육안내
    const handleBoardView = async (flag, idx) => {
        const BoardViewResponse = await BoardViewApi({
            Board_Type: flag,
            Idx: idx
        });

        if (BoardViewResponse?.data?.RET_CODE === '0000') {
            setBoard_Data({
                Total: BoardViewResponse?.data?.RET_DATA?.serializedResult[0].Total,
                Subject: BoardViewResponse?.data?.RET_DATA?.serializedResult[0].Subject,
                Contents: BoardViewResponse?.data?.RET_DATA?.serializedResult[0].Contents,
                InDate: BoardViewResponse?.data?.RET_DATA?.serializedResult[0].InDate
            });
            setBoard_FileData(BoardViewResponse?.data?.RET_DATA?.file_result);
        } else {
            setBoard_Data('');
        }
        setLoading(false);
    };

    useEffect(() => {
        setBoardProp(location.state.board);
        setFlagProp(location.state.flag);
        setTitleProp(location.state.title);
        handleBoardView(location.state.flag, location.state.idx);
    }, [location.state]);

    return (
        <>
            <MainCard
                title={
                    <>
                        <Breadcrumb
                            items={[
                                {
                                    href: '/',
                                    title: <HomeOutlined />
                                },
                                {
                                    title: <span>게시판</span>
                                },
                                {
                                    title: '공지사항'
                                }
                            ]}
                        />
                    </>
                }
            />

            <Row
                style={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    marginTop: '-40px',
                    padding: '0px',
                    height: '75px'
                }}
            >
                <Col
                    xs={{ span: 5, offset: 1 }}
                    lg={{ span: 2, offset: 1 }}
                    style={{ fontSize: '17px', fontWeight: '600', display: 'flex', justifyContent: 'start', alignItems: 'center' }}
                >
                    {titleProp}
                </Col>
                <Col xs={{ span: 10, offset: 0 }} lg={{ span: 16, offset: 0 }}>
                    <Input
                        size="large"
                        placeholder="Search"
                        prefix={<EditOutlined />}
                        allowClear
                        enterButton="Search"
                        style={{ height: '55px', borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
                    />
                </Col>
                <Col xs={{ span: 2, offset: 0 }} lg={{ span: 2, offset: 0 }}>
                    <Button
                        icon={<SearchOutlined />}
                        type="primary"
                        style={{ height: '55px', width: '40px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
                    ></Button>
                </Col>
                <Col
                    xs={{ span: 5, offset: 1 }}
                    lg={{ span: 2, offset: 1 }}
                    style={{ fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    총 {board_Data.Total} 건
                </Col>
            </Row>

            <Typography variant="body1" style={{ margin: '20px' }}>
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
                            {board_Data?.Subject}
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
                            {new Date(board_Data?.InDate).toLocaleTimeString('ko-KR', DataOptions)}
                        </Col>
                    </Row>
                    <Row
                        style={{
                            padding: '20px 0px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        <Col>
                            <div dangerouslySetInnerHTML={{ __html: board_Data?.Contents }} />
                        </Col>
                    </Row>
                    {board_FileData.length > 0 ? (
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
                                    <Col xs={11} lg={14} style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                        <a href="#">
                                            <FileDoneOutlined /> {d.Original_FileName}
                                        </a>
                                    </Col>
                                    <Col xs={13} lg={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                        <Space>
                                            <Tooltip
                                                title={<span style={{ fontSize: '13px' }}>다운로드</span>}
                                                color={'#f50'}
                                                placement="top"
                                            >
                                                <Button
                                                    type="default"
                                                    icon={<DownloadOutlined />}
                                                    style={{ height: '30px', width: '45px', backgroundColor: '#efefef', fontSize: '13px' }}
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
                                                    style={{ height: '30px', width: '45px', backgroundColor: '#efefef', fontSize: '13px' }}
                                                ></Button>
                                            </Tooltip>
                                        </Space>
                                    </Col>
                                </>
                            ))}
                        </Row>
                    ) : (
                        ''
                    )}
                    <Row
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '20px'
                        }}
                    >
                        <Col>
                            <Button
                                type="primary"
                                onClick={() => {
                                    window.history.back(-1);
                                }}
                                style={{ width: '120px', height: '45px' }}
                            >
                                목록
                            </Button>
                        </Col>
                    </Row>
                </Spin>
            </Typography>
            <FloatButton.BackTop />
        </>
    );
};
