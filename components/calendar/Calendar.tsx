import { css } from "@emotion/native";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, View, Text, StyleSheet } from "react-native";

import CalendarDays from "./CalendarDays";
import responsive from "@/tools/ratio";
import CalendarWeekDays from "./CalendarWeekDays";
import TextButton from "../button/TextButton";
import Summary from "../summary/Summary";
import moment from "moment";
import { getMonthInfo } from "@/tools/calendar";

type CalendarDate = { year: number; month: number };
type CalendarDay = { isCurrentMonth: boolean; day: number; weekday: number };

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

const maxCalendarDaysLength = 7 * 6;

function Calendar() {
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>();
  const [date, setDate] = useState<CalendarDate>({ year: 2024, month: 7 });

  useEffect(() => {
    const prevDaysInMonthList = Array.from<CalendarDay[], CalendarDay>(
      {
        length: getMonthInfo(date.year, date.month).firstWeekDay,
      },
      (_, i) => {
        return {
          isCurrentMonth: false,
          day: getMonthInfo(date.year, date.month - 1).length - i,
          weekday: 0,
        };
      }
    ).reverse();
    const currentDaysInMonthList = Array.from<CalendarDay[], CalendarDay>(
      { length: getMonthInfo(date.year, date.month).length },
      (_, i) => {
        return {
          isCurrentMonth: true,
          day: i + 1,
          weekday: 0,
        };
      }
    );
    const nextDaysInMonthList = Array.from<CalendarDay[], CalendarDay>(
      {
        length:
          maxCalendarDaysLength -
          (prevDaysInMonthList.length + currentDaysInMonthList.length),
      },
      (_, i) => {
        return { isCurrentMonth: false, day: i + 1, weekday: 0 };
      }
      // (_, i) => i + 1
    );

    console.log(prevDaysInMonthList);

    setCalendarDays([
      ...prevDaysInMonthList,
      ...currentDaysInMonthList,
      ...nextDaysInMonthList,
    ]);
  }, []);

  return (
    <View style={{ flex: 1, gap: responsive(16.1) }}>
      <View style={styles.title}>
        <TextButton text="2024년 7월" />
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
            // style={[styles.self, { width: width - width * 0.21875 }]}
            data={calendarDays}
            renderItem={(item) => (
              <CalendarDays
                day={item.item.day}
                isCurrentMonth={item.item.isCurrentMonth}
              />
            )}
            numColumns={7}
            scrollEnabled={false}
            columnWrapperStyle={{ gap: responsive(16.7) }}
            ItemSeparatorComponent={() => (
              <View style={{ height: responsive(16.7) }} />
            )}
            // columnWrapperStyle={{ justifyContent: "space-between" }}
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
