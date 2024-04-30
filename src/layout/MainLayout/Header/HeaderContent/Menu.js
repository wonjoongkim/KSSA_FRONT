/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Box, useMediaQuery } from '@mui/material';
import { Menu } from 'antd';
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
    ReconciliationOutlined,
    CalendarOutlined,
    NotificationOutlined,
    SaveOutlined
} from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Menus = () => {
    const navigate = useNavigate();

    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const [searchtext, setSearchtext] = useState('');
    const rootSubmenuKeys = ['introduction', 'procedure', 'training', 'border', 'data'];
    const [current, setCurrent] = useState(null);
    const [openKeys, setOpenKeys] = useState([]);

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const items = [
        {
            label: '교육원소개',
            key: 'introduction',
            // icon: <ReconciliationOutlined />,
            children: [
                {
                    type: 'group',
                    label: '',
                    children: [
                        {
                            label: '원장인사',
                            key: '/contents/Greeting',
                            paths: '/contents/Greeting'
                        },
                        {
                            label: '조직도',
                            key: '/contents/Groups',
                            paths: '/contents/Groups'
                        },
                        {
                            label: '교육시설',
                            key: '/contents/Facility',
                            paths: '/contents/Facility'
                        },
                        {
                            label: '오시는 길',
                            key: '/contents/Directions',
                            paths: '/contents/Directions'
                        }
                    ]
                }
            ]
        },
        {
            label: '교육과정',
            key: 'procedure',
            // icon: <CalendarOutlined />,
            children: [
                {
                    type: 'group',
                    label: '',
                    children: [
                        {
                            label: '보안검색 교육과정',
                            key: '/contents/Security',
                            paths: '/contents/Security'
                        },
                        {
                            label: '항공경비 교육과정',
                            key: '/contents/Airline',
                            paths: '/contents/Airline'
                        },
                        {
                            label: '정원 및 운영계획',
                            key: '/contents/Operate',
                            paths: '/contents/Operate'
                        },
                        {
                            label: '입교절차',
                            key: '/contents/Admission',
                            paths: '/contents/Admission'
                        }
                    ]
                }
            ]
        },
        {
            label: '직업훈련비지원',
            key: 'training',
            // icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: '',
                    children: [
                        {
                            label: '관련근거',
                            key: '/contents/Reason',
                            paths: '/contents/Reason'
                        },
                        {
                            label: '신청방법',
                            key: '/contents/Application',
                            paths: '/contents/Application'
                        }
                    ]
                }
            ]
        },
        {
            label: '게시판',
            key: 'border',
            // icon: <NotificationOutlined />,
            children: [
                {
                    type: 'group',
                    label: '',
                    children: [
                        {
                            label: '공지사항',
                            key: '/contents/Notification',
                            paths: '/contents/Board/Lists',
                            state: {
                                board: '게시판',
                                flag: 'Notice',
                                title: '공지사항'
                            }
                        },
                        {
                            label: '교육안내',
                            key: '/contents/Education',
                            paths: '/contents/Board/Lists',
                            state: {
                                board: '게시판',
                                flag: 'Education',
                                title: '교육안내'
                            }
                        },
                        {
                            label: 'FAQ',
                            key: '/contents/Faq',
                            paths: '/contents/Board/Lists',
                            state: {
                                board: '게시판',
                                flag: 'Faq',
                                title: 'FAQ'
                            }
                        }
                    ]
                }
            ]
        },
        {
            label: '자료실',
            key: 'data',
            // icon: <SaveOutlined />,
            children: [
                {
                    type: 'group',
                    label: '',
                    children: [
                        {
                            label: '최신뉴스',
                            key: '/contents/News',
                            paths: '/contents/Board/Lists',
                            state: {
                                board: '자료실',
                                flag: 'News',
                                title: '최신뉴스'
                            }
                        },
                        {
                            label: '관련법령',
                            key: '/contents/Laws',
                            paths: '/contents/Board/Lists',
                            state: {
                                board: '자료실',
                                flag: 'Laws',
                                title: '관련법령'
                            }
                        },
                        {
                            label: '교육자료',
                            key: '/contents/Datum',
                            paths: '/contents/Board/Lists',
                            state: {
                                board: '자료실',
                                flag: 'Datum',
                                title: '교육자료'
                            }
                        },
                        {
                            label: '사진자료',
                            key: '/contents/Picture',
                            paths: '/contents/Picture',
                            state: {
                                board: '자료실',
                                flag: 'Picture',
                                title: '사진자료'
                            }
                        }
                    ]
                }
            ]
        }
        // {
        //     label: (
        //         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        //             대한민국 항공보안협회
        //         </a>
        //     ),
        //     key: 'alipay'
        // }
    ];

    const onClick = (e) => {
        // console.log('click ', e.item.props.paths);
        // console.log('location ', e.item.props);
        setCurrent(e.key);
        navigate(e.item.props.paths, { state: e.item.props.state });
    };

    const itemStyle = { margin: '0px 20px', fontWeight: '600', fontSize: '22px', letterSpacing: '-1px' }; // 스타일 객체 정의
    const applyMarginToItems = (items) => {
        return items.map((item) => {
            if (item) {
                // 일반 메뉴 항목에 스타일 적용
                return {
                    ...item,
                    style: itemStyle
                };
            }
        });
    };

    const menuItemsWithMargin = applyMarginToItems(items);
    return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Menu
                onClick={onClick}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                selectedKeys={[current]}
                mode={matchesXs === false ? 'horizontal' : 'inline'}
                items={menuItemsWithMargin}
                location={items.map((m, i) => {
                    m.key === 'border' || m.key === 'data'
                        ? m.children[0].children.map((l) => {
                              l.location;
                          })
                        : '';
                })}
            />
        </Box>
    );
};

export default Menus;
