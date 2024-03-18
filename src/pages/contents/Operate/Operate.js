/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Layout, Spin, Row, Col, Typography, Card, FloatButton, Breadcrumb } from 'antd';
import { FormOutlined, HomeOutlined } from '@ant-design/icons';

import MainCard from 'components/MainCard';

const { Title, Paragraph, Text, Link } = Typography;
const { Sider, Content } = Layout;

export const Operate = () => {
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
                                    title: '교육과정'
                                },
                                {
                                    title: '정원 및 운영계획'
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
                                        <div
                                            style={{
                                                borderBottom: '3px solid #555555',
                                                color: '#000000',
                                                paddingBottom: '3px',
                                                fontSize: '23px'
                                            }}
                                        >
                                            정원 및 운영계획
                                        </div>
                                    </div>
                                }
                                style={{ marginBottom: '50px', textAlign: 'center' }}
                            />
                        </Card>

                        <Card style={{ border: '0px', margin: '20px' }}>
                            <Meta
                                title={
                                    <span style={{ fontSize: '18px' }}>
                                        <FormOutlined /> 교육생 정원
                                    </span>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row
                                style={{
                                    borderTop: '2px solid #e0e0e0',
                                    borderBottom: '2px solid #e0e0e0',
                                    padding: '10px',
                                    backgroundColor: '#f9f7f7'
                                }}
                            >
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                        <p>○ 항공보안검색요원 초기교육과정 : 30명 이내</p>
                                        <p>○ 항공보안검색요원 정기교육과정 : 30명 이내</p>
                                        <p>○ 항공보안검색요원 인증평가 : 30명 이내</p>
                                        <p>○ 항공경비요원 초기교육과정 : 30명 이내</p>
                                        <p>○ 항공경비요원 정기교육과정 : 30명 이내</p>
                                        <p>○ 항공경비요원 인증평가 : 30명 이내</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '20px' }}>
                            <Meta
                                title={
                                    <span style={{ fontSize: '18px' }}>
                                        <FormOutlined /> 교육과정 개설 기준
                                    </span>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row
                                style={{
                                    borderTop: '2px solid #e0e0e0',
                                    borderBottom: '2px solid #e0e0e0',
                                    padding: '10px',
                                    backgroundColor: '#f9f7f7'
                                }}
                            >
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                        <p>○ 최소 7일 전 입교신청서 및 인재개발원 요구 서류 제출</p>
                                        <p>○ 업체/기관 위탁의 경우 최소 3주 전 교육개설의뢰 상담 후 공문 접수</p>
                                        <p>○ 한국보안인재개발원 교육계획 및 교육 인원에 의거 교육개설 확정</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '20px' }}>
                            <Meta
                                title={
                                    <span style={{ fontSize: '18px' }}>
                                        <FormOutlined /> 입교기준
                                    </span>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row
                                style={{
                                    borderTop: '2px solid #e0e0e0',
                                    borderBottom: '2px solid #e0e0e0',
                                    padding: '10px',
                                    backgroundColor: '#f9f7f7'
                                }}
                            >
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                        <p>○ 관계 법령에 의한 자격기준에 부합하는 자</p>
                                        <p>○ 보안검색업체 또는 위탁업체 소속직원인 자</p>
                                        <p>○ 시력, 색맹, 청력 등의 장애가 없는 자</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '20px' }}>
                            <Meta
                                title={
                                    <span style={{ fontSize: '18px' }}>
                                        <FormOutlined /> 입교대상
                                    </span>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row
                                style={{
                                    borderTop: '2px solid #e0e0e0',
                                    borderBottom: '2px solid #e0e0e0',
                                    padding: '10px',
                                    backgroundColor: '#f9f7f7'
                                }}
                            >
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                        <p>○ 공항운영자 또는 항공운송사업자가 지정 또는 지정 예정인 보안감독자</p>
                                        <p>○ 특수경비업체 소속으로 보안업무를 수행하는 사람 또는 예정된 사람</p>
                                        <p>○ 보안장비 유지보수 업무를 수행하는 사람 또는 예정된 사람</p>
                                        <p>○ 기관 업체에서 보안업무에 종사하는 사람</p>
                                        <p>○ 기타 인재개발원에서 입교가 가능하다고 인정하는 사람</p>
                                    </div>
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
