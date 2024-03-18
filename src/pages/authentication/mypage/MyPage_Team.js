import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Input, Button, Space, Divider, Table } from 'antd';
import { SearchOutlined, HomeOutlined, EditOutlined, EnvironmentOutlined, MobileOutlined, MailOutlined } from '@ant-design/icons';
import { Typography } from '@mui/material';
import './Style.css';
export const MyPage_Team = () => {
    // console.log(localStorage.getItem('Disivion'));
    const Disivion = localStorage.getItem('Disivion');
    const { Meta } = Card;
    const [loading, setLoading] = useState(false);
    const [address_disabled, setAddress_disabled] = useState(true);
    const [dataSource, setDataSource] = useState();
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10
        }
    });

    const data = [
        {
            Key: '1',
            Date: '2023-12-01',
            EduDate: '2024-01-08 ~ 2024-01-11',
            EduPersonnel: '25'
        },
        {
            Key: '2',
            Date: '2023-11-10',
            EduDate: '2023-12-11 ~ 2024-01-14',
            EduPersonnel: '30'
        },
        {
            Key: '3',
            Date: '2023-10-12',
            EduDate: '2023-11-11 ~ 2024-11-14',
            EduPersonnel: '32'
        },
        {
            Key: '4',
            Date: '2023-09-12',
            EduDate: '2023-10-11 ~ 2024-10-14',
            EduPersonnel: '17'
        }
    ];
    // setDataSource([
    //     {
    //         key: '1',
    //         Date: '2023-12-01',
    //         EduDate: '2024-01-08 ~ 2024-01-11',
    //         EduPersonnel: '25'
    //     },
    //     {
    //         key: '2',
    //         Date: '2023-11-10',
    //         EduDate: '2023-12-11 ~ 2024-01-14',
    //         EduPersonnel: '30'
    //     },
    //     {
    //         key: '3',
    //         Date: '2023-10-12',
    //         EduDate: '2023-11-11 ~ 2024-11-14',
    //         EduPersonnel: '32'
    //     },
    //     {
    //         key: '4',
    //         Date: '2023-09-12',
    //         EduDate: '2023-10-11 ~ 2024-10-14',
    //         EduPersonnel: '17'
    //     }
    // ]);

    const columns = [
        {
            title: 'No.',
            dataIndex: 'Key',
            sorter: {
                compare: (a, b) => a.Key.localeCompare(b.Key, 'ko-KR', { sensitivity: 'base' })
            },
            align: 'center'
        },
        {
            title: '일자',
            dataIndex: 'Date',
            sorter: {
                compare: (a, b) => a.Date.localeCompare(b.Date, 'ko-KR', { sensitivity: 'base' })
            },
            align: 'center'
        },
        {
            title: '교육기간',
            dataIndex: 'EduDate',
            sorter: {
                compare: (a, b) => a.EduDate.localeCompare(b.EduDate, 'ko-KR', { sensitivity: 'base' })
            },
            align: 'center'
        },
        {
            title: '교육인원',
            dataIndex: 'EduPersonnel',
            sorter: {
                compare: (a, b) => a.EduPersonnel.localeCompare(b.EduPersonnel, 'ko-KR', { sensitivity: 'base' })
            },
            render: (_, { EduPersonnel }) => <>{`${EduPersonnel}명`}</>,
            align: 'center'
        }
    ];

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter
        });

        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setDataSource([]);
        }
    };

    useEffect(() => {}, []);

    return (
        <>
            <Card title="Mypage[업체]">
                <Row gutter={[16, 0]} style={{ margin: '-20px' }}>
                    <Col span={24}>
                        <Card style={{ border: '0px' }}>
                            <Meta title="기본정보" style={{ marginBottom: '10px' }} />
                            <Row
                                gutter={[24, 24]}
                                style={{
                                    border: '2px solid #e0e0e0',
                                    padding: '15px',
                                    borderRadius: '10px'
                                }}
                            >
                                <Col xs={8} xl={2} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    가입일자
                                </Col>
                                <Col
                                    xs={16}
                                    xl={22}
                                    style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', fontSize: '16px' }}
                                >
                                    2024-01-09
                                </Col>
                                <Col xs={8} xl={2} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    아이디
                                </Col>
                                <Col xs={16} xl={22} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    KSSA001
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card style={{ border: '0px' }}>
                            <Meta title="업체정보" style={{ marginBottom: '10px' }} />
                            <Row
                                gutter={[24, 24]}
                                style={{
                                    border: '2px solid #e0e0e0',
                                    padding: '15px',
                                    borderRadius: '10px'
                                }}
                            >
                                <Col xs={8} xl={2} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    업체명
                                </Col>
                                <Col xs={16} xl={22} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <Input
                                        addonBefore={<EditOutlined style={{ color: '#777' }} />}
                                        placeholder="업체명"
                                        size="large"
                                        value="한국공항보안(주)"
                                    />
                                </Col>
                                <Col xs={8} xl={2} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    업체주소
                                </Col>
                                <Col xs={24} xl={22}>
                                    <Row gutter={[16, 16]}>
                                        <Col xs={12} xl={4}>
                                            <Button icon={<SearchOutlined />} type="primary" style={{ width: '100%', height: '55px' }}>
                                                주소검색
                                            </Button>
                                        </Col>
                                        <Col xs={12} xl={4}>
                                            <Input
                                                addonBefore={<HomeOutlined style={{ color: '#777' }} />}
                                                placeholder="우편번호"
                                                disabled
                                                value="12345"
                                            />
                                        </Col>
                                        <Col xs={24} xl={16}>
                                            <Input
                                                placeholder="주소"
                                                addonBefore={<EnvironmentOutlined />}
                                                allowClear
                                                enterButton="Search"
                                                disabled={address_disabled}
                                                value="서울특별시 강서구 방화대로 21길 72"
                                            />
                                        </Col>
                                        <Col span={24}>
                                            <Input
                                                size="large"
                                                addonBefore={<EditOutlined style={{ color: '#777' }} />}
                                                placeholder="상세주소"
                                                style={{ height: '55px' }}
                                                value="범천빌딩 4층 한국보안인재개발원"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card style={{ border: '0px' }}>
                            <Meta title="담당자 정보" style={{ marginBottom: '10px' }} />
                            <Row
                                gutter={[24, 24]}
                                style={{
                                    border: '2px solid #e0e0e0',
                                    padding: '15px',
                                    borderRadius: '10px'
                                }}
                            >
                                <Col xs={8} xl={2} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    이름 / 연락처
                                </Col>
                                <Col xs={24} xl={22}>
                                    <Row gutter={[16, 16]}>
                                        <Col xs={24} xl={12}>
                                            <Input
                                                addonBefore={<EditOutlined style={{ color: '#777' }} />}
                                                size="large"
                                                placeholder="담당자 이름"
                                                style={{ height: '55px' }}
                                                value="홍길동"
                                            />
                                        </Col>
                                        <Col xs={24} xl={12}>
                                            <Input
                                                addonBefore={<MobileOutlined style={{ color: '#777' }} />}
                                                size="large"
                                                placeholder="담당자 연락처"
                                                style={{ height: '55px' }}
                                                value="010-1234-1234"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={8} xl={2} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    이메일
                                </Col>
                                <Col xs={24} xl={22}>
                                    <Input
                                        addonBefore={<MailOutlined style={{ color: '#777' }} />}
                                        size="large"
                                        placeholder="담당자 이메일"
                                        style={{ height: '55px' }}
                                        value="hongildong@kssa.re.kr"
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card style={{ border: '0px' }}>
                            <Meta title="교육신청 정보" style={{ marginBottom: '10px' }} />
                            <Row
                                gutter={[24, 24]}
                                style={{
                                    border: '2px solid #e0e0e0',
                                    padding: '15px',
                                    borderRadius: '10px'
                                }}
                            >
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    <Table
                                        columns={columns}
                                        // dataSource={dataSource}
                                        dataSource={data}
                                        loading={loading}
                                        onChange={handleTableChange}
                                        style={{ width: '100%' }}
                                        pagination={tableParams.pagination}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Card>
            <Divider />
        </>
    );
};
