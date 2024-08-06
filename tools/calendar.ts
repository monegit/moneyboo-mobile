import moment, { Moment } from "moment";

export class CalendarTool {
  private date: Moment;
  private maxCalendarDaysLength: number;
  private today = moment().toDate();

  constructor(year: number, month: number, maxCalendarDaysLength: number) {
    this.date = moment([year, month - 1]);
    this.maxCalendarDaysLength = maxCalendarDaysLength;
  }

  public getCalendarTableData(): Array<CalendarDay> {
    let days: CalendarDay[] = [];

    // Prev Month Days
    const prevMonthDate = this.date.clone().add(-1, "month");
    for (
      let day = prevMonthDate.daysInMonth() - this.date.day() + 1;
      day <= this.date.clone().add(-1, "month").daysInMonth();
      day++
    ) {
      days.push({
        date: prevMonthDate
          .clone()
          .add(day - 1, "day")
          .format("YYYY-MM-DD"),
      });
    }

    // Current Month Days
    for (let day = 1; day <= this.date.daysInMonth(); day++) {
      days.push({
        date: this.date
          .clone()
          .add(day - 1, "day")
          .format("YYYY-MM-DD"),
      });
    }

    // Next Month Days
    const nextMonthDaysLength = days.length;
    const nextMonthDate = this.date.clone().add(1, "month");
    for (
      let day = 1;
      day <= this.maxCalendarDaysLength - nextMonthDaysLength;
      day++
    ) {
      days.push({
        date: `${nextMonthDate
          .clone()
          .add(day - 1, "day")
          .format("YYYY-MM-DD")}`,
      });
    }

    return days;
  }
}
