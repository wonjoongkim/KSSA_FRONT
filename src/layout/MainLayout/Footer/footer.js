import { Space, Row, Col, Typography } from 'antd';
import { useMediaQuery, Container, Link, Stack } from '@mui/material';
const { Paragraph, Text } = Typography;
import Logo from '../../../assets/images/kssa_logo.png';
export const Footer = () => {
    return (
        <Container maxWidth="xl" style={{ padding: '20px 0px' }}>
            {/* <Stack direction={'column'} justifyContent="center" spacing={2} textAlign={'center'}> */}
            <Row gutter={[0, 24]}>
                <Col xs={{ span: 23, offset: 1 }} lg={{ span: 10, offset: 2 }}>
                    <Row gutter={[0, 6]}>
                        <Col
                            xs={{ span: 12, justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}
                            lg={{ span: 7, offset: 2 }}
                        >
                            <img src={Logo} alt="LOGO" style={{ filter: 'grayscale(100%)' }} />
                        </Col>
                        <Col
                            xs={{ span: 12, justifyContent: 'flex-end', textAlign: 'center', alignItems: 'center' }}
                            lg={{ span: 12, offset: 2 }}
                        >
                            <Space>
                                <span style={{ alignItems: 'center', justifyContent: 'center' }}>개인정보보호정책</span>
                                <span style={{ alignItems: 'center', justifyContent: 'center' }}>이용약관</span>
                            </Space>
                        </Col>
                        <Col xs={{ span: 23, offset: 0.5 }} lg={{ span: 22, offset: 2 }}>
                            2024 &copy; Korea Security Specialist Academy Inc. All rights reserved.
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ span: 23, offset: 1 }} lg={{ span: 10, offset: 2 }}>
                    <Row gutter={[0, 6]}>
                        <Col xs={{ span: 23, offset: 0.5 }} lg={{ span: 22, offset: 2 }}>
                            서울특별시 강서구 방화대로 21길 72 범천빌딩 4층 한국보안인재개발원
                        </Col>
                        <Col xs={{ span: 23, offset: 0.5 }} lg={{ span: 22, offset: 2 }}>
                            T. 031 – 8027 – 9590 | F. 031 - 8027 - 9591
                        </Col>
                        <Col xs={{ span: 23, offset: 0.5 }} lg={{ span: 22, offset: 2 }}>
                            사업자등록번호 123-12-12345
                        </Col>
                    </Row>
                </Col>

                {/* <Paragraph>
                                <Row>
                                    <Col span={12}>
                                        <img src={Logo} alt="LOGO" style={{ filter: 'grayscale(100%)' }} />
                                    </Col>
                                    <Col span={6}>개인정보보호정책</Col>
                                    <Col span={6}>이용약관</Col>
                                </Row>
                            </Paragraph>
                            <Paragraph>2024 &copy; Korea Security Specialist Academy Inc. All rights reserved.</Paragraph>
                        </Col> */}
            </Row>
            {/* <Row>
                        <Col span={16}>
                            <Row>
                                <Col>
                                    <Paragraph>서울특별시 강서구 방화대로 21길 72 범천빌딩 4층 한국보안인재개발원</Paragraph>
                                </Col>
                                <Col>
                                    <Paragraph>T. 031 – 8027 – 9590 | F. 031 - 8027 - 9591</Paragraph>
                                </Col>
                                <Col>
                                    <Paragraph>사업자등록번호 123-12-12345</Paragraph>
                                </Col>
                            </Row>
                        </Col>
                    </Row> */}
            {/* </Stack> */}
        </Container>
    );
};
