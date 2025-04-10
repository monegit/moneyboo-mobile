import moment, { type Moment } from "moment";
import { atom } from "recoil";

interface Calendar {
  today: string;
  year: number;
  month: number;
}

const today = moment();

export const calendarState = atom<Calendar>({
  key: "calendarState",
  default: {
    today: today.format("YYYY-MM-DD").toString(),
    year: today.year(),
    month: today.month() + 1,
  },
});
