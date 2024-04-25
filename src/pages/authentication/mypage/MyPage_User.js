import React, { useEffect, useState } from 'react';
import { useMemberInfoMutation } from '../../../hooks/api/MainManagement/MainManagement';
import { useXbtUserInfoMutation, useXbtMyPageEduDetailMutation } from '../../../hooks/api/XbtCrossManagement/XbtCrossManagement';

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
    const Disivion = localStorage.getItem('Disivion');

    const { Meta } = Card;
    const [loading, setLoading] = useState(false);
    const [address_disabled, setAddress_disabled] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [userInfoData, setUserInfoData] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [xbtChk, setXbtChk] = useState(null);
    const [itemContainer, setItemContainer] = useState(null);
    const [eduContainer, setEduContainer] = useState(null);

    const [practiceContainer, setPracticeContainer] = useState(null); // 실기 평가 Data
    const [xbtContainer, setXbtContainer] = useState(null); // XBT 평가 Data
    const [theoryContainer, setTheoryContainer] = useState(null); // 이론 평가 Data
    const [dangerContainer, setDangerContainer] = useState(null); // 항공위험물 평가 Data

    const DataOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

    // =========================================================================
    // 교육생 정보 Start
    const [MemberInfoApi] = useMemberInfoMutation();
    const handelMemberInfo = async () => {
        const MemberInfoResponse = await MemberInfoApi({});
        if (MemberInfoResponse?.data?.RET_CODE === '0000') {
            setUserInfoData({
                ...userInfoData,
                User_Id: MemberInfoResponse?.data?.RET_DATA?.User_Id,
                User_Nm: MemberInfoResponse?.data?.RET_DATA?.User_Nm,
                User_Email: MemberInfoResponse?.data?.RET_DATA?.User_Email,
                User_Zip: MemberInfoResponse?.data?.RET_DATA?.User_Zip,
                User_Address: MemberInfoResponse?.data?.RET_DATA?.User_Address,
                User_Address_Detail: MemberInfoResponse?.data?.RET_DATA?.User_Address_Detail,
                User_Phone: MemberInfoResponse?.data?.RET_DATA?.User_Phone,
                Date: new Date(MemberInfoResponse?.data?.RET_DATA?.InDate).toLocaleTimeString('ko-KR', DataOptions).substring(0, 12)
            });
            handelXBTInclude(MemberInfoResponse?.data?.RET_DATA?.Edu_Nm, MemberInfoResponse?.data?.RET_DATA?.Edu_Id);
        } else {
            ('');
        }
    };
    // 교육생 정보 Start
    // =========================================================================

    // ============================================
    // XBT 연동 Start
    const [XbtIncludeApi] = useXbtUserInfoMutation();
    const handelXBTInclude = async (Edu_Nm, Edu_Id) => {
        const XbtIncludeResponse = await XbtIncludeApi({
            Edu_Nm: Edu_Nm,
            Edu_Id: Edu_Id
        });
        if (XbtIncludeResponse?.data?.RET_CODE === '0000') {
            setXbtChk(true);
            setItemContainer({
                // 미사용중...
                ...itemContainer,
                User_Nm: XbtIncludeResponse?.data?.RET_DATA.result[0].User_Nm,
                Company_Nm: XbtIncludeResponse?.data?.RET_DATA?.result[0].Company,
                User_Phone: XbtIncludeResponse?.data?.RET_DATA?.result[0].Hp_No,
                User_Email: XbtIncludeResponse?.data?.RET_DATA?.result[0].Email,
                Edu_No: XbtIncludeResponse?.data?.RET_DATA?.result[0].User_No,
                Edu_Code: XbtIncludeResponse?.data?.RET_DATA?.result[0].Edu_Code,
                Edu_Code_Nm: XbtIncludeResponse?.data?.RET_DATA?.result[0].Edu_Name
            });
            setEduContainer(
                XbtIncludeResponse?.data?.RET_DATA?.Edu_Result.map((E, i) => ({
                    Key: i + 1,
                    EduDay: new Date(E.Admi_Date).toLocaleTimeString('ko-KR', DataOptions).substring(0, 12),
                    EduNm: E.EDU_NAME,
                    EduDate: `${new Date(E.EDU_START_DATE).toLocaleTimeString('ko-KR', DataOptions).substring(0, 12)} ~ ${new Date(
                        E.EDU_END_DATE
                    )
                        .toLocaleTimeString('ko-KR', DataOptions)
                        .substring(0, 12)}`,
                    Attend: `${E.DAYS_PASSED}일`,
                    CertificateNumber: '-',
                    Print: '-',
                    PrintCnt: '-',
                    UserId: E.USER_ID,
                    ProcCd: E.PROC_CD
                }))
            );
            console.log(XbtIncludeResponse?.data?.RET_DATA);
        } else {
            Modal.error({
                content: XbtIncludeResponse?.data?.RET_DESC,
                style: { top: 320 },
                onOk() {}
            });
        }
        return;
    };
    // XBT 연동 End
    // ============================================

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10
        }
    });

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
            render: (_, { EduNm, UserId, ProcCd }) => (
                <Button type="text" onClick={() => handel_EduDefalut(UserId, ProcCd)}>
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

    // =========================================================================
    // 교육생 교육 상세정보 Start
    const [XbtMyPageEduDetailApi] = useXbtMyPageEduDetailMutation();
    const handelXbtMyPageEduDetail = async (UserId, ProcCd) => {
        const XbtMyPageEduDetailResponse = await XbtMyPageEduDetailApi({
            User_Id: UserId,
            Proc_Cd: ProcCd
        });
        if (XbtMyPageEduDetailResponse?.data?.RET_CODE === '0000') {
            setPracticeContainer(XbtMyPageEduDetailResponse?.data?.RET_DATA?.PRACTICERESULT[0]);
            setXbtContainer(XbtMyPageEduDetailResponse?.data?.RET_DATA?.XBTRESULT[0]);
            setTheoryContainer(XbtMyPageEduDetailResponse?.data?.RET_DATA?.THEORYRESULT[0]);
            setDangerContainer(XbtMyPageEduDetailResponse?.data?.RET_DATA?.DANGERRESULT[0]);
            console.log(XbtMyPageEduDetailResponse?.data?.RET_DATA);
        } else {
            ('');
        }
    };

    // 교육생 교육 상세정보 Start
    // =========================================================================

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

    const handel_EduDefalut = (UserId, ProcCd) => {
        handelXbtMyPageEduDetail(UserId, ProcCd);
        setOpenModal(true);
    };

    useEffect(() => {
        handelMemberInfo();
    }, []);

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
                                    {userInfoData?.Date}
                                </Col>
                                <Col xs={8} xl={2} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    아이디
                                </Col>
                                <Col xs={16} xl={22} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    {userInfoData?.User_Id}
                                </Col>
                                <Col xs={8} xl={2} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    이메일
                                </Col>
                                <Col xs={16} xl={22} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    {userInfoData?.User_Email}
                                </Col>
                                <Col xs={8} xl={2} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    주소
                                </Col>
                                <Col xs={16} xl={22} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    {userInfoData?.User_Zip !== '' || userInfoData?.User_Zip !== undefined
                                        ? `[${userInfoData?.User_Zip}]`
                                        : ''}{' '}
                                    {userInfoData?.User_Address !== '' || userInfoData?.User_Address !== undefined
                                        ? userInfoData?.User_Address
                                        : ''}{' '}
                                    {userInfoData?.User_Address_Detail !== '' || userInfoData?.User_Address_Detail !== undefined
                                        ? userInfoData?.User_Address_Detail
                                        : ''}
                                </Col>
                                <Col xs={8} xl={2} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    연락처
                                </Col>
                                <Col xs={16} xl={22} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                                    {userInfoData?.User_Phone}
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
                                        dataSource={eduContainer}
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
                <Evaluation
                    practiceContainer={practiceContainer}
                    xbtContainer={xbtContainer}
                    theoryContainer={theoryContainer}
                    dangerContainer={dangerContainer}
                />
            </Modal>
            {/* 평가정보 창 End */}
        </>
    );
};
