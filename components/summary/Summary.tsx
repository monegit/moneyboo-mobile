import React from "react";
import { StyleSheet, Text, View } from "react-native";

import responsive from "@/tools/ratio";
import { LedgerType } from "@/types/ledger";
// import { AccountType } from "@/types/account";

interface Props {
  text: string;
  fontColor?: string;
  fontSize?: number;
  type?: LedgerType;
  circleSize?: number;
  summaryDepth?: number;
  isBold?: boolean;
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
  let circleColor = "#eeeeee";

  switch (props.type) {
    case "spent":
      circleColor = `rgba(75, 77, 220,${1 - 0.2 * (props.summaryDepth ?? 0)})`;
      break;
    case "income":
      circleColor = `rgba(224, 114, 52,${1 - 0.2 * (props.summaryDepth ?? 0)})`;
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
            backgroundColor: circleColor,
            width: props.circleSize ?? responsive(7),
            height: props.circleSize ?? responsive(7),
          },
        ]}
      />
      <Text
        style={[
          styles.text,
          {
            color: props.fontColor ?? "#444444",
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
