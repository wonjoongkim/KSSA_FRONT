import { useEffect, useRef, useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Row, Col, Modal, Button, Card } from 'antd';

import interactionPlugin from '@fullcalendar/interaction';

import { useCalenderListMutation, useCalenderViewMutation } from '../../hooks/api/CalenderManagement/CalenderManagement';

import './Style.css';
const CalenderApp = () => {
    // const { confirm } = Modal;
    const calendarRef = useRef(null);
    const [EventClickModal, setEventClickModal] = useState(false); // 이벤트 클릭 모달
    const [eventsListContainer, setEventsListContainer] = useState([]); // 이벤트 리스트 정보
    const [eventsViewContainer, setEventsViewContainer] = useState([]); // 이벤트 상세 정보

    // ==================================================================================================
    // 현재날짜 START
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    // 현재날짜 End
    // ==================================================================================================

    // ==================================================================================================
    // API INTERFACE START

    // 교육일정 정보 (Calender List)
    const [CalenderList] = useCalenderListMutation();
    const handelCalenderList = async () => {
        const CalenderListResponse = await CalenderList({});
        CalenderListResponse?.data?.RET_CODE === '0000'
            ? setEventsListContainer(
                  CalenderListResponse?.data?.RET_DATA.map((e) => ({
                      id: e.Idx,
                      title: e.Edu_Nm,
                      start: e.Edu_Date_Start,
                      end: e.Edu_Date_End,
                      constraint: 'availableForMeeting',
                      allDay: true,
                      color:
                          e.Edu_State === '0'
                              ? e.Edu_Type === '1'
                                  ? '#ed7d31'
                                  : e.Edu_Type === '2'
                                  ? '#cd5402'
                                  : e.Edu_Type === '3'
                                  ? '#a54504'
                                  : e.Edu_Type === '4'
                                  ? '#5b9bd5'
                                  : e.Edu_Type === '5'
                                  ? '#3085d3'
                                  : e.Edu_Type === '6'
                                  ? '#255d91'
                                  : ''
                              : '#aeaeae',
                      EduColor:
                          e.Edu_State === '0'
                              ? e.Edu_Type === '1'
                                  ? '#ed7d31'
                                  : e.Edu_Type === '2'
                                  ? '#cd5402'
                                  : e.Edu_Type === '3'
                                  ? '#a54504'
                                  : e.Edu_Type === '4'
                                  ? '#5b9bd5'
                                  : e.Edu_Type === '5'
                                  ? '#3085d3'
                                  : e.Edu_Type === '6'
                                  ? '#255d91'
                                  : ''
                              : '#aeaeae',
                      EduStated: e.Edu_State === '0' ? 'Ing' : 'End',
                      EduProc:
                          e.Edu_Type === '1' || e.Edu_Type === '4'
                              ? '초기'
                              : e.Edu_Type === '2' || e.Edu_Type === '5'
                              ? '정기'
                              : e.Edu_Type === '3' || e.Edu_Type === '6'
                              ? '인증'
                              : '',
                      EduBaseline: e.Base_Line,
                      EduPeople: e.Edu_Personnel,
                      EduComplete: e.Edu_Personnel
                  }))
              )
            : '';
    };

    // 교육일정 상세 (Calender View)
    const [CalenderView] = useCalenderViewMutation();
    const handelCalenderView = async (idx) => {
        const CalenderViewResponse = await CalenderView({
            Idx: idx
        });
        CalenderViewResponse?.data?.RET_CODE === '0000'
            ? setEventsViewContainer({
                  id: CalenderViewResponse?.data?.RET_DATA[0].Idx,
                  title: CalenderViewResponse?.data?.RET_DATA[0].Edu_Nm,
                  start: CalenderViewResponse?.data?.RET_DATA[0].Edu_Date_Start,
                  end: CalenderViewResponse?.data?.RET_DATA[0].Edu_Date_End,
                  constraint: 'availableForMeeting',
                  allDay: true,
                  color:
                      CalenderViewResponse?.data?.RET_DATA[0].Edu_State === '0'
                          ? CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '1'
                              ? '#ed7d31'
                              : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '2'
                              ? '#cd5402'
                              : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '3'
                              ? '#a54504'
                              : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '4'
                              ? '#5b9bd5'
                              : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '5'
                              ? '#3085d3'
                              : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '6'
                              ? '#255d91'
                              : ''
                          : '#aeaeae',
                  EduColor:
                      CalenderViewResponse?.data?.RET_DATA[0].Edu_State === '0'
                          ? CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '1'
                              ? '#ed7d31'
                              : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '2'
                              ? '#cd5402'
                              : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '3'
                              ? '#a54504'
                              : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '4'
                              ? '#5b9bd5'
                              : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '5'
                              ? '#3085d3'
                              : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '6'
                              ? '#255d91'
                              : ''
                          : '#aeaeae',
                  EduStated: CalenderViewResponse?.data?.RET_DATA[0].Edu_State === '0' ? 'Ing' : 'End',
                  EduProc:
                      CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '1' || CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '4'
                          ? '초기'
                          : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '2' ||
                            CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '5'
                          ? '정기'
                          : CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '3' ||
                            CalenderViewResponse?.data?.RET_DATA[0].Edu_Type === '6'
                          ? '인증'
                          : '',
                  EduBaseline: CalenderViewResponse?.data?.RET_DATA[0].Base_Line,
                  EduPeople: CalenderViewResponse?.data?.RET_DATA[0].Edu_Personnel,
                  EduComplete: CalenderViewResponse?.data?.RET_DATA[0].Edu_Personnel
              })
            : '';
    };
    // API INTERFACE END
    // ==================================================================================================

    useEffect(() => {
        handelCalenderList();
    }, []);

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
            initialDate: formattedDate,
            businessHours: true,
            buttonIcons: true,
            locale: 'ko',
            weekends: true,
            dayMaxEvents: true,
            displayEventTime: false,
            themeSystem: 'Sandstone',
            events: eventsListContainer,
            eventClick: handleEventClick
        });
        calendar.render();
        return () => {
            calendar.destroy();
        };
    }, [eventsListContainer]);

    // 이벤트를 클릭했을때 발생
    const handleEventClick = (info) => {
        handleEventClickModal_Open();
        handelCalenderView(info.event.id);
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
                            backgroundColor: eventsViewContainer.EduColor,
                            color: '#FFFFFF',
                            fontWeight: '600',
                            border: '0px',
                            fontSize: '18px',
                            marginBottom: '25px',
                            borderRadius: '12px'
                        }}
                    >
                        {eventsViewContainer.EduStated === 'Ing' ? '교육 모집중' : '교육종료'}
                    </Card>
                    <Row gutter={[8, 8]}>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsViewContainer.EduColor,
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
                                {eventsViewContainer.title}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsViewContainer.EduColor,
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
                                {eventsViewContainer.EduProc}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsViewContainer.EduColor,
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
                                {eventsViewContainer.EduBaseline}차수
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsViewContainer.EduColor,
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
                                {eventsViewContainer.start.slice(0, 10)}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsViewContainer.EduColor,
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
                                {eventsViewContainer.end.slice(0, 10)}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsViewContainer.EduColor,
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
                                {eventsViewContainer.EduPeople}명
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                size="small"
                                style={{
                                    backgroundColor: eventsViewContainer.EduColor,
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
                                {eventsViewContainer.EduComplete}명
                            </Card>
                        </Col>
                    </Row>
                    <Button
                        style={{
                            marginTop: '50px',
                            width: '120px',
                            height: '50px',
                            borderRadius: '10px',
                            backgroundColor: eventsViewContainer.EduColor,
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
