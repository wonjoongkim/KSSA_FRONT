/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Layout, Spin, Row, Col, Typography, Card, FloatButton, Breadcrumb } from 'antd';
import { FormOutlined, AimOutlined, HomeOutlined } from '@ant-design/icons';

import MainCard from 'components/MainCard';

const { Title, Paragraph, Text, Link } = Typography;
const { Sider, Content } = Layout;

export const Security = () => {
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
                                    title: '보안검색 교육과정'
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
                                            보안검색 교육과정
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
                                    ○ 항공보안검색요원은 보안검색업무를 수행하기 전에 국가민간항공보안 교육 훈련지침 제20조제1항 및 별표8에
                                    기술된 항공보안검색요원 초기교육을 이수하여야 한다.
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
                                                    <td>5일 / 40시간</td>
                                                    <td>한국보안인재개발원</td>
                                                    <td>항공보안검색요원</td>
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
                                                    <td>항공보안 개요</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 항공보안의 목적</p>
                                                            <p>○ 항공보안 사례 및 강화방안</p>
                                                        </div>
                                                    </td>
                                                    <td>40h</td>
                                                </tr>
                                                <tr>
                                                    <td>항공보안 보안관련 법규</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 국가, 공항 및 항공사 보안조직</p>
                                                            <p>○ 항공보안 위협관련 사항(항공테러대응방안)</p>
                                                            <p>○ 보안검색관련 법적근거 및 권한</p>
                                                            <p>○ 항안법, 위험물운송기술기준 등 관련법규</p>
                                                            <p>○ 관세법 및 보세구역 통제</p>
                                                        </div>
                                                    </td>
                                                    <td>40h</td>
                                                </tr>
                                                <tr>
                                                    <td>보안검색실무</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 보안검색업무 : 보안검색 목적 및 임무</p>
                                                            <p>○ 공항배치도, 검색대위치, 보호구역 설정 등</p>
                                                            <p>○ 보안검색 인적요소</p>
                                                            <p>○ 위해물품 식별요령</p>
                                                            <p>○ 대인검색장비, 검색요령 및 승객대응방법</p>
                                                            <p>○ 검색업무 예절 및 외국승객 대응방법</p>
                                                            <p>○ 금속탐지장비, 촉수검색 등 승객검색</p>
                                                            <p>○ 휴대물품검색절차 : 검색장비 및 검색요령</p>
                                                            <p>○ X-RAY 등 검색장비 운영 및 테스트</p>
                                                            <p>○ 수하물 등 검색절차 : X-RAY 및 물리적검색</p>
                                                            <p>○ 폭발물 탐지시스템의 운영 및 테스트 지식</p>
                                                            <p>○ MD/HMD/X-RAY검색, 물리적검색(개봉, 촉수)</p>
                                                            <p>○ 특수승객 검색(VIP, 장애인, 어린이 등)</p>
                                                            <p>○ 특수물품 검색(종교물품, 외교행낭 등) 비상사태시 경보, 통보절차</p>
                                                        </div>
                                                    </td>
                                                    <td>40h</td>
                                                </tr>
                                                <tr>
                                                    <td>보안검색실습(CBT)</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 시뮬레이션을 통한 X-RAY 판독훈련(CBT) X-RAY 판독능력평가 등</p>
                                                        </div>
                                                    </td>
                                                    <td>40h</td>
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
                                                            <p>○ 배점: 이론평가(30점) + CBT 실습평가(40점) + 보안검색실습(30점)</p>
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
                                    ○ 항공보안검색요원 초기교육과정을 수료한 항공보안검색요원은 연1회 국가 민간항공보안 교육훈련지침 제20조
                                    제3항 및 별표 8의3에 기술된 항공보안 검색요원 정기교육을 이수하여야 한다.
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
                                                    <td>항공보안검색요원 초기교육이수자원</td>
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
                                                    <td>보안검색</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ 관련법 및 규정 변경사항</p>
                                                            <p>○ 항공보안관련 새로운 위협</p>
                                                            <p>○ 위협상황에 대한 정보 및 보안위해물품</p>
                                                            <p>○ 보안관련 사고/사례 분석</p>
                                                            <p>○ 보안 검색절차 및 기법 반복</p>
                                                            <p>○ 미신고 항공위험물 인지 및</p>
                                                            <p>○ 승객/승무원에 관한 규정 등</p>
                                                        </div>
                                                    </td>
                                                    <td>8h</td>
                                                </tr>
                                                <tr>
                                                    <td>X-RAY 판독</td>
                                                    <td>
                                                        <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                                            <p>○ X-RAY 시뮬레이션 판독훈련</p>
                                                            <p>○ 컴퓨터 X-ray 영상을 통한 위해물품 인지</p>
                                                            <p>○ X-ray 판독 능력 숙달훈련</p>
                                                            <p>○ X-ray 판독 능력 평가</p>
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
                                                    <td>항공보안검색요원 자격인증시험 합격자</td>
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
                                                            <p>○ 항공보안장비 기본 이론</p>
                                                            <p>○ 기내반입금지물품에 대한 지식</p>
                                                            <p>○ 보안사고 사례∙분석</p>
                                                            <p>○ 보고절차</p>
                                                            <p>○ 최신 위해물품</p>
                                                            <p>○ 공항상주직원 보안 통제절차</p>
                                                            <p>○ 항공보안 인적요소</p>
                                                            <p>○ 기본적인 보안검색절차 등</p>
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
                    </Spin>
                </Typography>
            </MainCard>
            <FloatButton.BackTop />
        </>
    );
};
