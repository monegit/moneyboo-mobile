import React from "react";
import { Text, View } from "react-native";

import responsive from "@/tools/ratio";

interface Props {
  text: string;
  color: string;
}

function CalendarWeekDays(props: Props) {
  return (
    <View
      style={{
        alignSelf: "center",
        justifyContent: "center",
        width: responsive(31.7),
        height: responsive(31.7),
      }}
    >
      <Text
        style={{
          fontSize: responsive(11.7),
          fontWeight: "bold",
          textAlign: "center",
          color: props.color ?? "#333333",
        }}
      >
        {props.text}
      </Text>
    </View>
  );
}

export default CalendarWeekDays;
