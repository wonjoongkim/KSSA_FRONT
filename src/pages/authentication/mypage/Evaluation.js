/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, Row, Col, Tag, Button, Space, Divider, Table, Modal } from 'antd';
import './Style.css';

import { ReconciliationOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

export const Evaluation = () => {
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
                        <div className="evalu_colstyle_sub">2023-12-21</div>
                    </Col>
                    <Col xs={{ order: 4, span: 12 }} lg={{ order: 8, span: 4 }}>
                        <div className="evalu_colstyle_sub">5</div>
                    </Col>
                    <Col xs={{ order: 6, span: 12 }} lg={{ order: 9, span: 4 }}>
                        <div className="evalu_colstyle_sub">33</div>
                    </Col>
                    <Col xs={{ order: 8, span: 12 }} lg={{ order: 10, span: 4 }}>
                        <div className="evalu_colstyle_sub">44</div>
                    </Col>
                    <Col xs={{ order: 10, span: 12 }} lg={{ order: 11, span: 4 }}>
                        <div className="evalu_colstyle_sub">55</div>
                    </Col>
                    <Col xs={{ order: 12, span: 12 }} lg={{ order: 12, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            <Tag bordered={false} icon={<CheckCircleOutlined />} color="processing" className="evalu_tagstyle">
                                합격
                            </Tag>
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
                        <div className="evalu_colstyle_sub">2023-12-21</div>
                    </Col>
                    <Col xs={{ order: 4, span: 12 }} lg={{ order: 8, span: 4 }}>
                        <div className="evalu_colstyle_sub">5</div>
                    </Col>
                    <Col xs={{ order: 6, span: 12 }} lg={{ order: 9, span: 4 }}>
                        <div className="evalu_colstyle_sub">33</div>
                    </Col>
                    <Col xs={{ order: 8, span: 12 }} lg={{ order: 10, span: 4 }}>
                        <div className="evalu_colstyle_sub">44</div>
                    </Col>
                    <Col xs={{ order: 10, span: 12 }} lg={{ order: 11, span: 4 }}>
                        <div className="evalu_colstyle_sub">55</div>
                    </Col>
                    <Col xs={{ order: 12, span: 12 }} lg={{ order: 12, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            <Tag bordered={false} icon={<CloseCircleOutlined />} color="default" className="evalu_tagstyle">
                                불합격
                            </Tag>
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
                        <div className="evalu_colstyle_sub">2023-12-21</div>
                    </Col>
                    <Col xs={{ order: 4, span: 12 }} lg={{ order: 8, span: 4 }}>
                        <div className="evalu_colstyle_sub">5</div>
                    </Col>
                    <Col xs={{ order: 6, span: 12 }} lg={{ order: 9, span: 4 }}>
                        <div className="evalu_colstyle_sub">33</div>
                    </Col>
                    <Col xs={{ order: 8, span: 12 }} lg={{ order: 10, span: 4 }}>
                        <div className="evalu_colstyle_sub">44</div>
                    </Col>
                    <Col xs={{ order: 10, span: 12 }} lg={{ order: 11, span: 4 }}>
                        <div className="evalu_colstyle_sub">55</div>
                    </Col>
                    <Col xs={{ order: 12, span: 12 }} lg={{ order: 12, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            <Tag bordered={false} icon={<CheckCircleOutlined />} color="processing" className="evalu_tagstyle">
                                합격
                            </Tag>
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
                        <div className="evalu_colstyle_sub">2023-12-21</div>
                    </Col>
                    <Col xs={{ order: 4, span: 12 }} lg={{ order: 8, span: 4 }}>
                        <div className="evalu_colstyle_sub">5</div>
                    </Col>
                    <Col xs={{ order: 6, span: 12 }} lg={{ order: 9, span: 4 }}>
                        <div className="evalu_colstyle_sub">33</div>
                    </Col>
                    <Col xs={{ order: 8, span: 12 }} lg={{ order: 10, span: 4 }}>
                        <div className="evalu_colstyle_sub">44</div>
                    </Col>
                    <Col xs={{ order: 10, span: 12 }} lg={{ order: 11, span: 4 }}>
                        <div className="evalu_colstyle_sub">55</div>
                    </Col>
                    <Col xs={{ order: 12, span: 12 }} lg={{ order: 12, span: 4 }}>
                        <div className="evalu_colstyle_sub">
                            <Tag bordered={false} icon={<CheckCircleOutlined />} color="processing" className="evalu_tagstyle">
                                합격
                            </Tag>
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    );
};
