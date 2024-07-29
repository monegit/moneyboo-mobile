import moment from "moment";

export function getMonthInfo(year: number, month: number) {
  const date = moment([year, month - 1]);

  return {
    date: date,
    length: date.daysInMonth(),
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
