/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
    EditOutlined,
    LockOutlined,
    EyeTwoTone,
    EyeInvisibleOutlined,
    HomeOutlined,
    MobileOutlined,
    FileSyncOutlined,
    FormOutlined,
    SearchOutlined,
    MailOutlined
} from '@ant-design/icons';

import { Row, Col, Space, Tabs, Button, Divider, Form, Input, Card, Radio, Modal, Checkbox } from 'antd';
import '../Style.css';
export const Search = (props) => {
    // const [form] = Form.useForm();
    const [mode, setMode] = useState(props.formid);
    const [searchContainer, setSearchContainer] = useState({}); // ID 찾기 항목 컨테이너
    const [changaeContainer, setChangaeContainer] = useState({}); // 비밀번호 변경 항목 컨테이너

    const onFinish = (values) => {
        //console.log('Success:', values);
        // setSearchContainer(null);
        // setChangaeContainer(null);
        props.form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        //console.log('Failed:', errorInfo);
        // setSearchContainer(null);
        // setChangaeContainer(null);
        props.form.resetFields();
    };

    const IdSearch = () => {
        console.log(searchContainer);
        // props.Search_Id(searchContainer);
        // setSearchContainer(null);
    };

    const PassChange = () => {
        console.log(changaeContainer);
        // props.Change_Pass(changaeContainer);
        // setChangaeContainer(null);
    };

    const Cancel = () => {
        props.Modal_Cancel();
    };
    useEffect(() => {
        props.form.resetFields();
        // setSearchContainer(null);
    }, []);

    return (
        <>
            {mode === '1' ? (
                <Card>
                    <Row gutter={[16, 16]}>
                        <Col span={6} className="colTitle1 hidden-xs">
                            이름
                        </Col>
                        <Col span={18}>
                            <Input
                                prefix={<EditOutlined style={{ color: '#777' }} />}
                                size="large"
                                placeholder="이름"
                                style={{ height: '55px' }}
                            />
                        </Col>
                        <Col span={6} className="colTitle1 hidden-xs">
                            휴대폰 번호
                        </Col>
                        <Col span={18}>
                            <Input
                                prefix={<MobileOutlined style={{ color: '#777' }} />}
                                size="large"
                                placeholder="담당자 이메일"
                                style={{ height: '55px' }}
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <Space style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <Button type="primary" onClick={() => IdSearch()} style={{ width: '120px', height: '50px', fontWeight: '600' }}>
                            아이디 찾기
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => Cancel()}
                            style={{ width: '120px', height: '50px', fontWeight: '600', backgroundColor: 'orange' }}
                        >
                            취소
                        </Button>
                    </Space>
                </Card>
            ) : (
                <Card>
                    <Row gutter={[16, 16]}>
                        <Col span={6} className="colTitle1 hidden-xs">
                            이름
                        </Col>
                        <Col span={18}>
                            <Input
                                prefix={<EditOutlined style={{ color: '#777' }} />}
                                size="large"
                                placeholder="이름"
                                style={{ height: '55px' }}
                            />
                        </Col>
                        <Col span={6} className="colTitle1 hidden-xs">
                            아이디
                        </Col>
                        <Col span={18}>
                            <Input
                                prefix={<EditOutlined style={{ color: '#777' }} />}
                                size="large"
                                placeholder="아이디"
                                style={{ height: '55px' }}
                            />
                        </Col>

                        <Col span={6} className="colTitle1 hidden-xs">
                            휴대폰 번호
                        </Col>
                        <Col span={18}>
                            <Input
                                prefix={<MobileOutlined style={{ color: '#777' }} />}
                                size="large"
                                placeholder="휴대폰 번호"
                                style={{ height: '55px' }}
                            />
                        </Col>

                        <Col span={6} className="colTitle1 hidden-xs">
                            변경할 비밀번호
                        </Col>
                        <Col span={18}>
                            <Input
                                prefix={<LockOutlined style={{ color: '#777' }} />}
                                size="large"
                                placeholder="변경할 비밀번호"
                                style={{ height: '55px' }}
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <Space style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <Button type="primary" onClick={() => PassChange()} style={{ width: '120px', height: '50px', fontWeight: '600' }}>
                            비밀번호 변경
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => Cancel()}
                            style={{ width: '120px', height: '50px', fontWeight: '600', backgroundColor: 'orange' }}
                        >
                            취소
                        </Button>
                    </Space>
                </Card>
            )}
        </>
    );
};
