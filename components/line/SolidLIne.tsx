import React from "react";
import { DimensionValue, View } from "react-native";

interface Props {
  dashLength?: number;
  color?: string;
}

function SolidLine(props: Props) {
  const Line = () => (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: props?.color ?? "#333333",
      }}
    />
  );

  const line = <Line />;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      {line}
    </View>
  );
}

export default SolidLine;
