import React from "react";
import { StyleSheet, Text, View } from "react-native";

import responsive from "@/tools/ratio";
import HorizontalLine from "../HorizontalLine";

interface Props {
  text: string;
  type?: "spent" | "income";
  circleSize?: number;
  isBold?: boolean;
  fontSize?: number;
  gap?: number;
  pointSize?: number;
}

const styles = StyleSheet.create({
  self: {
    flexDirection: "row",
    alignItems: "center",
    // gap: responsive(4.1),
  },
  circle: {
    borderRadius: 99,
  },
  text: {
    fontSize: responsive(8.3),
  },
});

function Summary(props: Props) {
  let color = "#eeeeee";

  switch (props.type) {
    case "spent":
      color = "#4B4DDC";
      break;
    case "income":
      color = "#E07234";
      break;
  }

  return (
    <View
      style={[
        styles.self,
        {
          gap: props.gap ?? responsive(4),
        },
      ]}
    >
      <View
        style={[
          styles.circle,
          {
            backgroundColor: color,
            width: props.circleSize ?? responsive(7),
            height: props.circleSize ?? responsive(7),
          },
        ]}
      />
      <Text
        style={[
          styles.text,
          {
            fontFamily: "Inter",
            fontSize: props.fontSize ?? responsive(8.3),
            fontWeight: props.isBold ? "bold" : "normal",
          },
        ]}
      >
        {props.text}
      </Text>
    </View>
  );
}

export default Summary;
