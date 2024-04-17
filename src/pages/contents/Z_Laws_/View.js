/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Spin, Typography, Row, Col, Card, Button, FloatButton, Breadcrumb, Input, Space } from 'antd';
import { EditOutlined, SearchOutlined, HomeOutlined } from '@ant-design/icons';

import MainCard from 'components/MainCard';

export const View = () => {
    const { Meta } = Card;
    const { Search } = Input;
    const [loading, setLoading] = useState(true); // 로딩 초기값

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
                                    title: '관련법령'
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
                    관련법령
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

            <Typography variant="body1" style={{ margin: '20px' }}>
                <Spin tip="Loading..." spinning={loading}>
                    <Row
                        style={{
                            border: '2px solid #aaaaaa',
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
                            2023년 보안검색장비산업 발전세미나 개최
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
                            2023-10-31
                        </Col>
                    </Row>
                    <Row style={{ padding: '20px 0px' }}>
                        <Col>
                            <p>❍ 행사명 : 2023년 보안검색장비산업 발전세미나</p>
                            <p>❍ 일 시 : ′23. 9.15 (금) 13:30∼17:30</p>
                            <p>❍ 장 소 : 킨텍스 제2전시장 308호</p>
                            <p>❍ 주 관 : 대한민국항공보안협회 ∙ 충남 서천군</p>
                            <p>❍ 주 최 : 한국항공우주산업진흥협회 ∙ 한서대학교</p>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            border: '2px solid #aaaaaa',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 20px',
                            height: '90px'
                        }}
                    >
                        <Col xs={11} lg={14} style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                            <a href="#">보안검색장비_보안검색장비_보안검색장비_보안검색장비.PDF</a>
                        </Col>
                        <Col xs={13} lg={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Space>
                                <Button type="default" style={{ height: '45px', backgroundColor: '#efefef' }}>
                                    다운로드
                                </Button>
                                <Button type="default" style={{ height: '45px', backgroundColor: '#efefef' }}>
                                    미리보기
                                </Button>
                            </Space>
                        </Col>
                    </Row>
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
