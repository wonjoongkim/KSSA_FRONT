/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Layout, Spin, Row, Col, Typography, Card, FloatButton, Tag, Breadcrumb } from 'antd';
import { FormOutlined, HomeOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';

const { Title, Paragraph, Text, Link } = Typography;
const { Sider, Content } = Layout;

export const Reason = () => {
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
                                    title: '관련근거'
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
                                            관련근거
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
                                        <FormOutlined /> 근로자직업능력개발법 제24조(직업능력개발훈련과정의 인정)
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
                                            제20조 · 제22조 및 제23조의 규정에 따라 직업능력개발훈련에 대하여 지원 또는 융자를 받고자 하는
                                            자(직업능력개발훈련을 위탁받아 실시하는 자를 포함한다)와 제21조 제1항 제1호에 따라 근로자가
                                            훈련비용을 지원 또는 융자받을 수 있는 직업능력개발훈련을 실시하려는 자는 그
                                            직업능력개발훈련과정에 대하여 고용노동부장관으로부터 인정을 받아야 한다.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '20px' }}>
                            <Meta
                                title={
                                    <span style={{ fontSize: '18px' }}>
                                        <FormOutlined /> 고용보험법 시행령 제41조(사업주에 대한 직업능력개발 훈련비용의 지원) 및 동법
                                        시행규칙 제60조 제2항
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
                                            ○ 「근로자직업능력 개발법」제24조에 따라 훈련과정의 인정을 받은 훈련과정으로서 다음 각 호의 어느
                                            하나에 해당하는 훈련을 말한다.
                                        </p>
                                        <p style={{ paddingLeft: '25px' }}>
                                            <span style={{ fontWeight: '600' }}>1</span>. 피보험자를 대상으로 실시하는 직업능력개발 훈련
                                        </p>
                                        <p style={{ paddingLeft: '25px' }}>
                                            <span style={{ fontWeight: '600' }}>2</span>. 피보험자가 아닌 자로서 해당 사업주에게 고용된 자를
                                            대상으로 실시하는 직업능력개발 훈련
                                        </p>
                                        <p style={{ paddingLeft: '25px' }}>
                                            <span style={{ fontWeight: '600' }}>3</span>. 해당 사업이나 그 사업과 관련되는 사업에서
                                            고용하려는 자를 대상으로 실시하는 직업능력개발 훈련
                                        </p>
                                        <p style={{ paddingLeft: '25px' }}>
                                            <span style={{ fontWeight: '600' }}>4</span>. 직업안정기관에 구직등록한 자를 대상으로 실시하는
                                            직업능력개발 훈련
                                        </p>
                                        <p style={{ paddingLeft: '25px' }}>
                                            <span style={{ fontWeight: '600' }}>5</span>. 해당 사업에 고용된 피보험자[법 제113조에 따른
                                            자영업자(이하 "자영업자"라 한다)는 제외한다]에게 다음 각 목의 어느 하나의 요건을 갖춘
                                            유급휴가[「근로기준법」 제60조의 연차 유급휴가가 아닌 경우로서 휴가기간 중 「근로기준법
                                            시행령」제6조에 따른 통상임금(이하 "통상임금"이라 한다)에 해당하는 금액 이상의 임금을 지급한
                                            경우를 말한다]를 주어 실시하는 직업능력개발 훈련
                                        </p>
                                        <Card style={{ border: '0px', margin: '0px', backgroundColor: '#f9f7f7' }}>
                                            <p>
                                                <Row>
                                                    <Col xs={4} lg={1} style={{ display: 'flex', alignItems: 'center' }}>
                                                        <Tag color="default" style={{ fontWeight: '600' }}>
                                                            가
                                                        </Tag>
                                                    </Col>
                                                    <Col xs={20} lg={23}>
                                                        우선지원 대상기업의 사업주나 상시 사용하는 근로자 수가 150명 미만인 사업주가 해당
                                                        근로자를 대상으로 계속하여 7일 이상의 유급휴가를 주어 30시간 이상의 훈련을 실시할 것
                                                    </Col>
                                                </Row>
                                            </p>
                                            <p>
                                                <Row>
                                                    <Col xs={4} lg={1} style={{ display: 'flex', alignItems: 'center' }}>
                                                        <Tag color="default" style={{ fontWeight: '600' }}>
                                                            나
                                                        </Tag>
                                                    </Col>
                                                    <Col xs={20} lg={23}>
                                                        가목에 해당하지 아니하는 사업주가 1년 이상 재직하고 있는 근로자를 대상으로 30일
                                                        이상의 유급 휴가를 주어 120시간 이상의 훈련을 실시할 것
                                                    </Col>
                                                </Row>
                                            </p>
                                            <p>
                                                <Row>
                                                    <Col xs={4} lg={1} style={{ display: 'flex', alignItems: 'center' }}>
                                                        <Tag color="default" style={{ fontWeight: '600' }}>
                                                            다
                                                        </Tag>
                                                    </Col>
                                                    <Col xs={20} lg={23}>
                                                        사업주가 기능ㆍ기술을 장려하기 위하여 근로자 중 생산직 또는 관련 직에 종사하는
                                                        근로자로서 고용노동부장관이 고시하는 자를 대상으로 유급휴가를 주어 20시간 이상의
                                                        훈련을 실시할 것
                                                    </Col>
                                                </Row>
                                            </p>
                                        </Card>
                                        <p style={{ paddingLeft: '25px' }}>
                                            ※ 고용노동부지정 직업훈련개발과정에 대한 보다 자세한 사항은 http://www.hrd.go.kr을 참조하시기
                                            바랍니다.
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
