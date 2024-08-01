import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

import { CalendarTool } from "@/tools/calendar";
import responsive from "@/tools/ratio";

import CalendarDays from "./CalendarDays";
import CalendarWeekDays from "./CalendarWeekDays";
import TextButton from "../button/TextButton";
import Summary from "../summary/Summary";

type CalendarDate = { year: number; month: number };
type CalendarDay = {
  isCurrentMonth: boolean;
  day: number;
  weekday: number;
};

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

function Calendar() {
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>();
  const [date, setDate] = useState<CalendarDate>({ year: 2024, month: 8 });

  const calendar = new CalendarTool(date.year, date.month, 42);

  useEffect(() => {}, [date]);

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
            data={calendar.getCalendarTableData()}
            renderItem={(item) => (
              <CalendarDays
                day={item.item.day}
                isCurrentMonth={item.item.isCurrentMonth}
                type={undefined}
                isToday={item.item.isToday}
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
