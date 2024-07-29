import React from "react";
import { View } from "react-native";

type HorizontalType = "solid" | "dotted" | "dashed";
type LineStyle = {
  dash?: number;
  gap?: number;
  dotCount?: number;
  color?: string;
};

// TODO:solid, dotted, dashed 라인 만들기
// 현재는 dashed만 구현 상태
interface Props {
  style?: LineStyle;
  type?: HorizontalType;
}

function HorizontalLine(props: Props) {
  const Line = ({ dash, gap }: LineStyle) => (
    <View
      style={{
        height: 1,
        width: dash ?? 4,
        backgroundColor: props.style?.color ?? "#333333",
        gap: gap ?? 4,
      }}
    />
  );

  const line = Array(props.style?.dotCount).fill(
    <Line dash={props.style?.dash} gap={props.style?.gap} />
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

export default HorizontalLine;
