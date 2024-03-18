/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import MainCard from 'components/MainCard';
import { Spin, Typography, Card, FloatButton, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import GroupsImg from '../../../assets/images/groups.png';
import './Groups_Style.css';

export const Groups = () => {
    const { Meta } = Card;
    const [loading, setLoading] = useState(true); // 로딩 초기값

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLoading(false);
        }, 300);
        return () => clearTimeout(timerId);
    }, []);
    return (
        <>
            <MainCard
                title={
                    <>
                        <Breadcrumb
                            items={[
                                {
                                    href: '/',
                                    title: <HomeOutlined />
                                },
                                {
                                    title: <span>교육원 소개</span>
                                },
                                {
                                    title: '조직도'
                                }
                            ]}
                        />
                    </>
                }
            >
                <Typography variant="body1">
                    <Spin tip="Loading..." spinning={loading}>
                        <Card style={{ border: '0px' }}>
                            <Meta
                                title={
                                    <div style={{ display: 'inline-block' }}>
                                        <div style={{ borderBottom: '3px solid #666666', paddingBottom: '3px', fontSize: '23px' }}>
                                            조직도
                                        </div>
                                    </div>
                                }
                                style={{ marginBottom: '80px', textAlign: 'center' }}
                            />
                            <div className="image-container">
                                <img className="responsive-image" src={GroupsImg} alt="Responsive Image" style={{ width: '670px' }} />
                            </div>
                        </Card>
                    </Spin>
                </Typography>
            </MainCard>
            <FloatButton.BackTop />
        </>
    );
};
