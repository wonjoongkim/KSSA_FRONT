/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Tag, Button, Space, Divider, Table, Modal } from 'antd';
import './Style.css';

import { ReconciliationOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
export const Evaluation = (Props) => {
    const [practiceContainerData, setPracticeContainerData] = useState(null);
    const [xbtContainerData, setXbtContainerData] = useState(null);
    const [theoryContainerData, setTheoryContainerData] = useState(null);
    const [dangerContainerData, setDangerContainerData] = useState(null);

    const DataOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

    useEffect(() => {
        setPracticeContainerData(Props.practiceContainer);
        setXbtContainerData(Props.xbtContainer);
        setTheoryContainerData(Props.theoryContainer);
        setDangerContainerData(Props.dangerContainer);
    }, [Props]);
    const { Meta } = Card;

    return (
        <>
            <Card style={{ border: '0px' }}>
                <Meta
                    title={
                        <span>
                            <ReconciliationOutlined /> 실기 평가
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row justify="space-between" gutter={[6, 6]} className="evalu_rowstyle">
                    <Col xs={{ order: 1, span: 12 }} lg={{ order: 1, span: 8 }}>
                        <div className="evalu_colstyle">일자</div>
                    </Col>
                    <Col xs={{ order: 3, span: 12 }} lg={{ order: 2, span: 8 }}>
                        <div className="evalu_colstyle">점수</div>
                    </Col>
                    <Col xs={{ order: 5, span: 12 }} lg={{ order: 3, span: 8 }}>
                        <div className="evalu_colstyle">합격여부</div>
                    </Col>
                    <Col xs={{ order: 2, span: 12 }} lg={{ order: 4, span: 8 }}>
                        <div className="evalu_colstyle_sub">
                            {practiceContainerData?.INSERT_DATE === '' || practiceContainerData?.INSERT_DATE === undefined
                                ? '-'
                                : new Date(practiceContainerData?.INSERT_DATE).toLocaleTimeString('ko-KR', DataOptions).substring(0, 12)}
                        </div>
                    </Col>
                    <Col xs={{ order: 4, span: 12 }} lg={{ order: 5, span: 8 }}>
                        <div className="evalu_colstyle_sub">
                            {practiceContainerData?.PRACTICE_SCORE === '' || practiceContainerData?.PRACTICE_SCORE === undefined
                                ? '-'
                                : practiceContainerData?.PRACTICE_SCORE}
                        </div>
                    </Col>
                    <Col xs={{ order: 6, span: 12 }} lg={{ order: 6, span: 8 }}>
                        <div className="evalu_colstyle_sub">
                            {practiceContainerData?.PRACTICE_SCORE >= '80' ? (
                                <Tag bordered={false} icon={<CloseCircleOutlined />} color="processing" className="evalu_tagstyle">
                                    합격
                                </Tag>
                            ) : (
                                <Tag bordered={false} icon={<CloseCircleOutlined />} color="default" className="evalu_tagstyle">
                                    불합격
                                </Tag>
                            )}
                        </div>
                    </Col>
                </Row>
            </Card>
            <Divider />
            {/* XBT 평가 */}
            <Card style={{ border: '0px' }}>
                <Meta
                    title={
                        <span>
                            <ReconciliationOutlined /> XBT 평가
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row justify="space-between" gutter={[6, 6]} className="evalu_rowstyle">
                    <Col xs={{ order: 1, span: 12 }} lg={{ order: 1, span: 4 }}>
                        <div className="evalu_colstyle">일자</div>
                    </Col>
                    <Col xs={{ order: 3, span: 12 }} lg={{ order: 2, span: 4 }}>
                        <div className="evalu_colstyle">문항수</div>
                    </Col>
                    <Col xs={{ order: 5, span: 12 }} lg={{ order: 3, span: 4 }}>
                        <div className="evalu_colstyle">정답수</div>
                    </Col>
                    <Col xs={{ order: 7, span: 12 }} lg={{ order: 4, span: 4 }}>
                        <div className="evalu_colstyle">오답수</div>
                    </Col>
                    <Col xs={{ order: 9, span: 12 }} lg={{ order: 5, span: 4 }}>
                        <div className="evalu_colstyle">점수</div>
                    </Col>
                    <Col xs={{ order: 11, span: 12 }} lg={{ order: 6, span: 4 }}>
                        <div className="evalu_colstyle">합격여부</div>
                    </Col>
                    <Col xs={{ order: 2, span: 12 }} lg={{ order: 7, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {xbtContainerData?.INSERT_DATE === '' || xbtContainerData?.INSERT_DATE === undefined
                                ? '-'
                                : new Date(xbtContainerData?.INSERT_DATE).toLocaleTimeString('ko-KR', DataOptions).substring(0, 12)}
                        </div>
                    </Col>
                    <Col xs={{ order: 4, span: 12 }} lg={{ order: 8, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {xbtContainerData?.XBT_Quest_Cnt === '' || xbtContainerData?.XBT_Quest_Cnt === undefined
                                ? '-'
                                : xbtContainerData?.XBT_Quest_Cnt}
                        </div>
                    </Col>
                    <Col xs={{ order: 6, span: 12 }} lg={{ order: 9, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {xbtContainerData?.XBT_Right_Cnt === '' || xbtContainerData?.XBT_Right_Cnt === undefined
                                ? '-'
                                : xbtContainerData?.XBT_Right_Cnt}
                        </div>
                    </Col>
                    <Col xs={{ order: 8, span: 12 }} lg={{ order: 10, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {xbtContainerData?.XBT_Wrong_Cnt === '' || xbtContainerData?.XBT_Wrong_Cnt === undefined
                                ? '-'
                                : xbtContainerData?.XBT_Wrong_Cnt}
                        </div>
                    </Col>
                    <Col xs={{ order: 10, span: 12 }} lg={{ order: 11, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {xbtContainerData?.XTB_Avg === '' || xbtContainerData?.XTB_Avg === undefined ? '-' : xbtContainerData?.XTB_Avg}
                        </div>
                    </Col>
                    <Col xs={{ order: 12, span: 12 }} lg={{ order: 12, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {xbtContainerData?.XTB_Avg >= '80' ? (
                                <Tag bordered={false} icon={<CloseCircleOutlined />} color="processing" className="evalu_tagstyle">
                                    합격
                                </Tag>
                            ) : (
                                <Tag bordered={false} icon={<CloseCircleOutlined />} color="default" className="evalu_tagstyle">
                                    불합격
                                </Tag>
                            )}
                        </div>
                    </Col>
                </Row>
            </Card>
            <Divider />
            {/* 이론 평가 */}
            <Card style={{ border: '0px' }}>
                <Meta
                    title={
                        <span>
                            <ReconciliationOutlined /> 이론 평가
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row justify="space-between" gutter={[6, 6]} className="evalu_rowstyle">
                    <Col xs={{ order: 1, span: 12 }} lg={{ order: 1, span: 4 }}>
                        <div className="evalu_colstyle">일자</div>
                    </Col>
                    <Col xs={{ order: 3, span: 12 }} lg={{ order: 2, span: 4 }}>
                        <div className="evalu_colstyle">문항수</div>
                    </Col>
                    <Col xs={{ order: 5, span: 12 }} lg={{ order: 3, span: 4 }}>
                        <div className="evalu_colstyle">정답수</div>
                    </Col>
                    <Col xs={{ order: 7, span: 12 }} lg={{ order: 4, span: 4 }}>
                        <div className="evalu_colstyle">오답수</div>
                    </Col>
                    <Col xs={{ order: 9, span: 12 }} lg={{ order: 5, span: 4 }}>
                        <div className="evalu_colstyle">점수</div>
                    </Col>
                    <Col xs={{ order: 11, span: 12 }} lg={{ order: 6, span: 4 }}>
                        <div className="evalu_colstyle">합격여부</div>
                    </Col>
                    <Col xs={{ order: 2, span: 12 }} lg={{ order: 7, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {theoryContainerData?.INSERT_DATE === '' || theoryContainerData?.INSERT_DATE === undefined
                                ? '-'
                                : new Date(theoryContainerData?.INSERT_DATE).toLocaleTimeString('ko-KR', DataOptions).substring(0, 12)}
                        </div>
                    </Col>
                    <Col xs={{ order: 4, span: 12 }} lg={{ order: 8, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {theoryContainerData?.THEORY_Quest_Cnt === '' || theoryContainerData?.THEORY_Quest_Cnt === undefined
                                ? '-'
                                : theoryContainerData?.THEORY_Quest_Cnt}
                        </div>
                    </Col>
                    <Col xs={{ order: 6, span: 12 }} lg={{ order: 9, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {theoryContainerData?.THEORY_Right_Cnt === '' || theoryContainerData?.THEORY_Right_Cnt === undefined
                                ? '-'
                                : theoryContainerData?.THEORY_Right_Cnt}
                        </div>
                    </Col>
                    <Col xs={{ order: 8, span: 12 }} lg={{ order: 10, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {theoryContainerData?.THEORY_Wrong_Cnt === '' || theoryContainerData?.THEORY_Wrong_Cnt === undefined
                                ? '-'
                                : theoryContainerData?.THEORY_Wrong_Cnt}
                        </div>
                    </Col>
                    <Col xs={{ order: 10, span: 12 }} lg={{ order: 11, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {theoryContainerData?.THEORY_Avg === '' || theoryContainerData?.THEORY_Avg === undefined
                                ? '-'
                                : theoryContainerData?.THEORY_Avg}
                        </div>
                    </Col>
                    <Col xs={{ order: 12, span: 12 }} lg={{ order: 12, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {theoryContainerData?.THEORY_Avg >= '80' ? (
                                <Tag bordered={false} icon={<CloseCircleOutlined />} color="processing" className="evalu_tagstyle">
                                    합격
                                </Tag>
                            ) : (
                                <Tag bordered={false} icon={<CloseCircleOutlined />} color="default" className="evalu_tagstyle">
                                    불합격
                                </Tag>
                            )}
                        </div>
                    </Col>
                </Row>
            </Card>
            <Divider />
            {/* 항공위험물 평가 */}
            <Card style={{ border: '0px' }}>
                <Meta
                    title={
                        <span>
                            <ReconciliationOutlined /> 항공위험물 평가
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row justify="space-between" gutter={[6, 6]} className="evalu_rowstyle">
                    <Col xs={{ order: 1, span: 12 }} lg={{ order: 1, span: 4 }}>
                        <div className="evalu_colstyle">일자</div>
                    </Col>
                    <Col xs={{ order: 3, span: 12 }} lg={{ order: 2, span: 4 }}>
                        <div className="evalu_colstyle">문항수</div>
                    </Col>
                    <Col xs={{ order: 5, span: 12 }} lg={{ order: 3, span: 4 }}>
                        <div className="evalu_colstyle">정답수</div>
                    </Col>
                    <Col xs={{ order: 7, span: 12 }} lg={{ order: 4, span: 4 }}>
                        <div className="evalu_colstyle">오답수</div>
                    </Col>
                    <Col xs={{ order: 9, span: 12 }} lg={{ order: 5, span: 4 }}>
                        <div className="evalu_colstyle">점수</div>
                    </Col>
                    <Col xs={{ order: 11, span: 12 }} lg={{ order: 6, span: 4 }}>
                        <div className="evalu_colstyle">합격여부</div>
                    </Col>
                    <Col xs={{ order: 2, span: 12 }} lg={{ order: 7, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {dangerContainerData?.INSERT_DATE === '' || dangerContainerData?.INSERT_DATE === undefined
                                ? '-'
                                : new Date(dangerContainerData?.INSERT_DATE).toLocaleTimeString('ko-KR', DataOptions).substring(0, 12)}
                        </div>
                    </Col>
                    <Col xs={{ order: 4, span: 12 }} lg={{ order: 8, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {dangerContainerData?.DANGER_Quest_Cnt === '' || dangerContainerData?.DANGER_Quest_Cnt === undefined
                                ? '-'
                                : dangerContainerData?.DANGER_Quest_Cnt}
                        </div>
                    </Col>
                    <Col xs={{ order: 6, span: 12 }} lg={{ order: 9, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {dangerContainerData?.DANGER_Right_Cnt === '' || dangerContainerData?.DANGER_Right_Cnt === undefined
                                ? '-'
                                : dangerContainerData?.DANGER_Right_Cnt}
                        </div>
                    </Col>
                    <Col xs={{ order: 8, span: 12 }} lg={{ order: 10, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {dangerContainerData?.DANGER_Wrong_Cnt === '' || dangerContainerData?.DANGER_Wrong_Cnt === undefined
                                ? '-'
                                : dangerContainerData?.DANGER_Wrong_Cnt}
                        </div>
                    </Col>
                    <Col xs={{ order: 10, span: 12 }} lg={{ order: 11, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {dangerContainerData?.DANGER_Avg === '' || dangerContainerData?.DANGER_Avg === undefined
                                ? '-'
                                : dangerContainerData?.DANGER_Avg}
                        </div>
                    </Col>
                    <Col xs={{ order: 12, span: 12 }} lg={{ order: 12, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            {dangerContainerData?.DANGER_Avg >= '80' ? (
                                <Tag bordered={false} icon={<CloseCircleOutlined />} color="processing" className="evalu_tagstyle">
                                    합격
                                </Tag>
                            ) : (
                                <Tag bordered={false} icon={<CloseCircleOutlined />} color="default" className="evalu_tagstyle">
                                    불합격
                                </Tag>
                            )}
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    );
};
