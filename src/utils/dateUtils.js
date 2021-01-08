// BASIC DATE FUNCTIONS
export const utcToFormattedDate = utcDate =>
  new Date(utcDate).toLocaleString('en-US', { timeZone: 'UTC' }).split(',')[0];

export const findMonthStartDay = date => {
  // FIND START DATE OF MONTH
  const startDay = new Date(date.getFullYear(), date.getMonth(), 1);
  // FIND WHAT DAY IT IS : EX: 0 === MONDAY
  const startDayDay = startDay.getDay();
  //  SUBSTRACT TO MAKE START DATE === MONDAY
  startDay.setDate(startDay.getDate() - startDayDay);

  return startDay;
};

export const findMonthEndDay = date => {
  // FIND END DATE OF MONTH
  const endDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  // FIND WHAT DAY IT IS : EX: 0 === MONDAY
  const endDayDay = endDay.getDay();
  //  SUBSTRACT TO MAKE START DATE === SUNDAY
  const endDateToSun = 6 - endDayDay;
  endDay.setDate(endDay.getDate() + endDateToSun);

  return endDay;
};

const findBiWeekStartDay = date => {
  // SELECTED DATE
  const startDay = new Date(date);
  // FIND WHAT DAY IT IS : EX: 0 === MONDAY
  const startDayDay = startDay.getDay();
  //  SUBTRACT TO MAKE START DATE === MONDAY
  startDay.setDate(startDay.getDate() - startDayDay);

  return startDay;
};

const findBiWeekEndDay = date => {
  // GET THE START DAY
  const startDay = findBiWeekStartDay(date);
  // ADD 13 TO GET THE END OF BI WEEKLY
  return new Date(startDay.setDate(startDay.getDate() + 13));
};

export const findNextBiWeekStartDay = date => {
  const previousEndDay = findBiWeekEndDay();
  // JUST ADD ONE TO THE END TO GET THE NEW START DAY
  return new Date(previousEndDay.setDate(previousEndDay.getDate() + 1));
};

export const findPreviousBiWeekStartDay = date => {
  const previousStartDay = findBiWeekStartDay();
  // JUST MINUS 13 TO FIND THE NEW START DAY
  return new Date(previousStartDay.setDate(previousStartDay.getDate() - 13));
};

// CALENDAR BUILDERS
const createCalendarDays = (startDate, endDate, date) => {
  const days = [];
  for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
    const month = date.getMonth() + 1;
    const dayNumber = day.getDate();
    const year = date.getFullYear();
    const fullDate = new Date(`${month}/${dayNumber}/${year}`);

    days.push({
      fullDate: fullDate, // Set hours, minutes, seconds  AND MS,
      month: month,
      day: dayNumber,
      year: year,
      sessions: [],
      dim: false,
    });
  }
  return days;
};

export const buildMonthlyCalendar = (date, classes) => {
  const startDate = findMonthStartDay(date);
  const endDate = findMonthEndDay(date);
  const daysArray = createCalendarDays(startDate, endDate, date);

  // Catching previous days in the monthly calendar
  let num = 0;
  for (const day of daysArray) {
    num++;
    day.dim = true;
    day.left = true;
    if (day.day === 1) {
      day.dim = false;
      break;
    }
  }

  // Shallow copy calendarArray to prepare for reverse
  const reverseCalendarArray = [...daysArray];

  // Catching trailing days in the monthly calendar
  for (const day of reverseCalendarArray.reverse()) {
    day.dim = true;
    day.left = false;

    if (day.day === new Date(day.year, day.month, 0).getDate()) {
      day.dim = false;
      break;
    }
  }

  for (const curClass of classes) {
    const currentClassDate = new Date(curClass.date).getUTCDate();

    daysArray[currentClassDate + (num - 2)].sessions.push(curClass);
  }

  return daysArray;
};

export const buildBiWeeklyCalendar = (date, classes) => {
  const startDate = findBiWeekStartDay(date);
  const endDate = findBiWeekEndDay(date);
  const biWeekArray = createCalendarDays(startDate, endDate, date);

  for (const curClass of classes) {
    const currentClassDate = new Date(curClass.date).getUTCDate();

    if (biWeekArray[currentClassDate + 1]) {
      biWeekArray[currentClassDate + 1].sessions.push(curClass);
    }
  }

  return biWeekArray;
};
