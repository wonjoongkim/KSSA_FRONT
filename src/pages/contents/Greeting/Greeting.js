/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Layout, Spin, Row, Col, Typography, Card, FloatButton, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import greetings from '../../../assets/images/greetings.jpg';
import MainCard from 'components/MainCard';
// import { useContentsListMutation } from '../../../hooks/api/ContentsManagement/ContentsManagement';
import './Greeting_Style.css';

const { Title, Paragraph, Text, Link } = Typography;
const { Sider, Content } = Layout;

export const Greeting = () => {
    const { Meta } = Card;
    const [loading, setLoading] = useState(true); // 로딩 초기값
    const [isMobileView, setIsMobileView] = useState(false);
    // const [contents_Container, setContents_Container] = useState('');

    // 교육안내
    // const [ContentsListApi] = useContentsListMutation();
    // const handleContentsList = async (flag) => {
    //     const ContentsListResponse = await ContentsListApi({
    //         Contents_Type: 'Greeting'
    //     });
    //     if (ContentsListResponse?.data?.RET_CODE === '0000') {
    //         setContents_Container(ContentsListResponse?.data?.RET_DATA[0].Contents);
    //         setLoading(false);
    //     } else {
    //         setContents_Container('');
    //     }
    // };

    useEffect(() => {
        // setLoading(true);
        // handleContentsList();
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
                                    title: '원장인사'
                                }
                            ]}
                        />
                    </>
                }
            >
                <Typography variant="body1">
                    <Layout style={{ background: '#ffffff' }}>
                        <Content>
                            <Spin tip="Loading..." spinning={loading}>
                                <Card style={{ border: '0px' }}>
                                    <Meta
                                        title={
                                            <div style={{ display: 'inline-block' }}>
                                                <div style={{ borderBottom: '3px solid #666666', paddingBottom: '3px', fontSize: '23px' }}>
                                                    원장인사
                                                </div>
                                            </div>
                                        }
                                        style={{ marginBottom: '80px', textAlign: 'center' }}
                                    />
                                    {/* <div dangerouslySetInnerHTML={{ __html: contents_Container }} /> */}
                                    <Row gutter={[24, 24]}>
                                        <Col xs={{ span: 24, order: 2 }} sm={{ span: 8, order: isMobileView ? 2 : 3 }}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <img
                                                    src={greetings}
                                                    alt="한국보안인재개발원장 서일수"
                                                    xs={{ span: 24, order: 1, width: '40%' }}
                                                    sm={{ span: 8, order: isMobileView ? 2 : 4 }}
                                                    className="blur-container"
                                                />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Title style={{ fontSize: '24px' }}>한국보안인재개발원장 서일수</Title>
                                            </div>
                                        </Col>

                                        <Col xs={{ span: 24, order: 1 }} sm={{ span: 14, order: isMobileView ? 1 : 4 }}>
                                            <div>
                                                <Typography>
                                                    <Paragraph>
                                                        <Title style={{ fontSize: '25px' }}>항공보안 웹기반 CBT 서버</Title>
                                                        <Title style={{ fontSize: '19px' }}>최첨단 교육환경을 갖춘 선도적 교육기관!</Title>
                                                    </Paragraph>
                                                    <br />

                                                    <Paragraph style={{ fontSize: '17px', fontWeight: '500' }}>
                                                        <p>안녕하십니까?</p>
                                                        <p>한국보안인재개발원을 찾아주셔서 감사드립니다.</p>
                                                        <p>
                                                            항공보안 분야 전문가들로 구성된 “대한민국항공보안협회”가 웹기반 CBT 최고의
                                                            기술을 보유하고 있는 ㈜ 준 과의 협약으로 보안전문 교육기관을 설립하게
                                                            되었습니다.
                                                        </p>
                                                        <p>
                                                            최근 공항에서 빈번히 발생하고 있는 보안검색 실패는 이제는 더 이상 구형
                                                            CBT(Computer based Training)를 PC에 설치하여 교육하는 방식으로는 한계에
                                                            이르렀습니다.
                                                        </p>
                                                        <p>
                                                            한국보안인재개발원은 보안검색 교육의 혁신 필요성을 인식하고 CBT 서버 프로그램에
                                                            수십명, 수백명이 동시에 접속하여, 교육생 필요 수 만큼 CBT 프로그램으로 반복
                                                            학습할 수 있도록 하였습니다.
                                                        </p>
                                                        <p>
                                                            전 · 현직의 우수한 보안전문 강사진과 앞서가는 기술력으로 언제든지 웹기반 CBT
                                                            서버 프로그램에 교육생이 접속하여 학습할 수 있는 최상의 교육 환경과 맞춤형
                                                            교육을 실현할 수 있는 교육기관입니다.
                                                        </p>
                                                        <p>
                                                            이러한 보안전문 프로그램을 통해 학생들의 학습 효과를 극대화하고, 항공보안
                                                            검색분야에서 향후 항만 · 관세 등 보안 분야의 선도적인 역활을 수행하는 교육기관이
                                                            되겠습니다.
                                                        </p>
                                                        <p>감사합니다.</p>
                                                    </Paragraph>
                                                </Typography>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Spin>
                        </Content>
                    </Layout>
                </Typography>
            </MainCard>
            <FloatButton.BackTop />
        </>
    );
};
