import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

import { ReactNativeStyle, css } from "@emotion/native";

import responsive from "@/tools/ratio";
import { CalendarDayType } from "@/types/calendar";
import { useModal } from "@/hooks/useModal";
import { useRecoilValue } from "recoil";
import { calendarState } from "@/recoil/calendar";
import LedgerModal from "../modal/LedgerModal";
import moment from "moment";
import { incomeColorSet } from "@/styles/chart";

interface Props {
  /**
   * 일별 상태 타입
   */
  type?: CalendarDayType;
  isToday?: boolean;
  day: number;
  isCurrentMonth: boolean | undefined;
}

// const styles = {
//   template: {
//     normal: css`
//       background-color: #eeeeee;
//     `,
//     today: css`
//       background-color: #ffdbdb;
//     `,
//     spent: css`
//       background-color: #4b4ddc;
//     `,
//     income: css`
//       background-color: #e07234;
//     `,

//     schedule: {
//       spent: css`
//         background-color: #eeeeee;
//         border: 3px dashed #4b4ddc;
//       `,
//       income: css`
//         background-color: #eeeeee;
//         border: 3px dashed #e07234;
//       `,
//     },
//   },
//   text: {
//     red: css`
//       color: #f95656;
//     `,
//     white: css`
//       color: white;
//     `,
//     black: css`
//       color: #333333;
//     `,
//   },
// };

function CalendarDays(props: Props) {
  const [daysType, setDaysType] = useState<{
    template: ViewStyle;
    text: TextStyle;
  }>();
  const calendar = useRecoilValue(calendarState);
  const { modal, setModal } = useModal();

  const styles = {
    template: StyleSheet.create({
      normal: {
        backgroundColor: "#eeeeee",
      } as ViewStyle,
      today: {
        backgroundColor: "#ffdbdb",
      } as ViewStyle,
      spent: {
        backgroundColor: "#4b4ddc",
      } as ViewStyle,
      income: {
        backgroundColor: "#e07234",
      } as ViewStyle,

      spentSchedule: {
        backgroundColor: "#eeeeee",
        borderColor: "#4b4ddc",
      } as ViewStyle,
      incomeSchedule: {
        backgroundColor: "#eeeeee",
        borderColor: "#e07234",
      } as ViewStyle,
    }),

    text: StyleSheet.create({
      red: {
        color: "#f95656",
      } as TextStyle,
      white: {
        color: "white",
      } as TextStyle,
      black: {
        color: "#333333",
      } as TextStyle,
    }),

    // schedule: StyleSheet.create({
    //   spent: {
    //     backgroundColor: "#eeeeee",
    //     borderColor: "#4b4ddc",
    //     borderWidth: 3,
    //     borderStyle: "dashed",
    //   } as ViewStyle,
    //   income: {
    //     backgroundColor: "#eeeeee",
    //     borderColor: "#e07234",
    //     borderWidth: 3,
    //     borderStyle: "dashed",
    //   } as ViewStyle,
    // }),
  };

  // normalView: {} as ViewStyle,
  // todayView: {} as ViewStyle,
  // spentView: {} as ViewStyle,
  // incomeView: {} as ViewStyle,

  useEffect(() => {
    if (props.isToday === true)
      setDaysType({ template: styles.template.today, text: styles.text.red });
    else {
      switch (props.type) {
        case "spent":
          setDaysType({
            template: styles.template.spent,
            text: styles.text.white,
          });
          break;
        case "income":
          setDaysType({
            template: styles.template.income,
            text: styles.text.white,
          });
          break;
        case "schedule/spent":
          setDaysType({
            template: styles.template.spentSchedule,
            text: styles.text.black,
          });
          break;
        case "schedule/income":
          setDaysType({
            template: styles.template.incomeSchedule,
            text: styles.text.black,
          });
          break;
        default:
          setDaysType({
            template: styles.template.normal,
            text: styles.text.black,
          });
      }
    }
  }, [props.type]);

  return (
    <Pressable
      style={[
        daysType?.template,
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 99,
          opacity: props.isCurrentMonth ? 1 : 0.5,
        },
        {
          width: responsive(31.7),
          height: responsive(31.7),
        },
      ]}
      onPress={() => {
        console.log("dd");
        // router.push("modal/addCalendar");
        // setDaysType({
        //   template: styles.template.normal,
        //   text: styles.text.black,
        // });
        setModal({
          body: (
            <LedgerModal
              date={moment(`${calendar.year}-${calendar.month}-${props.day}`)}
            />
            // <TabView
            //   // style={{tab:{}}}
            //   model={[
            //     {
            //       text: "추가",
            //       body: <AddModal date={new Date(`2024-08-${props.day}`)} />,
            //     },
            //     {
            //       text: "미리 추가",
            //       body: <PreAddModal />,
            //     },
            //   ]}
            // />
          ),
        });
      }}
    >
      <Text
        style={[
          daysType?.text,
          {
            fontFamily: "Inter",
            textAlign: "center",
            fontWeight: "bold",
          },
          {
            fontSize: responsive(11.7),
          },
        ]}
      >
        {props.day}
      </Text>
    </Pressable>
  );
}

export default CalendarDays;
