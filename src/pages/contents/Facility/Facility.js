/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Spin, Typography, Row, Col, Card, Divider, FloatButton, Breadcrumb } from 'antd';
import { SnippetsOutlined, HomeOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';
import GroupsImg from '../../../assets/images/facilities.png';

import g1 from '../../../assets/images/g1.png';
import g2 from '../../../assets/images/g2.png';
import g3 from '../../../assets/images/g3.png';
import g4 from '../../../assets/images/g4.png';
import g5 from '../../../assets/images/g5.png';
import g6 from '../../../assets/images/g6.png';
import g7 from '../../../assets/images/g7.png';
import g8 from '../../../assets/images/g8.png';
import g9 from '../../../assets/images/g9.png';
import g10 from '../../../assets/images/g10.png';

import './Facility_Style.css';

const { Title, Paragraph, Text, Link } = Typography;

export const Facility = () => {
    const { Meta } = Card;
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
                                    title: <span>교육원 소개</span>
                                },
                                {
                                    title: '교육시설'
                                }
                            ]}
                        />
                    </>
                }
            >
                <Typography variant="body1">
                    <Spin tip="Loading..." spinning={loading}>
                        <Card style={{ border: '0px' }}>
                            <Meta
                                title={
                                    <div style={{ display: 'inline-block' }}>
                                        <div style={{ borderBottom: '3px solid #666666', paddingBottom: '3px', fontSize: '23px' }}>
                                            교육시설
                                        </div>
                                    </div>
                                }
                                style={{ marginBottom: '80px', textAlign: 'center' }}
                            />
                            <Row justify="start">
                                <Col span={24}>
                                    <Card type="inner">
                                        <Title level={4}>
                                            <SnippetsOutlined style={{ fontSize: '18px', paddingRight: '5px' }} /> 교육시설 개요
                                        </Title>
                                        <div className="con_table cop_table">
                                            <table className="table">
                                                <colgroup>
                                                    <col style={{ width: '30%' }} />
                                                    <col style={{ width: '30%' }} />
                                                    <col style={{ width: '40%' }} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th>구분</th>
                                                        <th>면적</th>
                                                        <th>용도</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>CBT 교육장</td>
                                                        <td>65.7m2 (19.9평)</td>
                                                        <td>이론강의 및 CBT 판독실습 등</td>
                                                    </tr>
                                                    <tr>
                                                        <td>X-Ray 실습실</td>
                                                        <td>47m2 (14.2평)</td>
                                                        <td>대인검색 및 물품검색 실습 등</td>
                                                    </tr>
                                                    <tr>
                                                        <td>항공경비보안교육장</td>
                                                        <td>53.1m2 (16평)</td>
                                                        <td>이론강의실 및 토론, 회의 등</td>
                                                    </tr>
                                                    <tr>
                                                        <td>원장실 및 교관실</td>
                                                        <td>15.6m2 (4.7평)</td>
                                                        <td>원장실 / 강사 접견실</td>
                                                    </tr>
                                                    <tr>
                                                        <td>행정실</td>
                                                        <td>원장실 / 강사 접견실</td>
                                                        <td>교육행정 및 강사대기실</td>
                                                    </tr>
                                                    <tr>
                                                        <td>휴게실</td>
                                                        <td>38.3m2 (11.6평)</td>
                                                        <td>교육생 휴식공간</td>
                                                    </tr>
                                                    <tr>
                                                        <td>대기실</td>
                                                        <td>27m2 (8.1평)</td>
                                                        <td>교육생 대기실</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            <Divider />
                            <Row justify="start">
                                <Col span={24}>
                                    <Card type="inner">
                                        <Title level={4}>
                                            <SnippetsOutlined style={{ fontSize: '18px', paddingRight: '5px' }} /> X-Ray CBT 훈련프로그램
                                        </Title>
                                        <div className="con_table cop_table">
                                            <table className="table">
                                                <colgroup>
                                                    <col style={{ width: '30%' }} />
                                                    <col style={{ width: '30%' }} />
                                                    <col style={{ width: '40%' }} />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th>구분</th>
                                                        <th>수량</th>
                                                        <th>용도</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>X-Ray CBT 훈련 프로그램</td>
                                                        <td>30 Sets</td>
                                                        <td>보안검색요원 교육용 X-Ray CBT</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            <Divider />
                            <Row justify="start">
                                <Col span={24}>
                                    <Card type="inner">
                                        <Title level={4} style={{ marginBottom: '40px' }}>
                                            <SnippetsOutlined style={{ fontSize: '18px', paddingRight: '5px' }} /> 교육장 배치도
                                        </Title>
                                        <div className="image-container">
                                            <img
                                                className="responsive-image_one"
                                                src={GroupsImg}
                                                alt="Responsive Image"
                                                style={{ width: innerWidth - 800 }}
                                            />
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            <Divider />
                            <Row justify="start">
                                <Col span={24}>
                                    <Card type="inner">
                                        <Title level={4} style={{ marginBottom: '40px' }}>
                                            <SnippetsOutlined style={{ fontSize: '18px', paddingRight: '5px' }} /> 시설 및 교보재
                                        </Title>
                                        <Row gutter={[0, 48]}>
                                            <Col
                                                xs={{
                                                    span: 24,
                                                    offset: 1
                                                }}
                                                lg={{
                                                    span: 6,
                                                    offset: 2
                                                }}
                                            >
                                                <div
                                                    className="image-container"
                                                    style={{
                                                        borderRadius: '8px',
                                                        backgroundColor: '#efefef',
                                                        padding: '8px'
                                                    }}
                                                >
                                                    <img
                                                        className="responsive-image"
                                                        src={g1}
                                                        alt="Responsive Image"
                                                        style={{ display: 'grid' }}
                                                    />
                                                </div>
                                                <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: '500' }}>XBT 교육장</div>
                                            </Col>
                                            <Col
                                                xs={{
                                                    span: 24,
                                                    offset: 1
                                                }}
                                                lg={{
                                                    span: 6,
                                                    offset: 2
                                                }}
                                            >
                                                <div
                                                    className="image-container"
                                                    style={{
                                                        borderRadius: '8px',
                                                        backgroundColor: '#efefef',
                                                        padding: '8px'
                                                    }}
                                                >
                                                    <img
                                                        className="responsive-image"
                                                        src={g2}
                                                        alt="Responsive Image"
                                                        style={{ display: 'grid' }}
                                                    />
                                                </div>
                                                <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: '500' }}>
                                                    X-Ray 실습실
                                                </div>
                                            </Col>
                                            <Col
                                                xs={{
                                                    span: 24,
                                                    offset: 1
                                                }}
                                                lg={{
                                                    span: 6,
                                                    offset: 2
                                                }}
                                            >
                                                <div
                                                    className="image-container"
                                                    style={{
                                                        borderRadius: '8px',
                                                        backgroundColor: '#efefef',
                                                        padding: '8px'
                                                    }}
                                                >
                                                    <img
                                                        className="responsive-image"
                                                        src={g3}
                                                        alt="Responsive Image"
                                                        style={{ display: 'grid' }}
                                                    />
                                                </div>
                                                <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: '500' }}>
                                                    X-Ray 실습 장비(단방향)
                                                </div>
                                            </Col>
                                            <Col
                                                xs={{
                                                    span: 24,
                                                    offset: 1
                                                }}
                                                lg={{
                                                    span: 6,
                                                    offset: 2
                                                }}
                                            >
                                                <div
                                                    className="image-container"
                                                    style={{
                                                        borderRadius: '8px',
                                                        backgroundColor: '#efefef',
                                                        padding: '8px'
                                                    }}
                                                >
                                                    <img
                                                        className="responsive-image"
                                                        src={g4}
                                                        alt="Responsive Image"
                                                        style={{ display: 'grid' }}
                                                    />
                                                </div>
                                                <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: '500' }}>
                                                    항공경비보안교육장
                                                </div>
                                            </Col>
                                            <Col
                                                xs={{
                                                    span: 24,
                                                    offset: 1
                                                }}
                                                lg={{
                                                    span: 6,
                                                    offset: 2
                                                }}
                                            >
                                                <div
                                                    className="image-container"
                                                    style={{
                                                        borderRadius: '8px',
                                                        backgroundColor: '#efefef',
                                                        padding: '8px'
                                                    }}
                                                >
                                                    <img
                                                        className="responsive-image"
                                                        src={g5}
                                                        alt="Responsive Image"
                                                        style={{ display: 'grid' }}
                                                    />
                                                </div>
                                                <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: '500' }}>
                                                    X-Ray 실습 장비(양방향)
                                                </div>
                                            </Col>
                                            {/* <Col
                                            xs={{
                                                span: 24,
                                                offset: 1
                                            }}
                                            lg={{
                                                span: 6,
                                                offset: 2
                                            }}
                                        >
                                            <div
                                                className="image-container"
                                                style={{
                                                    borderRadius: '8px',
                                                    backgroundColor: '#efefef',
                                                    padding: '8px'
                                                }}
                                            >
                                                <img className="responsive-image" src={g6} alt="Responsive Image" />
                                            </div>
                                        </Col> */}
                                            <Col
                                                xs={{
                                                    span: 24,
                                                    offset: 1
                                                }}
                                                lg={{
                                                    span: 6,
                                                    offset: 2
                                                }}
                                            >
                                                <div
                                                    className="image-container"
                                                    style={{
                                                        borderRadius: '8px',
                                                        backgroundColor: '#efefef',
                                                        padding: '8px'
                                                    }}
                                                >
                                                    <img
                                                        className="responsive-image"
                                                        src={g7}
                                                        alt="Responsive Image"
                                                        style={{ display: 'grid' }}
                                                    />
                                                </div>
                                                <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: '500' }}>
                                                    XBT교육용 프로그램
                                                </div>
                                            </Col>
                                            <Col
                                                xs={{
                                                    span: 24,
                                                    offset: 1
                                                }}
                                                lg={{
                                                    span: 6,
                                                    offset: 2
                                                }}
                                            >
                                                <div
                                                    className="image-container"
                                                    style={{
                                                        borderRadius: '8px',
                                                        backgroundColor: '#efefef',
                                                        padding: '8px'
                                                    }}
                                                >
                                                    <img
                                                        className="responsive-image"
                                                        src={g8}
                                                        alt="Responsive Image"
                                                        style={{ display: 'grid' }}
                                                    />
                                                </div>
                                                <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: '500' }}>
                                                    위험물품 Kit Box
                                                </div>
                                            </Col>
                                            <Col
                                                xs={{
                                                    span: 24,
                                                    offset: 1
                                                }}
                                                lg={{
                                                    span: 6,
                                                    offset: 2
                                                }}
                                            >
                                                <div
                                                    className="image-container"
                                                    style={{
                                                        borderRadius: '8px',
                                                        backgroundColor: '#efefef',
                                                        padding: '8px'
                                                    }}
                                                >
                                                    <img
                                                        className="responsive-image"
                                                        src={g9}
                                                        alt="Responsive Image"
                                                        style={{ display: 'grid' }}
                                                    />
                                                </div>
                                                <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: '500' }}>
                                                    학습샘플 및 교재
                                                </div>
                                            </Col>
                                            <Col
                                                xs={{
                                                    span: 24,
                                                    offset: 1
                                                }}
                                                lg={{
                                                    span: 6,
                                                    offset: 2
                                                }}
                                            >
                                                <div
                                                    className="image-container"
                                                    style={{
                                                        borderRadius: '8px',
                                                        backgroundColor: '#efefef',
                                                        padding: '8px'
                                                    }}
                                                >
                                                    <img
                                                        className="responsive-image"
                                                        src={g10}
                                                        alt="Responsive Image"
                                                        style={{ display: 'grid' }}
                                                    />
                                                </div>
                                                <div style={{ textAlign: 'center', marginTop: '10px', fontWeight: '500' }}>
                                                    보안장비 Kit Box
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Spin>
                </Typography>
            </MainCard>
            <FloatButton.BackTop />
        </>
    );
};
