/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Layout, Spin, Row, Col, Typography, Card, FloatButton, Breadcrumb } from 'antd';
import { FormOutlined, HomeOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';

const { Title, Paragraph, Text, Link } = Typography;
const { Sider, Content } = Layout;

export const Application = () => {
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
                                    title: '직업훈련비지원'
                                },
                                {
                                    title: '신청방법'
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
                                            신청방법
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
                                        <FormOutlined /> 교육비용지원 신청서류
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
                                        <p>○ 사업주 직업능력개발훈련비용 지원신청서 (별지 제58호서식, 또는 별지 제58호의2서식)</p>
                                        <p>○ 훈련비용 정산내역서 및 증빙서류 (위탁훈련의 경우)</p>
                                        <p>○ 직업능력개발훈련 수료자명부</p>
                                        <p>○ 임금대장사본 (유급휴가훈련에 한함)</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '20px' }}>
                            <Meta
                                title={
                                    <span style={{ fontSize: '18px' }}>
                                        <FormOutlined /> 교육비용지원 신청절차
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
                                        <p>
                                            ○ 「인재개발원은 교육과정 개시 7일전까지 고용노동부(중부지방고용노동청)에 교육훈련과정(교육일정
                                            및 대상자 포함) 지정승인 신청의뢰
                                        </p>
                                        <p>○ 고용노동부의 교육훈련과정 지정승인 (접수 후 7일 이내)</p>
                                        <p>
                                            ○ 사업주는 훈련이 끝난 후나 매 3개월간의 훈련 실시 후 30일 이내에 "사업주 직업능력개발 훈련비용
                                            지원 신청서"를 작성하여 고용노동부(중부지방고용노동청) 신청 의뢰 가능
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '20px' }}>
                            <Meta
                                title={
                                    <span style={{ fontSize: '18px' }}>
                                        <FormOutlined /> 교육비용지원 유의사항
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
                                        <p>○ 고용보험 적용근로자에 한하여 훈련비용지원</p>
                                        <p>○ 업체별로 고용노동부(관할 지청)에 신청</p>
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
