import moment from "moment";

function getSafeDate(year: number, month: number): Array<number> {
  if (month < 0) {
    return [year - 1, 11];
  } else if (month > 11) {
    return [year + 1, 0];
  } else {
    return [year, month];
  }
}

export function getMonthInfo(year: number, month: number) {
  const date = moment(getSafeDate(year, month - 1));

  return {
    length: date.clone().daysInMonth(),
    firstWeekDay: date.clone().startOf("month").toDate().getDay(),
    lastWeekDay: date.clone().endOf("month").toDate().getDay(),
  };
}

export function getTodayInfo() {
  const date = moment();

  return {
    years: date.year(),
    months: date.month(),
    days: date.date(),
    weekday: date.day(),
  };
}
