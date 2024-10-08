import React from "react";
import { View } from "react-native";

import responsive from "@/tools/ratio";

interface Props {
  dash: number;
  gap: number;
  dashLength: number;
  color?: string;
}

function DashedLine(props: Props) {
  const Line = ({ dash, gap }: Props) => (
    <View
      style={{
        height: 1,
        width: responsive(dash) ?? 4,
        backgroundColor: props?.color ?? "#333333",
        gap: gap ?? 4,
      }}
    />
  );

  const line = Array(props.dashLength)
    .fill(null)
    .map((_, index) => (
      <Line
        key={index}
        dash={props?.dash}
        gap={props?.gap}
        dashLength={props.dashLength}
      />
    ));

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {line}
    </View>
  );
}

export default DashedLine;
