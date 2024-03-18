/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Layout, Spin, Row, Col, Typography, Card, FloatButton, Breadcrumb } from 'antd';
import { FormOutlined, AimOutlined, HomeOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';

const { Title, Paragraph, Text, Link } = Typography;
const { Sider, Content } = Layout;

export const Airline = () => {
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
                                    title: '항공경비 교육과정'
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
                                            항공경비 교육과정
                                        </div>
                                    </div>
                                }
                                style={{ marginBottom: '50px', textAlign: 'center' }}
                            />
                        </Card>

                        {/* 초기 교육과정 */}
                        <Card style={{ border: '0px' }}>
                            <Row style={{ marginTop: '30px' }}>
                                <Col span={24} style={{ fontSize: '18px', fontWeight: '700' }}>
                                    <FormOutlined style={{ fontSize: '18px' }} /> 초기 교육과정
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 교육목적
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row
                                style={{
                                    borderTop: '2px solid #e0e0e0',
                                    borderBottom: '2px solid #e0e0e0',
                                    padding: '35px 10px',
                                    backgroundColor: '#f9f7f7'
                                }}
                            >
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    ○ 공항운영자등은 항공경비요원에 대하여 국가민간항공보안 교육훈련지침 제21조 제1항 및 별표9의 내용을
                                    이수하여야 한다.
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 교육개요
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div className="con_table cop_table">
                                        <table className="table">
                                            <colgroup>
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '25%' }} />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>교육기간</th>
                                                    <th>교육기관</th>
                                                    <th>교육대상자</th>
                                                    <th>교육인원</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>4일 / 30시간</td>
                                                    <td>한국보안인재개발원</td>
                                                    <td>항공경비요원</td>
                                                    <td>1회 30명</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 교육프로그램
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div className="con_table cop_table">
                                        <table className="table">
                                            <colgroup>
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '50%' }} />
                                                <col style={{ width: '25%' }} />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>교과목</th>
                                                    <th>주요교육내용</th>
                                                    <th>교육시간</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>항공보안 관련 법률</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 항공보안의 목적</p>
                                                            <p>○ 항공보안사례 및 항공보안 강화방안</p>
                                                            <p>○ 공항/항공사 보안시행계획 및 절차</p>
                                                            <p>○ 공항보안현황(공항배치)</p>
                                                            <p>○ 보호구역 설정 및 출입통제시스템/출입증</p>
                                                            <p>○ 관계법령 및 항공경비요원의 권한</p>
                                                            <p>○ 관세법 및 보세구역 통제</p>
                                                            <p>○ 국가, 공항 및 항공사 보안조직</p>
                                                            <p>○ 항공보안 위협관련 현황, 불법 및 테러대응</p>
                                                            <p>○ 위법자들의 보안대책 및 절차 회피방법</p>
                                                        </div>
                                                    </td>
                                                    <td>12h</td>
                                                </tr>
                                                <tr>
                                                    <td>항공경비실무</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 공항(여객터미널)출입통제 절차 및 방법</p>
                                                            <p>○ 건물수색 및 순찰요령, 수상한자 발견/체포</p>
                                                            <p>○ 공항(여객터미널) 경비보안절차, 순찰 및 상황별조치</p>
                                                            <p>○ 공항(터미널)내 정상 및 비상시 통신/보고 방법</p>
                                                            <p>○ 공항(외곽,화물터미널)출입통제 절차 및 방법</p>
                                                            <p>○ 공항(외곽,화물터미널) 경비보안절차/상황별조치</p>
                                                            <p>○ 초소근무/차량검색/검문검색/순찰, 통신/보고방법</p>
                                                            <p>○ 항공기경비 및 통제, 수상한자 발견/체포</p>
                                                            <p>○ 공항보안현황(검색대 배치 등)</p>
                                                            <p>○ 보안장비 사용법 및 인원/물품 검색</p>
                                                            <p>○ MD, HMD, 개봉검색, 수검색 등 보안검색방법</p>
                                                        </div>
                                                    </td>
                                                    <td>12h</td>
                                                </tr>
                                                <tr>
                                                    <td>우발계획 및 인적요소</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 우발계획에 의한 대처방법, 사고관리/보고/기록</p>
                                                            <p>○ 군중통제 기법, 분쟁해결 기법, 인적요소</p>
                                                            <p>○ 항공경비 인적요소</p>
                                                            <p>○ 폭발물 및 위해물품 인지 및</p>
                                                            <p>○ 수상한 물건 발견시 조치</p>
                                                            <p>○ 평가</p>
                                                        </div>
                                                    </td>
                                                    <td>6h</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 평가 및 수료기준
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div className="con_table cop_table">
                                        <table className="table">
                                            <colgroup>
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '75%' }} />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>교육시간</th>
                                                    <th>평가 및 수료 기준</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>4일 / 30시간</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 총 100점 만점의 80점 이상 득점시 수료</p>
                                                            <p>○ 배점: 이론평가(100점)</p>
                                                            <p>○ 총 교육시간의 90%이상 출석자</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        {/* 정기 교육과정 */}
                        <Card style={{ border: '0px' }}>
                            <Row style={{ marginTop: '80px' }}>
                                <Col span={24} style={{ fontSize: '18px', fontWeight: '700' }}>
                                    <FormOutlined style={{ fontSize: '18px' }} /> 정기 교육과정
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 교육목적
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row
                                style={{
                                    borderTop: '2px solid #e0e0e0',
                                    borderBottom: '2px solid #e0e0e0',
                                    padding: '35px 10px',
                                    backgroundColor: '#f9f7f7'
                                }}
                            >
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    ○ 항공경비요원 초기교육을 수료한 항공경비요원이 국가민간항공보안 교육훈련지침 제21조제2항 및 별표 9의3에
                                    기술된 항공경비요원 정기교육을 연1회 8시간이상 이수하여야 한다.
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 교육개요
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div className="con_table cop_table">
                                        <table className="table">
                                            <colgroup>
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '25%' }} />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>교육기간</th>
                                                    <th>교육기관</th>
                                                    <th>교육대상자</th>
                                                    <th>교육인원</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1일 / 8시간</td>
                                                    <td>한국보안인재개발원</td>
                                                    <td>항공경비요원 초기교육이수자원</td>
                                                    <td>1회 30명</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 교육프로그램
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div className="con_table cop_table">
                                        <table className="table">
                                            <colgroup>
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '50%' }} />
                                                <col style={{ width: '25%' }} />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>교과목</th>
                                                    <th>주요교육내용</th>
                                                    <th>교육시간</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>항공보안 관련 법률</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 항공보안관련 법령내용</p>
                                                            <p>○ 보안절차관련 변경사항</p>
                                                            <p>○ 항공테러유형 및 새로 입수된 위험 정보 전파</p>
                                                            <p>○ 보안사고 사례∙분석</p>
                                                            <p>○ 보고절차</p>
                                                        </div>
                                                    </td>
                                                    <td>8h</td>
                                                </tr>
                                                <tr>
                                                    <td>항공경비 실무</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 최신 위해물품</p>
                                                            <p>○ 변경된 보안 통제절차 등</p>
                                                            <p>○ 항공보안 인적요소</p>
                                                            <p>○ 기본 검색절차 및 기법 반복</p>
                                                        </div>
                                                    </td>
                                                    <td>8h</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 평가 및 수료기준
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div className="con_table cop_table">
                                        <table className="table">
                                            <colgroup>
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '75%' }} />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>교육시간</th>
                                                    <th>평가 및 수료 기준</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5일 / 40시간</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 총 100점 만점의 80점 이상 득점시 수료</p>
                                                            <p>○ 배점: 이론평가(50점) + CBT 실습평가(50점)</p>
                                                            <p>○ 총 교육시간의 90%이상 출석자</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        {/* 인증평가 */}
                        <Card style={{ border: '0px' }}>
                            <Row style={{ marginTop: '80px' }}>
                                <Col span={24} style={{ fontSize: '18px', fontWeight: '700' }}>
                                    <FormOutlined style={{ fontSize: '18px' }} /> 인증평가
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 교육목적
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row
                                style={{
                                    borderTop: '2px solid #e0e0e0',
                                    borderBottom: '2px solid #e0e0e0',
                                    padding: '35px 10px',
                                    backgroundColor: '#f9f7f7'
                                }}
                            >
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    ○ 「국가항공보안계획」 제10.2호에 따라 보안검색요원 자격인증시험에 합격한 자에 대하여 원장은 인증서를
                                    발급한다
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 교육개요
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="con_table cop_table">
                                        <table className="table">
                                            <colgroup>
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '25%' }} />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>교육기간</th>
                                                    <th>교육기관</th>
                                                    <th>교육대상자</th>
                                                    <th>교육인원</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1일 / 4시간</td>
                                                    <td>한국보안인재개발원</td>
                                                    <td>항공경비요원 자격인증시험 합격자</td>
                                                    <td>1회 30명</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 인증평가 주요내용
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div className="con_table cop_table">
                                        <table className="table">
                                            <colgroup>
                                                <col style={{ width: '75%' }} />
                                                <col style={{ width: '25%' }} />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>인증평가 주요내용</th>
                                                    <th>교육시간</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 현장의 직무 내용을 중심으로 평가 실시</p>
                                                            <p>○ 보호구역 지정 및 출입 통제</p>
                                                            <p>○ 항공경비요원의 임무</p>
                                                            <p>○ 불법방해행위에 대한 이해 수준</p>
                                                            <p>○ 출입통제 출입증 확인 절차 및 내용</p>
                                                            <p>○ 상주직원 보안검색 수준</p>
                                                            <p>○ 검문소 판독업무 및 절차 등</p>
                                                            <p>○ 국가항공보안우발계획 대처요령</p>
                                                        </div>
                                                    </td>
                                                    <td>4h</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        {/* <Card style={{ border: '0px', margin: '0 20px' }}>
                            <Meta
                                title={
                                    <>
                                        <AimOutlined /> 평가 및 수료기준
                                    </>
                                }
                                style={{ marginBottom: '10px' }}
                            />
                            <Row>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <div className="con_table cop_table">
                                        <table className="table">
                                            <colgroup>
                                                <col style={{ width: '25%' }} />
                                                <col style={{ width: '75%' }} />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>교육시간</th>
                                                    <th>평가 및 수료 기준</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>5일 / 40시간</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 총 100점 만점의 80점 이상 득점시 수료</p>
                                                            <p>○ 배점: 이론평가(50점) + CBT 실습평가(50점)</p>
                                                            <p>○ 총 교육시간의 90%이상 출석자</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card> */}
                    </Spin>
                </Typography>
            </MainCard>
            <FloatButton.BackTop />
        </>
    );
};
