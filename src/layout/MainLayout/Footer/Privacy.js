import { Space, Card, Row, Col, Typography, Modal } from 'antd';
import { Container } from '@mui/material';
import { FormOutlined, HomeOutlined } from '@ant-design/icons';
const Privacy = () => {
    const { Meta } = Card;
    return (
        <Container maxWidth="xl" style={{ padding: '10px 0px' }}>
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
                                개인정보취급방침
                            </div>
                        </div>
                    }
                    style={{ marginBottom: '50px', textAlign: 'center' }}
                />
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 1. 수집하는 개인정보 항목
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. <br />
                            개인정보 수집방법 : 홈페이지(회원가입, 게시판, 신청서)
                            <br />
                            <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                <p>
                                    1. 로그인ID
                                    <br />
                                    2. 패스워드
                                    <br />
                                    3. 별명
                                    <br />
                                    4. 이메일
                                    <br />
                                    5. 서비스 이용기록
                                    <br />
                                    6. 접속 로그
                                    <br />
                                    7. 쿠키
                                    <br />
                                    8. 접속 IP 정보
                                    <br />
                                    9. 결제기록
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 2. 개인정보의 수집 및 이용목적
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                            <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                <p>
                                    <div style={{ fontWeight: '700' }}>1. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</div>
                                    <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                        컨텐츠 제공, 물품배송 또는 청구서 등 발송, 본인인증, 구매 및 요금 결제, 요금추심
                                    </div>
                                </p>
                                <p>
                                    <div style={{ fontWeight: '700' }}>2. 회원 관리</div>
                                    <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                        회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 가입
                                        의사 확인
                                    </div>
                                </p>
                                <p>
                                    <div style={{ fontWeight: '700' }}>3. 마케팅 및 광고에 활용</div>
                                    <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                        접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
                                    </div>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 3. 개인정보의 보유 및 이용기간
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                            <br />
                            단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안
                            회원정보를 보관합니다.
                            <p>
                                <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                    1. 보존 항목 : 로그인ID , 결제기록
                                    <br />
                                    2. 보존 근거 : 신용정보의 이용 및 보호에 관한 법률
                                    <br />
                                    3. 보존 기간 : 1년
                                    <br />
                                </div>
                            </p>
                            <p>
                                ○ 표시/광고에 관한 기록 : 6개월 (전자상거래등에서의 소비자보호에 관한 법률)
                                <br />
                                ○ 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)
                                <br />
                                ○ 대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)
                                <br />
                                ○ 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)
                                <br />○ 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 (신용정보의 이용 및 보호에 관한 법률)
                            </p>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 4. 개인정보의 파기절차 및 방법
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            <p>
                                회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다.
                                <br />
                                파기절차 및 방법은 다음과 같습니다.
                            </p>
                            <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                <div style={{ fontWeight: '700' }}>1. 파기절차</div>
                                <div style={{ textAlign: 'left', paddingLeft: '15px', paddingBottom: '10px' }}>
                                    회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의
                                    서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된
                                    후 파기되어집니다.
                                    <br />
                                    별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지
                                    않습니다.
                                </div>
                                <div style={{ fontWeight: '700' }}>2. 파기방법</div>
                                <div style={{ textAlign: 'left', paddingLeft: '15px', paddingBottom: '10px' }}>
                                    전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 5. 개인정보 제공
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            <p>회사는 이용자님의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                            <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                1. 이용자님이 사전에 동의한 경우
                                <br />
                                2. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                                <br />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 6. 수집한 개인정보의 위탁
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            회사는 이용자님의 동의없이 이용자님의 정보를 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁
                            대상자와 위탁 업무 내용에 대해 이용자님께 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다.
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 7. 이용자 및 법정대리인의 권리와 그 행사방법
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
                            <br />
                            이용자들의 개인정보 조회,수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을 가입해지(동의철회)를 위해서는
                            “회원탈퇴”를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.
                            <br />
                            혹은 개인정보관리책임자에게 서면 또는 이메일로 연락하시면 지체없이 조치하겠습니다.
                            <br />
                            귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지
                            않습니다.
                            <br />
                            또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이
                            이루어지도록 하겠습니다.
                            <br />
                            회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 “회사가 수집하는 개인정보의 보유 및 이용기간”에 명시된
                            바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 8. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            <p>
                                회사는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 회사의 홈페이지를
                                운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에
                                저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.
                            </p>
                            <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                <div>
                                    <div style={{ fontWeight: '700' }}>1. 쿠키 등 사용 목적</div>
                                    <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                        회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종
                                        이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공 이용자는 쿠키
                                        설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자께서는 웹브라우저에서 옵션을 설정함으로써 모든
                                        쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도
                                        있습니다.
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <div style={{ fontWeight: '700' }}>2. 쿠키 설정 거부 방법</div>
                                    <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                                        예: 쿠키 설정을 거부하는 방법으로는 이용자님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든
                                        쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
                                        <br />
                                        설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 단,
                                        귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 9. 개인정보에 관한 민원서비스
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            <p>
                                회사는 이용자님의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이
                                개인정보관리책임자를 지정하고 있습니다. 개인정보관리책임자 : 김용욱 귀하께서는 회사의 서비스를 이용하시며
                                발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자에게 신고하실 수 있습니다. 회사는 이용자들의
                                신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다. 기타 개인정보침해에 대한 신고나 상담이 필요하신
                                경우에는 아래 기관에 문의하시기 바랍니다.
                            </p>
                            <p>
                                1. 개인정보보호 침해센터 (privacy.kisa.or.kr / 02-405-5118)
                                <br />
                                2. 정보보호마크인증위원회 (www.eprivacy.or.kr / 02-580-9531~2)
                                <br />
                                3. 대검찰청 사이버범죄신고 (spo.go.kr / 02-3480-2000) 4.경찰청 사이버안전국 (www.ctrc.go.kr / 1566-0112)
                            </p>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 10. 기타
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            홈페이지에 링크되어 있는 웹사이트들이 개인정보를 수집하는 개별적인 행위에 대해서는 본 "개인정보취급방침"이
                            적용되지 않음을 알려 드립니다.
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ border: '0px', margin: '20px' }}>
                <Meta
                    title={
                        <span style={{ fontSize: '18px' }}>
                            <FormOutlined /> 11. 고지의 의무
                        </span>
                    }
                    style={{ marginBottom: '10px' }}
                />
                <Row
                    style={{
                        borderTop: '2px solid #e0e0e0',
                        borderBottom: '2px solid #e0e0e0',
                        padding: '10px',
                        backgroundColor: '#f9f7f7'
                    }}
                >
                    <Col span={24} style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                        <div style={{ textAlign: 'left', paddingLeft: '15px', lineHeight: '31px' }}>
                            <p>
                                현 개인정보취급방침의 내용이 변경될 경우에는 개정 최소 7일전부터 홈페이지의 "공지사항"을 통해 고지
                                하겠습니다.
                            </p>
                            <p>- 공고일자 : 2023년 4월 1일</p>
                            <p>- 시행일자 : 2023년 4월 8일</p>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};
export default Privacy;
