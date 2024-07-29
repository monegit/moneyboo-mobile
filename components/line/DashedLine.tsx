import React from "react";
import { View } from "react-native";

interface Props {
  dash?: number;
  gap?: number;
  dashLength?: number;
  color?: string;
}

function DashedLine(props: Props) {
  const Line = ({ dash, gap }: Props) => (
    <View
      style={{
        height: 1,
        width: dash ?? 4,
        backgroundColor: props?.color ?? "#333333",
        gap: gap ?? 4,
      }}
    />
  );

  const line = Array(props?.dashLength).fill(
    <Line dash={props?.dash} gap={props?.gap} />
  );

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        // alignSelf: "center",
      }}
    >
      {line}
    </View>
  );
}

export default DashedLine;
