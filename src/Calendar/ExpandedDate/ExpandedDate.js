import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./ExpandedDate.module.scss";
import { calendarColorPicker } from "../../utils/utils";
import { utcToFormattedDate } from "../../utils/dateUtils";

const ExpandedDate = (props) => {
  if (props?.day?.sessions.length > 0) {
    return (
      <div className={classes.ExpandedDate}>
        <h2 className={classes.Date}>
          {utcToFormattedDate(props.day.sessions[0].date)}
        </h2>
        {props.day.sessions.map((session) => {
          const color = calendarColorPicker(session.name);
          return (
            <div
              className={classes.Class}
              style={{
                borderBottom: `2px solid ${color}`,
              }}
              key={session._id}
            >
              <p className={classes.Time}>Time: {session.time}</p>
              <p className={classes.Name}>Class Name: {session.name}</p>
              <p className={classes.Instructor}>
                Instructor: {session.instructor.name}
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={classes.ExpandedDate}>
      <h2 className={classes.Date}>
        {props.day?.fullDate.toLocaleString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        })}
      </h2>
      <div className={classes.buttonGroup}>
        <Button
          clicked={props.click}
          btnType={"Success"}
          where={"ExpandedDateForm"}
        >
          Create Class
        </Button>
        <Button
          clicked={props.close}
          btnType={"Danger"}
          where={"ExpandedDateForm"}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default ExpandedDate;
