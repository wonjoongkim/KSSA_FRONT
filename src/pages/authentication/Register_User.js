/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { Divider, Card, Steps, Row, Col, Input, Space, Button, Form, Modal } from 'antd';
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
import './Style.css';
import { InputNumber } from '../../../node_modules/antd/es/index';
import DaumPostcode from 'react-daum-postcode';
import { useDupliChkMutation, useMemberInsertMutation } from '../../hooks/api/LoginManagement/LoginManagement';
import { useXbtUserInfoMutation } from '../../hooks/api/XbtCrossManagement/XbtCrossManagement';

export const Register_User = (props) => {
    const { Search } = Input;
    const AddressDetailRef = useRef(null);
    const UserIdRef = useRef(null);
    const [address_disabled, setAddress_disabled] = useState(true);
    const [infoType, setInfoType] = useState(false);
    const [itemContainer, setItemContainer] = useState(null);
    const [isIdChecked, setIsIdChecked] = useState(false);
    const [modal_Post, setModal_Post] = useState(false);
    const [xbtChk, setXbtChk] = useState(false);

    // 현재날짜 START
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    // 현재날짜 End

    // ============================================
    // User_Id 중복확인 Api Start
    const [DupliChkApi] = useDupliChkMutation();
    const handelDupliChk = async () => {
        const DupliChkResponse = await DupliChkApi({
            user_id: itemContainer?.User_Id
        });
        if (DupliChkResponse?.data?.RET_CODE === '0000') {
            setIsIdChecked(true);
        } else {
            Modal.error({
                content: DupliChkResponse?.data?.RET_DESC,
                style: { top: 320 },
                onOk() {}
            });
        }
        return;
    };
    // User_Id 중복확인 Api End
    // ============================================

    // ============================================
    // XBT 연동 Start
    const [XbtIncludeApi] = useXbtUserInfoMutation();
    const handelXBTInclude = async () => {
        const XbtIncludeResponse = await XbtIncludeApi({
            Edu_Nm: itemContainer?.Edu_Nm,
            Edu_Id: itemContainer?.Edu_Id
        });
        if (XbtIncludeResponse?.data?.RET_CODE === '0000') {
            setXbtChk(true);
            setItemContainer({
                ...itemContainer,
                User_Nm: XbtIncludeResponse?.data?.RET_DATA[0].User_Nm,
                Company_Nm: XbtIncludeResponse?.data?.RET_DATA[0].Company,
                User_Phone: XbtIncludeResponse?.data?.RET_DATA[0].Hp_No,
                User_Email: XbtIncludeResponse?.data?.RET_DATA[0].Email,
                Edu_No: XbtIncludeResponse?.data?.RET_DATA[0].User_No,
                Edu_Code: XbtIncludeResponse?.data?.RET_DATA[0].Edu_Code,
                Edu_Code_Nm: XbtIncludeResponse?.data?.RET_DATA[0].Edu_Name
            });
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

    // ============================================
    // 회원가입 Start
    const [MemberInsertApi] = useMemberInsertMutation();
    const handelMemberInsert = async () => {
        const MemberInsertResponse = await MemberInsertApi({
            User_Id: itemContainer?.User_Id,
            User_Pw: itemContainer?.User_Pw,
            User_Type: 'T',
            Edu_Nm: itemContainer?.Edu_Nm,
            Edu_Id: itemContainer?.Edu_Id,
            User_Nm: itemContainer?.User_Nm,
            User_Phone: itemContainer?.User_Phone,
            User_Email: itemContainer?.User_Email,
            User_Zip: itemContainer?.User_Zip,
            User_Address: itemContainer?.User_Address,
            User_Address_Detail: itemContainer?.User_Address_Detail,
            Company_Nm: itemContainer?.Company_Nm,
            Company_Zip: itemContainer?.Company_Zip,
            Company_Address: itemContainer?.Company_Address,
            Company_Address_Detail: itemContainer?.Company_Address_Detail,
            Manager_Nm: itemContainer?.Manager_Nm,
            Manager_Phone: itemContainer?.Manager_Phone,
            Manager_Email: itemContainer?.Manager_Email,
            Edu_No: itemContainer?.Edu_No,
            Edu_Code: itemContainer?.Edu_Code,
            Edu_Code_Nm: itemContainer?.Edu_Code_Nm
        });
        if (MemberInsertResponse?.data?.RET_CODE === '0000') {
            localStorage.setItem('Division', 'User');
            const Info = {
                Date: formattedDate,
                Nm: itemContainer?.User_Nm,
                Id: itemContainer?.User_Id
            };
            props.StepSave(Info);
        } else {
            Modal.error({
                content: MemberInsertResponse?.data?.RET_DESC,
                style: { top: 320 },
                onOk() {}
            });
        }
        return;
    };

    const Save = async () => {
        itemContainer?.User_Id === '' ||
        itemContainer?.User_Id === undefined ||
        itemContainer?.User_Pw === '' ||
        itemContainer?.User_Pw === undefined
            ? Modal.error({
                  content: (
                      <div>
                          <div>[로그인 정보] 입력된 아이디와 비밀번호가 없습니다.</div>
                          <div style={{ color: 'red' }}>["[로그인 정보] 아이디와 비밀번호는 필수 항목입니다"]</div>
                      </div>
                  ),
                  style: { top: 320 },
                  onOk() {
                      return;
                  }
              })
            : handelMemberInsert();
    };

    const Cancel = () => {
        props.StepCancel();
        console.log('취소');
    };
    // 회원가입 End
    // ============================================

    // ============================================
    // 중복확인 버튼 Start
    const DupliChk = () => {
        itemContainer?.User_Id === '' || itemContainer?.User_Id === undefined
            ? Modal.error({
                  content: '입력된 아이디가 없습니다.',
                  style: { top: 320 },
                  onOk() {}
              })
            : itemContainer?.User_Id.length > '4'
            ? handelDupliChk()
            : Modal.error({
                  content: '아이디는 "최대 4자 이상" 입력하셔야 합니다.',
                  style: { top: 320 },
                  onOk() {}
              });
    };
    // 중복확인 버튼 End
    // ============================================

    // ============================================
    // 재확인[아이디, 중복 확인 상태 초기화] Start
    const DupliChk_Re = () => {
        setItemContainer({ ...itemContainer, User_Id: '' });
        setIsIdChecked(false);
        UserIdRef.current.focus();
    };
    // 재확인[아이디, 중복 확인 상태 초기화] End
    // ============================================

    // ============================================
    // 기본정보 전환 버튼 Start
    const handelTransform = (flag) => {
        flag === infoType
            ? ''
            : setItemContainer({
                  ...itemContainer,
                  User_Nm: '',
                  User_Phone: '',
                  User_Email: '',
                  User_Zip: '',
                  User_Address: '',
                  User_Address_Detail: ''
              });
        setInfoType(flag);
    };
    // 기본정보 전환 버튼 End
    // ============================================

    // ============================================
    // 우편번호 모달 Start

    // 열기
    const Modal_Post_Open = () => {
        setModal_Post(true);
    };

    // 닫기
    const Modal_Posts = () => {
        setModal_Post((prev) => !prev);
    };

    // Daum 우편번호
    const completeHandler = (data) => {
        setItemContainer({
            ...itemContainer,
            User_Address: `${data.address}${data.buildingName !== '' ? ` (${data.buildingName})` : ''}`,
            User_Zip: data.zonecode
        });
        setModal_Post(false);
        AddressDetailRef.current.focus();
    };
    // 우편번호 모달 End
    // ============================================

    // ============================================
    // 숫자만 입력 Start
    const handleInputChange = (e) => {
        const regex = /^[0-9]+$/;
        const name = e.target.name;
        const value = e.target.value;
        let newValue;

        if (regex.test(value) || value === '') {
            newValue = value;
        } else {
            const previousValue = itemContainer[name];
            const currentPosition = e.target.selectionStart || 0;
            newValue = previousValue.substring(0, currentPosition - 1) + previousValue.substring(currentPosition);
        }
        setItemContainer({ ...itemContainer, [name]: newValue });
    };
    // 숫자만 입력 End
    // ============================================

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                                            ref={UserIdRef}
                                            size="large"
                                            placeholder="아이디를 입력해주세요"
                                            prefix={<EditOutlined />}
                                            allowClear
                                            name="User_Id"
                                            value={itemContainer?.User_Id}
                                            onChange={(e) => setItemContainer({ ...itemContainer, User_Id: e.target.value })}
                                            enterButton="Search"
                                            style={{ height: '55px' }}
                                            disabled={isIdChecked}
                                        />
                                    </Col>
                                    <Col span={8}>
                                        {isIdChecked ? (
                                            <>
                                                <Row>
                                                    <Col span={10}>
                                                        <Button type="text" style={{ height: '55px', color: 'red' }}>
                                                            사용가능한 아이디 입니다.
                                                        </Button>
                                                    </Col>
                                                    <Col span={14}>
                                                        <Button
                                                            type="primary"
                                                            onClick={() => DupliChk_Re()}
                                                            style={{ width: '100%', height: '55px', backgroundColor: '#ED7D31' }}
                                                        >
                                                            아이디 재확인
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </>
                                        ) : (
                                            <Button type="primary" onClick={() => DupliChk()} style={{ width: '100%', height: '55px' }}>
                                                중복확인
                                            </Button>
                                        )}
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
                            <Col xs={24} xl={12}>
                                <Input.Password
                                    prefix={<LockOutlined style={{ color: '#777' }} />}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    size="large"
                                    name="User_Pw"
                                    value={itemContainer?.User_Pw}
                                    onChange={(e) => setItemContainer({ ...itemContainer, User_Pw: e.target.value })}
                                    placeholder="비밀번호는 9~12자로 가능합니다."
                                    style={{ height: '55px' }}
                                />
                            </Col>
                            <Col xs={24} xl={12}>
                                <Input.Password
                                    prefix={<LockOutlined style={{ color: '#777' }} />}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    size="large"
                                    name="User_PwRe"
                                    value={itemContainer?.User_PwRe}
                                    onChange={(e) => setItemContainer({ ...itemContainer, User_PwRe: e.target.value })}
                                    placeholder="비밀번호 확인"
                                    style={{ height: '55px' }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <Divider />
            <Row
                gutter={[24, 24]}
                justify="center"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
            >
                <Col xs={24} xl={5}>
                    <Button
                        type="primary"
                        icon={<FileSyncOutlined style={{ fontSize: '50px' }} />}
                        style={
                            infoType === false
                                ? { fontSize: '17px', fontWeight: '600', width: '100%', height: '110px', backgroundColor: '#ED7D31' }
                                : { fontSize: '17px', fontWeight: '600', width: '100%', height: '110px', backgroundColor: '#AAAAAA' }
                        }
                        onClick={() => handelTransform(false)}
                    >
                        기본 정보 [XBT정보 연동]
                    </Button>
                </Col>
                <Col xs={24} xl={5}>
                    <Button
                        type="primary"
                        icon={<FormOutlined style={{ fontSize: '50px' }} />}
                        style={
                            infoType === true
                                ? { fontSize: '17px', fontWeight: '600', width: '100%', height: '110px', backgroundColor: '#4472C4' }
                                : { fontSize: '17px', fontWeight: '600', width: '100%', height: '110px', backgroundColor: '#AAAAAA' }
                        }
                        onClick={() => handelTransform(true)}
                    >
                        기본 정보 [직접입력]
                    </Button>
                </Col>
            </Row>
            <Divider />
            {/* 기본정보1 */}
            {/* 기본정보2 */}
            {infoType === true ? (
                <Card title="기본정보 [직접입력]">
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
                                        name="User_Nm"
                                        value={itemContainer?.User_Nm}
                                        onChange={(e) => setItemContainer({ ...itemContainer, User_Nm: e.target.value })}
                                        placeholder="이름"
                                        style={{ height: '55px' }}
                                    />
                                </Col>
                                <Col xs={24} xl={12}>
                                    <Input
                                        prefix={<MobileOutlined style={{ color: '#777' }} />}
                                        size="large"
                                        name="User_Phone"
                                        id="User_Phone"
                                        value={itemContainer?.User_Phone}
                                        // onChange={(e) => setItemContainer({ ...itemContainer, User_Phone: e })}
                                        onChange={(e) => handleInputChange(e)}
                                        placeholder="연락처"
                                        style={{ height: '55px', width: '100%' }}
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
                                name="User_Email"
                                value={itemContainer?.User_Email}
                                onChange={(e) => setItemContainer({ ...itemContainer, User_Email: e.target.value })}
                                placeholder="이메일"
                                style={{ height: '55px' }}
                            />
                        </Col>
                        <Col xs={24} xl={3} className="colTitle1 hidden-xs">
                            주소
                        </Col>
                        <Col xs={24} xl={21}>
                            <Row gutter={[16, 16]}>
                                <Col xs={12} xl={4}>
                                    <Button
                                        icon={<SearchOutlined />}
                                        type="primary"
                                        onClick={Modal_Post_Open}
                                        style={{ width: '100%', height: '55px' }}
                                    >
                                        주소검색
                                    </Button>
                                </Col>
                                <Col xs={12} xl={4}>
                                    <Input
                                        size="large"
                                        prefix={<HomeOutlined style={{ color: '#777' }} />}
                                        placeholder="우편번호"
                                        value={itemContainer?.User_Zip}
                                        style={{ height: '55px' }}
                                        disabled
                                    />
                                </Col>
                                <Col xs={24} xl={16}>
                                    <Input
                                        size="large"
                                        placeholder="주소"
                                        prefix={<EditOutlined />}
                                        allowClear
                                        enterButton="Search"
                                        value={itemContainer?.User_Address}
                                        style={{ height: '55px' }}
                                        disabled={address_disabled}
                                    />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        ref={AddressDetailRef}
                                        size="large"
                                        prefix={<EditOutlined style={{ color: '#777' }} />}
                                        placeholder="상세주소"
                                        style={{ height: '55px' }}
                                        value={itemContainer?.User_Address_Detail}
                                        onChange={(e) => setItemContainer({ ...itemContainer, User_Address_Detail: e.target.value })}
                                        // disabled={address_disabled}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            ) : (
                <Card title="기본 정보 [XBT정보]">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} xl={3} className="colTitle1 hidden-xs">
                            교육과정 정보
                        </Col>
                        <Col xs={24} xl={21}>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} xl={10}>
                                    <Input
                                        size="large"
                                        name="Edu_Nm"
                                        value={itemContainer?.Edu_Nm}
                                        onChange={(e) => setItemContainer({ ...itemContainer, Edu_Nm: e.target.value })}
                                        prefix={<EditOutlined style={{ color: '#777' }} />}
                                        placeholder="교육과정 이름"
                                        style={{ height: '55px' }}
                                        disabled={xbtChk}
                                    />
                                </Col>
                                <Col xs={24} xl={10}>
                                    <Input
                                        size="large"
                                        placeholder="교육과정 아이디(휴대폰 번호)"
                                        name="Edu_Id"
                                        id="Edu_Id"
                                        value={itemContainer?.Edu_Id}
                                        // onChange={(e) => setItemContainer({ ...itemContainer, Edu_Id: e })}
                                        prefix={<EditOutlined />}
                                        enterButton="Search"
                                        onChange={(e) => handleInputChange(e)}
                                        style={{ height: '55px', width: '100%' }}
                                        disabled={xbtChk}
                                    />
                                </Col>
                                <Col xs={24} xl={4}>
                                    <Button
                                        icon={<SearchOutlined />}
                                        type="primary"
                                        onClick={handelXBTInclude}
                                        style={{ width: '100%', height: '55px' }}
                                        disabled={xbtChk}
                                    >
                                        정보연동
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {xbtChk ? (
                        <Card>
                            <Row style={{ textAlign: 'center', color: '#4472C4', fontWeight: '700', fontSize: '18px' }}>
                                <Col span={24}>
                                    [{itemContainer?.Edu_No}] {itemContainer?.User_Nm}님{' '}
                                    <span style={{ color: 'red', fontWeight: '700' }}>연동 완료</span>
                                </Col>
                            </Row>
                        </Card>
                    ) : (
                        ''
                    )}
                </Card>
            )}
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
            {modal_Post && (
                <Modal
                    visible={true}
                    maskClosable={false}
                    title={<div style={{ padding: '5px 0' }}>주소 검색</div>}
                    // open={modal_Post}
                    onOk={Modal_Posts}
                    // onCancel={Modal_Post_Close}
                    closable={false}
                    width={567}
                    style={{
                        zIndex: 999
                    }}
                    footer={[]}
                >
                    <DaumPostcode onComplete={completeHandler} style={{ height: '445px' }} />
                    <br />
                    <Space style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button type="primary" onClick={Modal_Posts} style={{ width: '120px', height: '50px', fontWeight: '600' }}>
                            취소
                        </Button>
                    </Space>
                </Modal>
            )}
        </>
    );
};
