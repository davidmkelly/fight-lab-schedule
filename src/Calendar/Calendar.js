import React, { useState, useEffect, useReducer } from "react";

import useAlert from "../hooks/alert";
import useHttp from "../hooks/http";
import classNames from "./Calendar.module.scss";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import MonthlyCalendar from "./MonthlyCalendar/MonthlyCalendar";
import Modal from "../UI/Modal/Modal";
import ExpandedDate from "./ExpandedDate/ExpandedDate";
import Alert from "../UI/Alert/Alert";
import { buildMonthlyCalendar } from "../utils/dateUtils";

const classReducer = (currentClasses, action) => {
  switch (action.type) {
    case "SET":
      return action.classes;
    default:
      throw new Error("SHOULD NOT HAPPEN!");
  }
};

const Calendar = () => {
  const { setAlert, isAlert, message, type } = useAlert();
  const { isLoading, sendRequest, resData, error, reqExtra, reqId } = useHttp();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState(null);
  const [daysArray, setDaysArray] = useState([]);
  const [classes, dispatch] = useReducer(classReducer, []);
  const [selectedDay, setSelectedDay] = useState();

  useEffect(() => {
    sendRequest(`class/month/${date.getMonth() + 1}`, "GET", null, null, "set");
  }, [date, sendRequest]);

  useEffect(() => {
    setDaysInMonth(
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    );
  }, [date]);

  useEffect(() => {
    setDaysArray(buildMonthlyCalendar(date, classes));
  }, [classes, date, daysInMonth]);

  useEffect(() => {
    if (error) return setAlert("Error", error);
    if (isLoading) return;

    if (reqId) {
      setTimeout(() => {
        setShow(false);
      }, 500);
    }

    switch (reqId) {
      case "set":
        return dispatch({ type: "SET", classes: resData.data.data.classes });
      default:
        break;
    }
  }, [resData, reqExtra, isLoading, error, reqId, setAlert]);

  const changeMonthHandler = (event) => {
    if (event.target.dataset.arrow === "right")
      setDate(new Date(date.getFullYear(), date.getMonth() + 1));

    if (event.target.dataset.arrow === "left")
      setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const selectDayHandler = (day) => {
    setSelectedDay(day);
    setShow(true);
  };

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div className={classNames.Calendar}>
      {isAlert && <Alert msg={message} alertType={type} />}
      <Modal show={show} modalClosed={toggleModal}>
        <ExpandedDate day={selectedDay} close={toggleModal} />
      </Modal>
      <CalendarHeader
        date={date}
        iconClicked={(event) => changeMonthHandler(event)}
      />

      <MonthlyCalendar
        dayClick={selectDayHandler}
        days={daysArray}
        changeMonth={(event) => changeMonthHandler(event)}
      />
    </div>
  );
};

export default Calendar;
