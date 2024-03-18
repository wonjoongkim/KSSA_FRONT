/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Divider, Card, Row, Col, Input, Space, Button, Select } from 'antd';
import {
    EditOutlined,
    LockOutlined,
    EyeTwoTone,
    EyeInvisibleOutlined,
    HomeOutlined,
    EnvironmentOutlined,
    SearchOutlined,
    MailOutlined,
    MobileOutlined,
    CheckOutlined
} from '@ant-design/icons';
import './Style.css';

export const Register_Team = (props) => {
    const { Search } = Input;
    const [address_disabled, setAddress_disabled] = useState(true);

    const EmailselectAfter = (
        <Select defaultValue="이메일 직접입력" style={{ width: '150px' }}>
            <Option value="@naver.com">@naver.com</Option>
            <Option value="@nate.com">@nate.com</Option>
            <Option value="@daum.net">@daum.net</Option>
            <Option value="@">직접입력</Option>
        </Select>
    );

    const EmailOptions = [
        {
            value: '@naver.com',
            label: '네이버'
        },
        {
            value: '@nate.com',
            label: '네이트'
        },
        {
            value: '@daum.net',
            label: '다음'
        },
        {
            value: '@hotmail.com',
            label: '핫메일'
        },
        {
            value: '@gmail.com',
            label: '지메일'
        }
    ];

    const Save = () => {
        localStorage.setItem('Division', 'User');
        const Info = {
            Date: '2024-02-01',
            Nm: '홍길동',
            Id: 'test01'
        };
        props.StepSave(Info);
        console.log('저장');
    };
    const Cancel = () => {
        props.StepCancel();
        console.log('취소');
    };

    // 이메일 선택
    const EmailChange = (value) => {
        console.log(`Selected: ${value}`);
    };

    return (
        <>
            {/* 로그인 정보 */}
            <Card title="로그인 정보">
                <Row gutter={[16, 16]}>
                    <Col xs={24} xl={3} className="colTitle1 hidden-xs">
                        아이디
                    </Col>
                    <Col xs={24} xl={21}>
                        <Row>
                            <Col span={24}>
                                <Row gutter={[16, 16]}>
                                    <Col span={16}>
                                        <Input
                                            size="large"
                                            placeholder="아이디를 입력해주세요"
                                            prefix={<EditOutlined />}
                                            allowClear
                                            enterButton="Search"
                                            style={{ height: '55px' }}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        <Button type="primary" style={{ width: '100%', height: '55px' }}>
                                            중복확인
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} xl={3} className="colTitle1 hidden-xs">
                        비밀번호 / 확인
                    </Col>
                    <Col xs={24} xl={21}>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <Input.Password
                                    prefix={<LockOutlined style={{ color: '#777' }} />}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    size="large"
                                    placeholder="비밀번호는 9~12자로 가능합니다."
                                    style={{ height: '55px' }}
                                />
                            </Col>
                            <Col span={12}>
                                <Input.Password
                                    prefix={<LockOutlined style={{ color: '#777' }} />}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    size="large"
                                    placeholder="비밀번호 확인"
                                    style={{ height: '55px' }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <br />
            <br />
            {/* 업체 정보 */}
            <Card title="업체 정보">
                <Row gutter={[16, 16]}>
                    <Col xs={24} xl={3} className="colTitle1 hidden-xs">
                        업체명
                    </Col>
                    <Col xs={24} xl={21}>
                        <Input
                            prefix={<EditOutlined style={{ color: '#777' }} />}
                            placeholder="업체명"
                            size="large"
                            style={{ height: '55px' }}
                        />
                    </Col>
                    <Col xs={24} xl={3} className="colTitle1 hidden-xs">
                        업체주소
                    </Col>
                    <Col xs={24} xl={21}>
                        <Row gutter={[16, 16]}>
                            <Col xs={12} xl={4}>
                                <Button icon={<SearchOutlined />} type="primary" style={{ width: '100%', height: '55px' }}>
                                    주소검색
                                </Button>
                            </Col>
                            <Col xs={12} xl={4}>
                                <Input
                                    size="large"
                                    prefix={<HomeOutlined style={{ color: '#777' }} />}
                                    placeholder="우편번호"
                                    style={{ height: '55px' }}
                                    disabled
                                />
                            </Col>
                            <Col xs={24} xl={16}>
                                <Input
                                    size="large"
                                    placeholder="주소"
                                    prefix={<EnvironmentOutlined />}
                                    allowClear
                                    enterButton="Search"
                                    style={{ height: '55px' }}
                                    disabled={address_disabled}
                                />
                            </Col>
                            <Col span={24}>
                                <Input
                                    size="large"
                                    prefix={<EditOutlined style={{ color: '#777' }} />}
                                    placeholder="상세주소"
                                    style={{ height: '55px' }}
                                    disabled={address_disabled}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <br />
            <br />
            {/* 담당자 정보 */}
            <Card title="담당자 정보">
                <Row gutter={[16, 16]}>
                    <Col xs={24} xl={3} className="colTitle1 hidden-xs">
                        이름 / 연락처
                    </Col>
                    <Col xs={24} xl={21}>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} xl={12}>
                                <Input
                                    prefix={<EditOutlined style={{ color: '#777' }} />}
                                    size="large"
                                    placeholder="담당자 이름"
                                    style={{ height: '55px' }}
                                />
                            </Col>
                            <Col xs={24} xl={12}>
                                <Input
                                    prefix={<MobileOutlined style={{ color: '#777' }} />}
                                    size="large"
                                    placeholder="담당자 연락처"
                                    style={{ height: '55px' }}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} xl={3} className="colTitle1 hidden-xs">
                        이메일
                    </Col>
                    <Col span={24} xl={21}>
                        <Input
                            prefix={<MailOutlined style={{ color: '#777' }} />}
                            size="large"
                            placeholder="담당자 이메일"
                            style={{ height: '55px' }}
                        />
                    </Col>
                </Row>
            </Card>
            <br />
            <br />
            <Space style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <Button type="primary" onClick={() => Save()} style={{ width: '120px', height: '50px', fontWeight: '600' }}>
                    저장
                </Button>
                <Button
                    type="primary"
                    onClick={() => Cancel()}
                    style={{ width: '120px', height: '50px', fontWeight: '600', backgroundColor: 'orange' }}
                >
                    취소
                </Button>
            </Space>
        </>
    );
};
