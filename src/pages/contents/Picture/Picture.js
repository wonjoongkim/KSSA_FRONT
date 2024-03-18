/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Spin, Typography, Row, Col, Card, FloatButton, Breadcrumb, Input, Button, Image, Divider, Pagination } from 'antd';
import { Link } from 'react-router-dom';

import { EditOutlined, SearchOutlined, HomeOutlined } from '@ant-design/icons';

import MainCard from 'components/MainCard';
import g1 from '../../../assets/images/g4.png';
export const Picture = () => {
    const { Meta } = Card;
    const { Search } = Input;
    const [loading, setLoading] = useState(true); // 로딩 초기값
    const [pages, setPages] = useState(8);

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const data = [
        {
            title: '항공경비 초기교육 1차',
            date: '2023-10-31',
            unit: '40',
            images: g1
        },
        {
            title: '항공경비 초기교육 2,3차',
            date: '2023-10-30',
            unit: '40',
            images: g1
        },
        {
            title: '항공경비 초기교육 4,5차',
            date: '2023-10-29',
            unit: '40',
            images: g1
        },
        {
            title: '항공경비 초기교육 6차',
            date: '2023-10-28',
            unit: '40',
            images: g1
        },
        {
            title: '보안검색 초기교육 1차',
            date: '2023-10-27',
            unit: '40',
            images: g1
        },
        {
            title: '항공경비 초기교육 2차',
            date: '2023-10-26',
            unit: '40',
            images: g1
        }
    ];
    // const pages = 1; // 페이지당 표시할 데이터 수
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const indexOfLastData = currentPage * pages; // 현재 페이지의 마지막 데이터 인덱스
    const indexOfFirstData = indexOfLastData - pages; // 현재 페이지의 첫 데이터 인덱스
    const currentData = data.slice(indexOfFirstData, indexOfLastData); // 현재 페이지에 표시할 데이터

    const onPageChange = (page, pageSize) => {
        setCurrentPage(page);
    };

    const onPageSizeChange = (current, size) => {
        setPages(size);
        console.log(current, size);
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLoading(false);
        }, 300);
        return () => clearTimeout(timerId);
    }, []);

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
                    사진자료
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
                    총 1,290 건
                </Col>
            </Row>

            <Typography variant="body1">
                <Spin tip="Loading..." spinning={loading}>
                    <Row gutter={[34, 32]} stify="space-evenly" style={{ marginTop: '20px' }}>
                        {currentData.map((d, i) => (
                            <>
                                <Col key={i} xs={24} lg={6} style={{ textAlign: 'center' }}>
                                    <Card style={{ border: '2px solid #aac9f5' }}>
                                        <Row
                                            gutter={[0, 8]}
                                            style={{ border: '1px solid #e0e0e0', borderRadius: '5px', padding: '10px 0' }}
                                        >
                                            <Col span={24} style={{ fontSize: '17px', color: '#3d3d3de0', fontWeight: '600' }}>
                                                {d.title} [{d.unit}명]
                                            </Col>
                                            <Col span={24} style={{ fontSize: '15px', color: '#3d3d3de0' }}>
                                                {d.date}
                                            </Col>
                                        </Row>
                                        <Row style={{ marginTop: '10px' }}>
                                            <Col span={24}>
                                                <Image src={g1} style={{ borderRadius: '5px' }} />
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
                                total={data.length}
                                onChange={onPageChange}
                                onShowSizeChange={onPageSizeChange}
                            />
                        </Col>
                    </Row>
                </Spin>
            </Typography>
            <FloatButton.BackTop />
        </>
    );
};
