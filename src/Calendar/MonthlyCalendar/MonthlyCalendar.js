import React from "react";

import classes from "./MonthlyCalendar.module.scss";
import { calendarColorPicker } from "../../utils/utils";

const MonthlyCalendar = (props) => {
  return props.days.map((day, i) => {
    // Dimmed
    if (day.dim && day.left) {
      return (
        <div
          className={classes.Dim}
          key={i}
          onClick={props.changeMonth}
          data-arrow={"left"}
        >
          <span className={classes.Day}>{day.day}</span>
        </div>
      );
    }

    // Dimmed
    if (day.dim && !day.left) {
      return (
        <div
          className={classes.Dim}
          key={i}
          onClick={props.changeMonth}
          data-arrow={"right"}
        >
          <span className={classes.Day}>{day.day}</span>
        </div>
      );
    }

    if (day.sessions.length > 0) {
      return (
        <div
          className={classes.MonthlyCalendar}
          key={i}
          onClick={() => props.dayClick(day)}
        >
          <span className={classes.Day}>{day.day}</span>
          {day.sessions.map((session) => {
            const color = calendarColorPicker(session.name);
            return (
              <div
                className={classes.Session}
                style={{
                  borderBottom: `2px solid ${color}`,
                }}
                key={session._id}
              >
                <span className={classes.Time}>{session.time}</span>
                <p className={classes.Name}>
                  {session.name}
                  <span className={classes.Instructor}>
                    {session.instructor.name}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div className={classes.MonthlyCalendar} key={i}>
        <span className={classes.Day}>{day.day}</span>
      </div>
    );

    // return (
    //   <div
    //     className={classes.MonthlyCalendar}
    //     key={i}
    //     onClick={() => props.dayClick(day)}
    //   >
    //     <span className={classes.Day}>{day.day}</span>
    //   </div>
    // );
  });
};

export default MonthlyCalendar;
