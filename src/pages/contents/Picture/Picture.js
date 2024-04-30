/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FloatButton, Breadcrumb, Spin, Row, Col, Card, Input, Image, Divider, Pagination, Checkbox, Button } from 'antd';
import MainCard from 'components/MainCard';
import { HomeOutlined, EditOutlined, SearchOutlined, ScissorOutlined } from '@ant-design/icons';
import { usePictureListMutation, usePictureViewMutation } from '../../../hooks/api/PictureManagement/PictureManagement';

import './Style.css';
export const Picture = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true); // 로딩 초기값
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

    const [boardProp, setBoardProp] = useState(null); // 타겟 타이틀 명
    const [flagProp, setFlagProp] = useState(null); // 타겟 게시판 명
    const [titleProp, setTitleProp] = useState(null); // 타겟 게시판 타이틀

    const [picture_ListData, setPicture_ListData] = useState(null); // 게시판 리스트 Data
    const [board_Search_Data, setBoard_Search_Data] = useState(''); // 게시판 검색 Data

    const DataOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

    // Picture 리스트 Start
    const [PictureListApi] = usePictureListMutation();
    const handlePictureList = async (flag, search) => {
        const PictureListResponse = await PictureListApi({
            Board_Type: flag,
            Board_Search: search
        });

        if (PictureListResponse?.data?.RET_CODE === '0000') {
            setPicture_ListData(
                PictureListResponse?.data?.RET_DATA?.resultsWithFiles?.map((d) => ({
                    key: d.Idx,
                    title: d.Subject,
                    date: new Date(d.InDate).toLocaleTimeString('ko-KR', DataOptions).substring(0, 12),
                    unit: d.Unit,
                    Images: d.Images
                }))
            );
            setPages(
                PictureListResponse?.data?.RET_DATA?.resultsWithFiles[0]?.Total === null ||
                    PictureListResponse?.data?.RET_DATA?.resultsWithFiles[0]?.Total === undefined
                    ? '0'
                    : PictureListResponse?.data?.RET_DATA?.resultsWithFiles[0]?.Total
            );
        }
        setLoading(false);
    };
    // Picture 리스트 End

    // 검색 Search
    const onSearch = (value, _e, info) => {
        console.log(value);
        setBoard_Search_Data(value);
        handlePictureList(flagProp, value);
    };

    const onPageChange = (page, pageSize) => {
        setCurrentPage(page);
    };

    const onPageSizeChange = (current, size) => {
        setPages(size);
        console.log(current, size);
    };

    useEffect(() => {
        setLoading(true);
        setBoardProp(location.state.board);
        setFlagProp(location.state.flag);
        setTitleProp(location.state.title);
        handlePictureList(location.state.flag, '');
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
                                    title: <span>자료실</span>
                                },
                                {
                                    title: '사진자료'
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
                    총 {pages} 건
                </Col>
            </Row>

            <Spin tip="Loading..." spinning={loading}>
                <Row gutter={[34, 32]} stify="space-evenly" style={{ marginTop: '20px' }}>
                    {picture_ListData?.map((d, i) => (
                        <>
                            <Col key={i} xs={24} lg={6} style={{ textAlign: 'center' }}>
                                <Card style={{ border: '2px solid #aac9f5', height: '430px' }}>
                                    <Row gutter={[0, 8]} style={{ border: '1px solid #e0e0e0', borderRadius: '5px', padding: '10px 0' }}>
                                        <Col span={24} style={{ fontSize: '17px', color: '#3d3d3de0', fontWeight: '600' }}>
                                            {d.title} [{d.unit}명]
                                        </Col>
                                        <Col span={24} style={{ fontSize: '15px', color: '#3d3d3de0' }}>
                                            {d.date}
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '10px' }}>
                                        <Col span={24} style={{ position: 'relative' }}>
                                            <Image.PreviewGroup items={d?.Images?.map((img) => img.File_Path)}>
                                                <Image src={d?.Images[0]?.File_Path} style={{ borderRadius: '5px', minHeight: '290px' }} />
                                            </Image.PreviewGroup>
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    right: '7px',
                                                    bottom: '7px',
                                                    zIndex: '1'
                                                }}
                                            >
                                                <Link
                                                    to={{ pathname: '/reference/Write' }}
                                                    state={{ board: '자료실', flag: 'Picture', title: '사진자료', form: 'Edit' }}
                                                >
                                                    <Button
                                                        icon={<ScissorOutlined />}
                                                        type="primary"
                                                        style={{ backgroundColor: '#fa541c', color: '#ffffff', border: '0px' }}
                                                    >
                                                        수정
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </>
                    ))}
                </Row>
                <Divider />
                <Row style={{ marginTop: '20px', diplay: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Col>
                        <Pagination
                            showSizeChanger
                            pageSize={pages}
                            defaultCurrent={1}
                            current={currentPage}
                            total={pages}
                            onChange={onPageChange}
                            onShowSizeChange={onPageSizeChange}
                        />
                    </Col>
                </Row>
            </Spin>
            <FloatButton.BackTop />
        </>
    );
};
