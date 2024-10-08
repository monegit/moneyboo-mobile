import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";

import { ReactNativeStyle, css } from "@emotion/native";

import responsive from "@/tools/ratio";
import { CalendarDayType } from "@/types/calendar";

interface Props {
  /**
   * 일별 상태 타입
   */
  type?: CalendarDayType;
  isToday?: boolean;
  day: number;
  isCurrentMonth: boolean | undefined;
}

const styles = {
  template: {
    normal: css`
      background-color: #eeeeee;
    `,
    today: css`
      background-color: #ffdbdb;
    `,
    spent: css`
      background-color: #4b4ddc;
    `,
    income: css`
      background-color: #e07234;
    `,

    schedule: {
      spent: css`
        background-color: #eeeeee;
        border: 3px dashed #4b4ddc;
      `,
      income: css`
        background-color: #eeeeee;
        border: 3px dashed #e07234;
      `,
    },
  },
  text: {
    red: css`
      color: #f95656;
    `,
    white: css`
      color: white;
    `,
    black: css`
      color: #333333;
    `,
  },
};

function CalendarDays(props: Props) {
  const [daysType, setDaysType] = useState<{
    template: ReactNativeStyle;
    text: ReactNativeStyle;
  }>();

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
            template: styles.template.schedule.spent,
            text: styles.text.black,
          });
          break;
        case "schedule/income":
          setDaysType({
            template: styles.template.schedule.income,
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
        css`
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 99px;
          opacity: ${props.isCurrentMonth ? "1" : "0.5"};
        `,
        {
          width: responsive(31.7),
          height: responsive(31.7),
        },
      ]}
      onPress={() => {
        // router.push("modal/addCalendar");
        setDaysType({
          template: styles.template.normal,
          text: styles.text.black,
        });
      }}
    >
      <Text
        style={[
          daysType?.text,
          css`
            font-family: "Inter";
            text-align: center;
            font-weight: bold;
          `,
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
