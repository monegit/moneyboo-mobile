import moment, { Moment } from "moment";

type CalendarDay = {
  day: number;
  weekday: number;
  isCurrentMonth?: boolean;
  isToday?: boolean;
};

export class CalendarTool {
  private date: Moment;
  private maxCalendarDaysLength: number;
  private today = moment().toDate();

  constructor(year: number, month: number, maxCalendarDaysLength: number) {
    this.date = moment([year, month - 1]);
    this.maxCalendarDaysLength = maxCalendarDaysLength;
  }

  private addWeekday(days: CalendarDay[]): number {
    if (days.length === 0) return 0;
    else if (days[days.length - 1].weekday === 6) return 0;
    else return days[days.length - 1].weekday + 1;
  }

  public getCalendarTableData(): Array<CalendarDay> {
    let days: CalendarDay[] = [];

    // Prev Month Days
    for (
      let day =
        this.date.clone().add(-1, "month").daysInMonth() - this.date.day() + 1;
      day <= this.date.clone().add(-1, "month").daysInMonth();
      day++
    ) {
      days.push({
        day: day,
        weekday: this.addWeekday(days),
      });
    }

    // Current Month Days
    for (let day = 1; day <= this.date.daysInMonth(); day++) {
      days.push({
        day: day,
        weekday: this.addWeekday(days),
        isCurrentMonth: true,
        isToday:
          this.date.year() === this.today.getFullYear() &&
          this.date.month() === this.today.getMonth() &&
          day === this.today.getDate()
            ? true
            : false,
      });
    }

    // Next Month Days
    const progressDaysLength = days.length;
    for (
      let day = 1;
      day <= this.maxCalendarDaysLength - progressDaysLength;
      day++
    ) {
      days.push({
        day: day,
        weekday: this.addWeekday(days),
      });
    }

    return days;
  }
}
