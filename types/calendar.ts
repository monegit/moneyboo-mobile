export type CalendarData = {
  name: string;
  price: number;
};

export type CalendarDayType =
  | "spent"
  | "income"
  | "schedule/spent"
  | "schedule/income"
  | undefined;

export type CalendarDay = {
  date: string;
  income?: CalendarData[];
  spent?: CalendarData[];
  type?: CalendarDayType;
};
