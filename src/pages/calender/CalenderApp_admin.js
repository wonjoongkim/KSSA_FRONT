import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Space, Row, Col, Modal, Button } from 'antd';

import interactionPlugin, { Draggable } from '@fullcalendar/interaction'; // 이 부분을 수정

import './Style.css';
const CalenderApp = () => {
    const { confirm } = Modal;
    const calendarRef = useRef(null);
    const [EventClickModal, setEventClickModal] = useState(false); // 이벤트 클릭 모달
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
            editable: true,
            locale: 'ko',
            weekends: true,
            dayMaxEvents: true,
            displayEventTime: false,
            themeSystem: 'Sandstone',
            events: [
                {
                    id: '1',
                    title: '항공경비 초기 [1차]',
                    start: '2024-01-01 00:00:00',
                    end: '2024-01-04 24:00:00',
                    constraint: 'availableForMeeting',
                    allDay: true,
                    color: '#ED7D31'
                },
                {
                    id: '2',
                    title: '항공경비 초기 [2차]',
                    start: '2024-01-08 00:00:00',
                    end: '2024-01-11 24:00:00',
                    allDay: true,
                    color: '#5B9BD5'
                },
                {
                    id: '3',
                    title: '항공경비 인증평가 [1차]',
                    start: '2024-01-12 00:00:00',
                    end: '2024-01-12 24:00:00',
                    allDay: true,
                    color: '#FFC000'
                },
                {
                    id: '4',
                    title: '항공경비 초기 [3차]',
                    start: '2024-01-13 00:00:00',
                    end: '2024-01-16 24:00:00',
                    allDay: true,
                    color: '#5B9BD5'
                }
                // {
                //     groupId: 'availableForMeeting',
                //     start: '2024-01-23T10:00:00',
                //     end: '2024-01-23T16:00:00',
                //     display: 'day'
                // }
            ],
            // dateClick: handleDateClick,
            eventDrop: handleEventDrag,
            eventClick: handleEventClick,
            eventReceive: handleEventReceive
            // dayClick: handleDayClick
        });

        calendar.render();

        // Draggable functionality
        // const externalEventsContainer = document.getElementById('external-events');
        // externalEventsContainer.innerHTML = ''; // 기존에 있는 외부 이벤트 삭제

        // Draggable functionality
        const draggable = new Draggable(document.getElementById('external-events'), {
            itemSelector: '.fc-event',
            eventData: function (eventEl) {
                return {
                    title: eventEl.innerText.trim(),
                    color: eventEl.getAttribute('color')
                };
            }
        });

        return () => {
            calendar.destroy();
            draggable.destroy();
        };
    }, []);

    // 이벤트를 드래그 하여 옮겼을때 발생
    const handleEventDrag = (info) => {
        alert('Day clicked: ' + info.dateStr);
        alert(`${info.event.startStr} 00:00:00 ~ ${info.event.endStr} 24:00:00`);
    };

    // 이벤트가 추가 되었을때 발생
    const handleEventReceive = (info) => {
        // 이벤트가 캘린더에 놓였을 때 처리할 로직을 여기에 추가
        alert(`이벤트 '${info.event.startStr} ~ ${info.event.endStr}에 ${info.event.title}'가 캘린더에 추가되었습니다.`);
    };

    // 이벤트를 클릭했을때 발생
    const handleEventClick = (info) => {
        handleEventClickModal_Open();

        alert('이벤트 정보: ' + info.event.title + '\n\nStart: ' + info.event.startStr + '\n\nEnd: ' + info.event.endStr);

        if (window.confirm(`'[${info.event.title}]' 이벤트를 삭제하시겠습니까? ?`)) {
            info.event.remove();
        }

        if (info.event.url) {
            window.open(info.event.url, '_blank');
        }
    };

    const handleEventClickModal_Open = () => {
        setEventClickModal(true);
    };
    const handleEventClickModal_Close = () => {
        setEventClickModal(false);
    };

    return (
        <>
            <div id="external-events">
                <Row gutter={[16]} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Col>
                        <strong>Draggable Events</strong>
                    </Col> */}
                    <Space>
                        <Col span={4}>
                            <div className="fc-event fc-color_1" color="#ed7d31">
                                검색요원 초기교육
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="fc-event fc-color_2" color="#993f02">
                                검색요원 정기교육
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="fc-event fc-color_5" color="#ffc000">
                                검색요원 인증평가
                            </div>
                        </Col>

                        <Col span={4}>
                            <div className="fc-event fc-color_3" color="#5b9bd5">
                                항공경비 초기교육
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="fc-event fc-color_4" color="#255d91">
                                항공경비 정기교육
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="fc-event fc-color_5" color="#ffc000">
                                항공경비 인증평가
                            </div>
                        </Col>
                    </Space>
                </Row>
            </div>
            <div ref={calendarRef} />
            {/* Pin Number 실패 모달 창 End */}
            <Modal
                maskClosable={false}
                open={EventClickModal}
                onOk={handleEventClickModal_Close}
                // closable={false}
                width={590}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <div style={{ width: '542px', textAlign: 'center', padding: '50px 0px' }}>
                    <div className="scwd_txt02">
                        <h1>
                            <span className="scwd_fail">확인후 다시 이용해주시기 바랍니다.</span>
                        </h1>
                    </div>
                    <Button
                        id="open-eig-modal"
                        data-mact="open"
                        data-minfo="eig-modal"
                        className="modal_btn conbtn01"
                        onClick={handleEventClickModal_Close}
                    >
                        확인
                    </Button>
                    {/* <button id="close-sev-modal" data-mact="close" data-minfo="sev-modal" className="modal_btn close_btn02"></button> */}
                </div>
            </Modal>
            {/* Pin Number 실패 모달 창 End */}
        </>
    );
};

export default CalenderApp;
