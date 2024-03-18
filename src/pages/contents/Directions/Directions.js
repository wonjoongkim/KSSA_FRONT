/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Layout, Spin, Row, Col, Typography, Card, FloatButton, Breadcrumb } from 'antd';
import MainCard from 'components/MainCard';
import { KakaoMap } from './kakamap';
import { EnvironmentFilled, MailOutlined, PrinterOutlined, PhoneOutlined, LinkOutlined, HomeOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;
const { Sider, Content } = Layout;

export const Directions = () => {
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
                                    title: '교육원 소개'
                                },
                                {
                                    title: '오시는 길'
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
                                            오시는 길
                                        </div>
                                    </div>
                                }
                                style={{ marginBottom: '80px', textAlign: 'center' }}
                            />
                            <Row style={{ marginTop: '30px' }}>
                                <Col
                                    xs={{
                                        span: 24,
                                        offset: 1
                                    }}
                                >
                                    {/* <Col xs={{ span: 12, order: 2 }} sm={{ span: 8, order: isMobileView ? 1 : 3 }}> */}

                                    <Col span={24} style={{ fontSize: '18px', fontWeight: '600' }}>
                                        <EnvironmentFilled style={{ paddingRight: '5px' }} />
                                        서울시 강서구 방화대로 21길 72 범천빌딩 4층
                                    </Col>
                                </Col>
                            </Row>

                            <Row justify="start" style={{ marginTop: '30px' }}>
                                <Col xs={{ span: 11, offset: 1, mb: 1 }} lg={{ span: 4, offset: 1 }}>
                                    <Card
                                        type="inner"
                                        size="small"
                                        title={
                                            <div>
                                                <PhoneOutlined rotate={180} style={{ fontSize: '15px', paddingRight: '5px' }} />
                                                <span style={{ fontSize: '15px' }}>Tel</span>
                                            </div>
                                        }
                                        style={{
                                            marginTop: 16,
                                            fontSize: '15px'
                                        }}
                                    >
                                        031-8270-9590
                                    </Card>
                                </Col>
                                <Col xs={{ span: 11, offset: 1, mb: 1 }} lg={{ span: 4, offset: 2 }}>
                                    <Card
                                        type="inner"
                                        size="small"
                                        title={
                                            <div>
                                                <PrinterOutlined style={{ fontSize: '15px', paddingRight: '5px' }} />
                                                <span style={{ fontSize: '15px' }}>Fax</span>
                                            </div>
                                        }
                                        style={{
                                            marginTop: 16,
                                            fontSize: '15px'
                                        }}
                                    >
                                        031-8270-9591
                                    </Card>
                                </Col>
                                <Col xs={{ span: 11, offset: 1, mb: 1 }} lg={{ span: 4, offset: 2 }}>
                                    <Card
                                        type="inner"
                                        size="small"
                                        title={
                                            <div>
                                                <LinkOutlined style={{ fontSize: '15px', paddingRight: '5px' }} />
                                                <span style={{ fontSize: '15px' }}>URL</span>
                                            </div>
                                        }
                                        style={{
                                            marginTop: 16,
                                            fontSize: '15px'
                                        }}
                                    >
                                        http://www.kssa.re.kr
                                    </Card>
                                </Col>
                                <Col xs={{ span: 11, offset: 1, mb: 1 }} lg={{ span: 4, offset: 2 }}>
                                    <Card
                                        type="inner"
                                        size="small"
                                        title={
                                            <div>
                                                <MailOutlined style={{ fontSize: '15px', paddingRight: '5px' }} />
                                                <span style={{ fontSize: '15px' }}>이메일문의</span>
                                            </div>
                                        }
                                        style={{
                                            marginTop: 16,
                                            fontSize: '15px'
                                        }}
                                    >
                                        kssa@kssa.re.kr
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                                <Col
                                    xs={{
                                        span: 22,
                                        offset: 0
                                    }}
                                >
                                    <KakaoMap />
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
