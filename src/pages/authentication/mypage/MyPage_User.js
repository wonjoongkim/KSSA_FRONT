import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Input, Button, Space, Divider, Table, Modal } from 'antd';
import {
    SearchOutlined,
    HomeOutlined,
    EditOutlined,
    EnvironmentOutlined,
    MobileOutlined,
    MailOutlined,
    PrinterOutlined
} from '@ant-design/icons';
import { Evaluation } from './Evaluation';
import './Style.css';

export const MyPage_User = () => {
    // console.log(localStorage.getItem('Disivion'));
    const Disivion = localStorage.getItem('Disivion');
    const { Meta } = Card;
    const [loading, setLoading] = useState(false);
    const [address_disabled, setAddress_disabled] = useState(true);
    const [openModal, setOpenModal] = useState(false);
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
            EduDay: '2023-12-01',
            EduNm: '보안검색요원 초기교육',
            EduDate: '2024-01-08 ~ 2024-01-11',
            Attend: '4일',
            CertificateNumber: 'KSSA-2023-보안-00004',
            Print: 'KSSA-2023-보안-00004',
            PrintCnt: '1'
        },
        {
            Key: '2',
            EduDay: '2023-11-12',
            EduNm: '항공경비 초기교육',
            EduDate: '2024-11-25 ~ 2024-11-29',
            Attend: '5일',
            CertificateNumber: '-',
            Print: '-',
            PrintCnt: '-'
        },
        {
            Key: '3',
            EduDay: '2023-10-27',
            EduNm: '보안검색요원 정기교육',
            EduDate: '2024-11-08 ~ 2024-11-11',
            Attend: '5일',
            CertificateNumber: 'KSSA-2023-보안-00002',
            Print: 'KSSA-2023-보안-00002',
            PrintCnt: '2'
        }
    ];
    const columns = [
        {
            title: 'No.',
            dataIndex: 'Key',
            align: 'center'
        },
        {
            title: '입교일자',
            dataIndex: 'EduDay',
            sorter: {
                compare: (a, b) => a.EduDay.localeCompare(b.EduDay, 'ko-KR', { sensitivity: 'base' })
            },
            align: 'center'
        },
        {
            title: '교육과정명',
            dataIndex: 'EduNm',
            sorter: {
                compare: (a, b) => a.EduNm.localeCompare(b.EduNm, 'ko-KR', { sensitivity: 'base' })
            },
            render: (_, { EduNm }) => (
                <Button type="text" onClick={() => setOpenModal(true)}>
                    {EduNm}
                </Button>
            ),
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
            title: '출석일',
            dataIndex: 'Attend',
            align: 'center'
        },
        {
            title: '이수증 번호',
            dataIndex: 'CertificateNumber',
            sorter: {
                compare: (a, b) => a.CertificateNumber.localeCompare(b.CertificateNumber, 'ko-KR', { sensitivity: 'base' })
            },
            align: 'center'
        },
        {
            title: '출력',
            dataIndex: 'Print',
            align: 'center',
            render: (_, { Print }) => (
                <Button type="primary" icon={<PrinterOutlined />} style={{ height: '45px' }}>
                    이수증 출력
                </Button>
            ),
            align: 'center'
        },
        {
            title: '출력횟수',
            dataIndex: 'PrintCnt',
            render: (_, { PrintCnt }) => <>{`${PrintCnt}회`}</>,
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

    // 평가정보 모달창 닫음
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {}, []);

    return (
        <>
            <Card title="Mypage[교육생]">
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
                                    testers
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card style={{ border: '0px' }}>
                            <Meta title="교육 정보" style={{ marginBottom: '10px' }} />
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
                                        scroll={{ x: 'max-content' }}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Card>
            <Divider />
            {/* 평가정보 창 Start */}
            <Modal
                className="custom-modal"
                maskClosable={false}
                open={openModal}
                onOk={handleCloseModal}
                // closable={false}
                onCancel={handleCloseModal}
                width={window.innerWidth - 200}
                style={{
                    zIndex: 999
                }}
                footer={null}
            >
                <Evaluation />
            </Modal>
            {/* 평가정보 창 End */}
        </>
    );
};
