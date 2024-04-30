/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Spin, Typography, Row, Col, Card, List, FloatButton, Breadcrumb, Input, Button, Pagination } from 'antd';
import { EditOutlined, SearchOutlined, HomeOutlined } from '@ant-design/icons';
import { useBoardListMutation } from '../../../hooks/api/BoardManagement/BoardManagement';
import MainCard from 'components/MainCard';
import './Style.css';
export const Lists = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true); // 로딩 초기값

    const [boardProp, setBoardProp] = useState(null); // 타겟 타이틀 명
    const [flagProp, setFlagProp] = useState(null); // 타겟 게시판 명
    const [titleProp, setTitleProp] = useState(null); // 타겟 게시판 타이틀
    const [board_Data, setBoard_Data] = useState([]); // Board Data
    const [board_Search_Data, setBoard_Search_Data] = useState(''); // 게시판 검색 Data

    const DataOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

    const [BoardListApi] = useBoardListMutation();
    // 교육안내
    const handleBoardList = async (flag, search) => {
        const BoardListResponse = await BoardListApi({
            Board_Type: flag,
            Board_Search: search
        });
        BoardListResponse?.data?.RET_CODE === '0000'
            ? setBoard_Data(
                  BoardListResponse?.data?.RET_DATA.map((d) => ({
                      idx: d.Idx,
                      title: d.Subject,
                      date: new Date(d.InDate).toLocaleTimeString('ko-KR', DataOptions).substring(0, 11)
                  }))
              )
            : setBoard_Data('');
    };

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    // 검색 Search
    const onSearch = (value, _e, info) => {
        console.log(value);
        setBoard_Search_Data(value);
        handleBoardList(flagProp, value);
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLoading(false);
        }, 300);
        return () => clearTimeout(timerId);
    }, []);

    useEffect(() => {
        setBoardProp(location.state.board);
        setFlagProp(location.state.flag);
        setTitleProp(location.state.title);
        handleBoardList(location.state.flag, '');
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
                                    title: boardProp
                                },
                                {
                                    title: titleProp
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
                    <Input.Search
                        placeholder="※ 통합 검색 (제목)"
                        onSearch={onSearch}
                        allowClear
                        enterButton
                        className="custom-search-input"
                    />
                </Col>
                <Col
                    xs={{ span: 5, offset: 1 }}
                    lg={{ span: 2, offset: 1 }}
                    style={{ fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    총 {board_Data.length} 건
                </Col>
            </Row>

            <Typography variant="body1">
                <Spin tip="Loading..." spinning={loading}>
                    <Row>
                        <List
                            size="large"
                            bordered
                            dataSource={board_Data}
                            pagination={<Pagination showSizeChanger onShowSizeChange={onShowSizeChange} total={board_Data.length} />}
                            style={{ marginTop: '10px', width: '100%' }}
                            renderItem={(item) => (
                                <List.Item>
                                    <Col xs={16} lg={16} style={{ fontSize: '18px', display: 'flex', justifyContent: 'start' }}>
                                        <Link
                                            to={{ pathname: '/contents/board/Views' }}
                                            state={{ board: boardProp, flag: flagProp, title: titleProp, idx: item.idx }}
                                            style={{ color: '#4B4B4B' }}
                                        >
                                            {item.title}
                                        </Link>
                                    </Col>
                                    <Col xs={8} lg={8} style={{ fontSize: '18px', display: 'flex', justifyContent: 'flex-end' }}>
                                        {item.date}
                                    </Col>
                                </List.Item>
                            )}
                        />
                    </Row>
                </Spin>
            </Typography>
            <FloatButton.BackTop />
        </>
    );
};
