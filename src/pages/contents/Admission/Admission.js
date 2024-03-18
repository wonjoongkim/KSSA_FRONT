/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Layout, Spin, Row, Col, Typography, Card, FloatButton, Breadcrumb } from 'antd';
import { FormOutlined, HomeOutlined } from '@ant-design/icons';

import MainCard from 'components/MainCard';

const { Title, Paragraph, Text, Link } = Typography;
const { Sider, Content } = Layout;

export const Admission = () => {
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
                                    title: '입교절차'
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
                                            입교절차
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
                                        <FormOutlined /> 입교신청
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
                                            ○ 인재원에 입교하고자 하는 사람 관련기관 업체 등은 다음의 각 호의 서류를 교육 시작 7일 전까지
                                            제출
                                        </p>
                                        <p style={{ paddingLeft: '25px' }}>① 입교 신청서</p>
                                        <p style={{ paddingLeft: '25px' }}>② 기타 인재개발원에서 요구하는 자료</p>
                                        <p>○ 입교신청을 한 사람은 교육비를 입교 전까지 인재개발원 지정계좌에 납부</p>
                                        <p>
                                            ○ 교육입교 대상자 선발은 접수순서에 따라 정하고 그 결과를 신청기관에 전화 또는 팩스 등으로 통보
                                        </p>
                                        <p>○ 신청 차수에 교육대상자로 선정되지 않은 인원에 대해서는 차기 교육대상자에 우선 선발</p>
                                        <p>○ 입교신청 문의 이메일 : kssa@kssa.re.kr</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '20px' }}>
                            <Meta
                                title={
                                    <span style={{ fontSize: '18px' }}>
                                        <FormOutlined /> 퇴교처분
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
                                        <p>○ 타인으로 하여금 대리 출석, 출석부 대리서명, 대리시험 등 부정행위를 한 사람</p>
                                        <p>○ 수업에 극히 태만한 사람</p>
                                        <p>
                                            ○ 기타 교육운영규정 및 제반 수칙을 위반하거나 교육에 관한 정당한 지시에 따르지 아니하는 사람 등
                                        </p>
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
