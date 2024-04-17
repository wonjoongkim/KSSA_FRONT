/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Spin, Typography, Row, Col, Card, List, FloatButton, Breadcrumb, Input, Button, Pagination } from 'antd';
import { Link } from 'react-router-dom';

import { EditOutlined, SearchOutlined, HomeOutlined } from '@ant-design/icons';

import MainCard from 'components/MainCard';

export const Datum = () => {
    const { Meta } = Card;
    const { Search } = Input;
    const [loading, setLoading] = useState(true); // 로딩 초기값
    const [pages, setPages] = useState(10);
    // const [data, setData] = useState();

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const data = [
        {
            title: '항공보안학회 2023년 추계학술대회',
            date: '2023-10-31'
        },
        {
            title: '항공보안파트너스(주) 채용공고_2023.09.27',
            date: '2023-10-30'
        },
        {
            title: '인천국제공항보안 보안검색직 직원채용공고_2023.10.20',
            date: '2023-10-30'
        },
        {
            title: '한국항공보안학회_국제분과위원회 포럼(2023.10.13)',
            date: '2023-09-19'
        },
        {
            title: '2023년 보안검색장비산업 발전 세미나',
            date: '2023-09-12'
        },
        {
            title: '한국보안인재개발원 개원식 (2023.09.08)',
            date: '2023-08-25'
        }
    ];
    // const data = [];
    // for (let i = 0; i < 100; i++) {
    //     data.push(
    //         {
    //             title: '항공보안학회 2023년 추계학술대회',
    //             date: '2023-10-31'
    //         },
    //         {
    //             title: '항공보안파트너스(주) 채용공고_2023.09.27',
    //             date: '2023-10-30'
    //         },
    //         {
    //             title: '인천국제공항보안 보안검색직 직원채용공고_2023.10.20',
    //             date: '2023-10-30'
    //         },
    //         {
    //             title: '한국항공보안학회_국제분과위원회 포럼(2023.10.13)',
    //             date: '2023-09-19'
    //         },
    //         {
    //             title: '2023년 보안검색장비산업 발전 세미나',
    //             date: '2023-09-12'
    //         },
    //         {
    //             title: '한국보안인재개발원 개원식 (2023.09.08)',
    //             date: '2023-08-25'
    //         }
    //     );
    // }

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
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
                                    title: '교육자료'
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
                    교육자료
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
                    <Row>
                        <List
                            size="large"
                            bordered
                            dataSource={data}
                            pagination={<Pagination showSizeChanger onShowSizeChange={onShowSizeChange} total={data.length} />}
                            style={{ marginTop: '10px', width: '100%' }}
                            renderItem={(item) => (
                                <List.Item>
                                    <Col xs={16} lg={16} style={{ fontSize: '18px', display: 'flex', justifyContent: 'start' }}>
                                        <Link to="./View">{item.title}</Link>
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
