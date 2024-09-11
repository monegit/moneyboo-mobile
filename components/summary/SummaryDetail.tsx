import index from "@/app";
import responsive from "@/tools/ratio";
import React from "react";
import { View, Text } from "react-native";
import SolidLIne from "../line/SolidLIne";
import Summary from "./Summary";
import { AccountType } from "@/types/account";

interface Props {
  form: AccountType;
  name: string;
  price: number;
  depth: number;
}

function SummaryDetail(props: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: responsive(7),
      }}
    >
      <Summary
        type={props.form}
        summaryDepth={props.depth}
        fontSize={responsive(12)}
        text={props.name}
        isBold
        gap={responsive(7)}
      />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <SolidLIne color="#E0E0E0" />
      </View>
      <Text
        style={{
          fontSize: responsive(12),
          color: "#444444",
          fontWeight: "bold",
        }}
      >
        {props.price}원
      </Text>
    </View>
  );
}

export default SummaryDetail;
