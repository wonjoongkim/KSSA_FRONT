/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Steps, Row, Col, Divider, Form, Input, Switch, Checkbox, Space, Button, Modal, List, Typography } from 'antd';
import { SmileOutlined, SolutionOutlined, CheckCircleFilled, FormOutlined } from '@ant-design/icons';

import { Register_Team } from './Register_Team'; // 업체 회원가입 폼
import { Register_User } from './Register_User'; // 교육생 회원가입 폼

export const Register_Step = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const StepProps = location.state && location.state.StepProps.flag;
    const { TextArea } = Input;

    const [current, setCurrent] = useState(0);
    const [chk_O, setChk_O] = useState(false);
    const [chk_T, setChk_T] = useState(false);
    const [allChk, setAllChk] = useState(false);
    const [completeData, setCompleteData] = useState();

    // 동의 체크
    const Chk_Change = (flag1, flag2) => {
        if (flag2 === 'O') {
            if (flag1 === true) {
                setChk_O(true);
            } else {
                setChk_O(false);
            }
        } else {
            if (flag1 === true) {
                setChk_T(true);
            } else {
                setChk_T(false);
            }
        }
    };

    // 전체동의
    const AllChk_Change = (e) => {
        if (e.target.checked === true) {
            setChk_O(true);
            setChk_T(true);
            setAllChk(true);
        } else {
            setChk_O(false);
            setChk_T(false);
            setAllChk(false);
        }
    };

    // 다음단계
    const next = (Info) => {
        if ((chk_O === true) & (chk_T === true)) {
            setCurrent(current + 1);
        } else {
            if (chk_O === false) {
                Modal.warning({
                    title: '경고',
                    content: '"개인정보의 항목 및 수집목적"의 동의가 필요합니다.'
                });
            } else {
                Modal.warning({
                    title: '경고',
                    content: '"이용약관"의 동의가 필요합니다.'
                });
            }
        }
        if (Info) {
            setCompleteData(Info);
            console.log(Info);
        }
    };

    // 이전단계
    const prev = () => {
        setCurrent(current - 1);
    };

    // 취소
    const Cancel = () => {
        navigate('/Register');
    };

    // 가입완료
    const finish = () => {
        navigate('/');
    };

    useEffect(() => {
        if ((chk_T === true) & (chk_O === true)) {
            setAllChk(true);
        } else {
            setAllChk(false);
        }
    }, [chk_O, chk_T]);

    return (
        <>
            <Card title={`회원가입${StepProps === 'Team' ? '[업체]' : '[교육생]'}`}>
                <Row justify="center" align="top">
                    <Col xl={21}>
                        <Steps
                            type="navigation"
                            size="small"
                            current={current}
                            // className="site-navigation-steps"
                            // labelPlacement="vertical"
                            items={[
                                {
                                    title: '약관동의',
                                    status: `${current <= 0 ? 'In Progress' : 'finish'}`, // finish, In Progress, wait
                                    icon: current <= 0 ? <FormOutlined /> : <CheckCircleFilled />
                                },
                                {
                                    title: '기본정보',
                                    status: `${current < 1 ? 'wait' : current === 1 ? 'In Progress' : current > 1 ? 'finish' : 'wait'}`,
                                    icon: current <= 1 ? <SolutionOutlined /> : <CheckCircleFilled />
                                },
                                {
                                    title: '가입완료',
                                    status: 'wait',
                                    status: `${current < 2 ? 'wait' : current === 2 ? 'In Progress' : current > 2 ? 'finish' : 'wait'}`,
                                    icon: current < 3 ? <SmileOutlined /> : <CheckCircleFilled />
                                }
                            ]}
                            style={{ widht: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                        />
                    </Col>
                </Row>
                <Divider />
                {
                    // =====================================================================================
                    // 약관동의
                    current === 0 ? (
                        <Row>
                            <Col span={24}>
                                <h2>개인정보의 항목 및 수집목적</h2>
                                <Form.Item>
                                    <div style={{ textAlign: 'center' }}>
                                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                                            <TextArea
                                                rows={10}
                                                value="개인정보의 항목 및 수집목적
                                     Contents"
                                            />
                                            <Switch
                                                name="chk_o"
                                                checkedChildren={<span style={{ fontSize: '14px' }}>동의</span>}
                                                unCheckedChildren={<span style={{ fontSize: '14px' }}>동의안함</span>}
                                                onChange={(v) => Chk_Change(v, 'O')}
                                                checked={chk_O}
                                                className="custom-switch"
                                            />
                                        </Space>
                                    </div>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <h2>이용약관</h2>
                                <Form.Item>
                                    <div style={{ textAlign: 'center' }}>
                                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                                            <TextArea
                                                rows={10}
                                                value="이용약관
                                     Contents"
                                            />
                                            <Switch
                                                name="chk_t"
                                                checkedChildren={<span style={{ fontSize: '14px' }}>동의</span>}
                                                unCheckedChildren={<span style={{ fontSize: '14px' }}>동의안함</span>}
                                                onChange={(v) => Chk_Change(v, 'T')}
                                                checked={chk_T}
                                                className="custom-switch"
                                            />
                                        </Space>
                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                    ) : // =====================================================================================
                    // 기본정보
                    current === 1 ? (
                        StepProps === 'Team' ? (
                            <Register_Team StepSave={next} StepCancel={Cancel} />
                        ) : (
                            <Register_User StepSave={next} StepCancel={Cancel} />
                        )
                    ) : // =====================================================================================
                    // 가입완료
                    current === 2 ? (
                        <div style={{ width: '100%' }}>
                            <Row justify="center" align="top">
                                <Col xs={24} xl={8}>
                                    <Card title="가입완료">
                                        <Row
                                            style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
                                            gutter={[0, 8]}
                                        >
                                            <Col className="colTitle" span={12}>
                                                가입일자
                                            </Col>
                                            <Col
                                                span={12}
                                                style={{
                                                    border: '1px solid #f0f0f0',
                                                    height: '55px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                {completeData.Date}
                                            </Col>
                                            <Col className="colTitle" span={12}>
                                                이름
                                            </Col>
                                            <Col
                                                span={12}
                                                style={{
                                                    border: '1px solid #f0f0f0',
                                                    height: '55px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                {completeData.Nm}
                                            </Col>
                                            <Col className="colTitle" span={12}>
                                                ID
                                            </Col>
                                            <Col
                                                span={12}
                                                style={{
                                                    border: '1px solid #f0f0f0',
                                                    height: '55px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                {completeData.Id}
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    ) : (
                        ''
                    )
                }
                <div style={{ marginTop: 40, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        {current === 0 && (
                            <Checkbox onChange={(e) => AllChk_Change(e)} checked={allChk} style={{ zoom: '1.2' }}>
                                전체동의
                            </Checkbox>
                        )}

                        <Space>
                            {current < 2 && (
                                <Button onClick={() => prev()} style={{ width: '120px', height: '50px', fontWeight: '600' }}>
                                    이전단계
                                </Button>
                            )}
                            {current < 1 && (
                                <>
                                    <Button
                                        type="primary"
                                        onClick={() => next()}
                                        style={{ width: '120px', height: '50px', fontWeight: '600', backgroundColor: 'orange' }}
                                    >
                                        다음단계
                                    </Button>
                                </>
                            )}
                        </Space>
                        {current < 1 && (
                            <Button
                                type="primary"
                                onClick={() => Cancel()}
                                style={{
                                    width: '120px',
                                    height: '50px',
                                    fontWeight: '600'
                                }}
                            >
                                취소
                            </Button>
                        )}

                        {current === 2 && (
                            <Button onClick={() => finish()} style={{ width: '120px', height: '50px', fontWeight: '600' }}>
                                완료
                            </Button>
                        )}
                    </Space>
                </div>
                <Divider />
            </Card>
        </>
    );
};
