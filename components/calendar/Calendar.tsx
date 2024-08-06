import React, { useEffect, useRef, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import moment from "moment";

import { CalendarTool } from "@/tools/calendar";
import responsive from "@/tools/ratio";

import CalendarDays from "./CalendarDays";
import CalendarWeekDays from "./CalendarWeekDays";
import TextButton from "../button/TextButton";
import Summary from "../summary/Summary";

type CalendarDate = { year: number; month: number };

type CalendarData = { date: string; price: number; name: string };
type CalendarDataSet = { income: CalendarData[]; spent: CalendarData[] };

interface Props {
  dataSet: CalendarDataSet;
}

const styles = StyleSheet.create({
  self: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    flex: 1,
  },
  title: {
    flexDirection: "row",
    gap: responsive(8.3),
  },
  content: {},
  summary: {
    gap: responsive(12.5),
    justifyContent: "center",
  },
});

const week = [
  { day: "일", color: "#EF3737" },
  { day: "월", color: "#333333" },
  { day: "화", color: "#333333" },
  { day: "수", color: "#333333" },
  { day: "목", color: "#333333" },
  { day: "금", color: "#333333" },
  { day: "토", color: "#3655F5" },
];
const getToday = moment().format("YYYY-MM-DD");

function Calendar(props: Props) {
  const [date, setDate] = useState<CalendarDate>({ year: 2024, month: 8 });
  const [calendar, setCalendar] = useState<CalendarDay[]>();

  const calendarRef = useRef<CalendarDay[]>(
    new CalendarTool(date.year, date.month, 42).getCalendarTableData()
  );

  useEffect(() => {
    calendarRef.current = calendarRef.current.map((calendarItem) => {
      const incomeData: CalendarData[] = props.dataSet.income.filter(
        (incomeItem) => calendarItem.date === incomeItem.date
      );

      const spentData: CalendarData[] = props.dataSet.spent.filter(
        (spentItem) => calendarItem.date === spentItem.date
      );

      function getCalendarDayType(): CalendarDayType {
        if (incomeData.length > 0 && spentData.length === 0) return "income";
        if (incomeData.length === 0 && spentData.length > 0) return "spent";
        if (incomeData.length === 0 && spentData.length === 0) return undefined;

        if (incomeData.length > 0 && spentData.length > 0) {
          const incomeTotalAmount = incomeData.reduce(
            (prev, curr) => prev + curr.price,
            0
          );

          const spentTotalAmount = spentData.reduce(
            (prev, curr) => prev + curr.price,
            0
          );

          return incomeTotalAmount > spentTotalAmount ? "income" : "spent";
        }

        return undefined;
      }

      return incomeData || spentData
        ? {
            ...calendarItem,
            income: [...incomeData],
            spent: [...spentData],
            type: getCalendarDayType(),
          }
        : calendarItem;
    });

    setCalendar(calendarRef.current);
  }, [date, props.dataSet]);

  return (
    <View style={{ flex: 1, gap: responsive(16.1) }}>
      <View style={styles.title}>
        <TextButton text={`${date.year}년 ${date.month}월`} />
        <Text
          style={{
            fontFamily: "Inter",
            fontSize: responsive(18.4),
            alignSelf: "center",
            fontWeight: "bold",
            color: "#333333",
          }}
        >
          가계 달력
        </Text>
      </View>
      <View style={{ gap: responsive(4.1) }}>
        <View
          style={{
            flexDirection: "row",
            gap: responsive(16.7),
            alignSelf: "center",
          }}
        >
          {week.map((item) => (
            <CalendarWeekDays text={item.day} color={item.color} />
          ))}
        </View>
        <View style={{}}>
          <FlatList
            style={[
              styles.self,
              {
                flex: 0,
                width: responsive(322.8),
              },
            ]}
            data={calendar}
            renderItem={(item) => (
              <CalendarDays
                day={moment(item.item.date).date()}
                isCurrentMonth={
                  date.month - 1 === moment(item.item.date).month()
                }
                type={item.item.type}
                isToday={item.item.date === getToday}
              />
            )}
            numColumns={7}
            scrollEnabled={false}
            columnWrapperStyle={{ gap: responsive(16.7) }}
            ItemSeparatorComponent={() => (
              <View style={{ height: responsive(16.7) }} />
            )}
          />
        </View>
      </View>
      <View style={[styles.summary, { flexDirection: "row" }]}>
        <Summary
          text={"소비"}
          type={"spent"}
          circleSize={5.8}
          gap={responsive(4.1)}
        />
        <Summary
          text={"소득"}
          type={"income"}
          circleSize={5.8}
          gap={responsive(4.1)}
        />
      </View>
    </View>
  );
}

export default Calendar;
