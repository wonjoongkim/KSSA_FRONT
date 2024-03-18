import { useEffect, useRef, useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Row, Col, Modal, Button, Card } from 'antd';

import interactionPlugin from '@fullcalendar/interaction';

import './Style.css';
const CalenderApp = () => {
    // const { confirm } = Modal;
    const calendarRef = useRef(null);
    const [EventClickModal, setEventClickModal] = useState(false); // 이벤트 클릭 모달
    const [eventsContainer, setEventsContainer] = useState([]); // 이벤트 정보

    useEffect(() => {
        const calendarEl = calendarRef.current;
        const calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            height: '850px',
            // defaultView: 'agendaDay',
            initialDate: '2024-01-15',
            businessHours: true,
            buttonIcons: true,
            locale: 'ko',
            weekends: true,
            dayMaxEvents: true,
            displayEventTime: false,
            themeSystem: 'Sandstone',
            // eventContent: function (arg) {
            //     return {
            //         html: `<div style="cursor: pointer;">${arg.event.title}</div>`
            //     };
            // },
            events: [
                {
                    id: '1',
                    title: '항공경비 초기 [1차]',
                    start: '2024-01-01 00:00:00',
                    end: '2024-01-04 24:00:00',
                    constraint: 'availableForMeeting',
                    allDay: true,
                    // color: '#ED7D31'
                    color: '#AAAAAA',
                    EduColor: '#AAAAAA',
                    EduStated: 'End',
                    EduProc: '초기',
                    EduBaseline: '1',
                    EduPeople: '30',
                    EduComplete: '30'
                },
                {
                    id: '2',
                    title: '항공경비 초기 [2차]',
                    start: '2024-01-08 00:00:00',
                    end: '2024-01-11 24:00:00',
                    allDay: true,
                    // color: '#5B9BD5'
                    color: '#AAAAAA',
                    EduStated: 'End',
                    EduColor: '#AAAAAA',
                    EduProc: '초기',
                    EduBaseline: '2',
                    EduPeople: '28',
                    EduComplete: '25'
                },
                {
                    id: '3',
                    title: '항공경비 인증평가 [1차]',
                    start: '2024-01-12 00:00:00',
                    end: '2024-01-12 24:00:00',
                    allDay: true,
                    color: '#FFC000',
                    EduStated: 'Ing',
                    EduColor: '#FFC000',
                    EduProc: '초기',
                    EduBaseline: '1',
                    EduPeople: '30',
                    EduComplete: '29'
                },
                {
                    id: '4',
                    title: '항공경비 초기 [3차]',
                    start: '2024-01-13 00:00:00',
                    end: '2024-01-16 24:00:00',
                    allDay: true,
                    color: '#5B9BD5',
                    EduStated: 'Ing',
                    EduColor: '#5B9BD5',
                    EduProc: '초기',
                    EduBaseline: '3',
                    EduPeople: '24',
                    EduComplete: '24'
                }
                // {
                //     groupId: 'availableForMeeting',
                //     start: '2024-01-23T10:00:00',
                //     end: '2024-01-23T16:00:00',
                //     display: 'day'
                // }
            ],
            eventClick: handleEventClick
        });
        calendar.render();
        return () => {
            calendar.destroy();
        };
    }, []);

    // 이벤트를 클릭했을때 발생
    const handleEventClick = (info) => {
        handleEventClickModal_Open();
        // console.log(info.event.extendedProps.EduStated);
        setEventsContainer({
            EduStated: info.event.extendedProps.EduStated,
            EduColor: info.event.extendedProps.EduColor,
            EduProc: info.event.extendedProps.EduProc,
            EduBaseline: info.event.extendedProps.EduBaseline,
            Title: info.event.title,
            StartDate: info.event.startStr,
            EndDate: info.event.endStr,
            EduPeople: info.event.extendedProps.EduPeople,
            EduComplete: info.event.extendedProps.EduComplete
        });
        if (info.event.url) {
            window.open(info.event.url, '_blank');
        }
    };

    // Modal창 열기
    const handleEventClickModal_Open = () => {
        setEventClickModal(true);
    };

    // Modal창 닫기 (교육 모집중)
    const handleEventClickModal_Close = () => {
        setEventClickModal(false);
    };

    return (
        <>
            <div ref={calendarRef} />
            {/* 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={EventClickModal}
                onOk={handleEventClickModal_Close}
                closable={false}
                width={450}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <div style={{ textAlign: 'center' }}>
                    <Card
                        size="small"
                        style={{
                            backgroundColor: eventsContainer.EduColor,
                            color: '#FFFFFF',
                            fontWeight: '600',
                            border: '0px',
                            fontSize: '18px',
                            marginBottom: '25px',
                            borderRadius: '12px'
                        }}
                    >
                        {eventsContainer.EduStated === 'Ing' ? '교육 모집중' : '교육종료'}
                    </Card>
                    <Row gutter={[8, 8]}>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsContainer.EduColor,
                                    color: '#FFFFFF',
                                    fontSize: '15px',
                                    borderRadius: '50px',
                                    fontWeight: '550'
                                }}
                            >
                                교육 과정
                            </Card>
                        </Col>
                        <Col span={16}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: '#f0f0f0',
                                    fontSize: '15px'
                                }}
                            >
                                {eventsContainer.Title}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsContainer.EduColor,
                                    color: '#FFFFFF',
                                    fontSize: '15px',
                                    borderRadius: '50px',
                                    fontWeight: '550'
                                }}
                            >
                                교육 구분
                            </Card>
                        </Col>
                        <Col span={16}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: '#f0f0f0',
                                    fontSize: '15px'
                                }}
                            >
                                {eventsContainer.EduProc}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsContainer.EduColor,
                                    color: '#FFFFFF',
                                    fontSize: '15px',
                                    borderRadius: '50px',
                                    fontWeight: '550'
                                }}
                            >
                                교육 차수
                            </Card>
                        </Col>
                        <Col span={16}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: '#f0f0f0',
                                    fontSize: '15px'
                                }}
                            >
                                {eventsContainer.EduBaseline}차수
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsContainer.EduColor,
                                    color: '#FFFFFF',
                                    fontSize: '15px',
                                    borderRadius: '50px',
                                    fontWeight: '550'
                                }}
                            >
                                교육 시작일
                            </Card>
                        </Col>
                        <Col span={16}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: '#f0f0f0',
                                    fontSize: '15px'
                                }}
                            >
                                {eventsContainer.StartDate}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsContainer.EduColor,
                                    color: '#FFFFFF',
                                    fontSize: '15px',
                                    borderRadius: '50px',
                                    fontWeight: '550'
                                }}
                            >
                                교육 종료일
                            </Card>
                        </Col>
                        <Col span={16}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: '#f0f0f0',
                                    fontSize: '15px'
                                }}
                            >
                                {eventsContainer.EndDate}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsContainer.EduColor,
                                    color: '#FFFFFF',
                                    fontSize: '15px',
                                    borderRadius: '50px',
                                    fontWeight: '550'
                                }}
                            >
                                교육 인원
                            </Card>
                        </Col>
                        <Col span={16}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: '#f0f0f0',
                                    fontSize: '15px'
                                }}
                            >
                                {eventsContainer.EduPeople}명
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsContainer.EduColor,
                                    color: '#FFFFFF',
                                    fontSize: '15px',
                                    borderRadius: '50px',
                                    fontWeight: '550'
                                }}
                            >
                                교육 이수
                            </Card>
                        </Col>
                        <Col span={16}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: '#f0f0f0',
                                    fontSize: '15px'
                                }}
                            >
                                {eventsContainer.EduComplete}명
                            </Card>
                        </Col>
                    </Row>
                    <Button
                        style={{
                            marginTop: '50px',
                            width: '120px',
                            height: '50px',
                            borderRadius: '10px',
                            backgroundColor: '#ED7D31',
                            color: '#ffffff',
                            border: '0px',
                            fontWeight: '500',
                            fontSize: '17px'
                        }}
                        id="open-eig-modal"
                        data-mact="open"
                        data-minfo="eig-modal"
                        onClick={handleEventClickModal_Close}
                    >
                        Close
                    </Button>
                </div>
            </Modal>
            {/* 모달 창 End */}
        </>
    );
};

export default CalenderApp;
