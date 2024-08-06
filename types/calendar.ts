type CalendarData = {
  name: string;
  price: number;
};

type CalendarDayType =
  | "spent"
  | "income"
  | "schedule/spent"
  | "schedule/income"
  | undefined;

type CalendarDay = {
  date: string;
  income?: CalendarData[];
  spent?: CalendarData[];
  type?: CalendarDayType;
};
