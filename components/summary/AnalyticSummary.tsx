import React from "react";
import { View } from "react-native";

import responsive from "@/tools/ratio";

import Text from "../input/Text";

interface Props {
  text?: string;
}

function AnalyticSummary(props: Props) {
  return (
    <View style={{ width: "100%", flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <Text
          text="6월 편의점에서 총 소비"
          style={{
            fontSize: responsive(14),
            fontWeight: "bold",
            color: "#444444",
          }}
        />
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text
          text="956,120원"
          style={{
            color: "#747474",
            fontWeight: "bold",
            fontSize: responsive(14),
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text
            text="5월 대비 2,300원(15%)"
            style={{ color: "#B3B3B3", fontSize: responsive(10) }}
          />
          <Text
            text=" 증가"
            style={{
              fontWeight: "bold",
              color: "#B3B3B3",
              fontSize: responsive(10),
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default AnalyticSummary;
