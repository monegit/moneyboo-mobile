import React from "react";
import { StyleSheet, View } from "react-native";

import responsive from "@/tools/ratio";

import Button from "../button/Button";

import Input from "../input/Input";
import Text from "../input/Text";

import AnalyticSummary from "../summary/AnalyticSummary";

import DashedLine from "../line/DashedLine";

function AddModal() {
  const style = StyleSheet.create({
    text: {
      fontSize: responsive(14),
      fontWeight: "bold",

      textAlignVertical: "center",
      textAlign: "center",
    },
    inputPlace: {},
  });

  return (
    <View
      style={{
        gap: responsive(25),
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ gap: responsive(10) }}>
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "center",

            gap: responsive(5),
          }}
        >
          <Text text="저는" style={style.text} />
          <Input placeholder="언제" />
          <Input placeholder="어디" />
          <Text text="에서" style={style.text} />
        </View>
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "center",

            gap: responsive(5),
          }}
        >
          <Input placeholder="무엇" />
          <Text text="에" style={style.text} />
        </View>
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "center",

            gap: responsive(5),
          }}
        >
          <Input placeholder="얼마" />
          <Text text="소비했어요." style={style.text} />
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <DashedLine dash={5} gap={5} dashLength={40} color="#B6B6B6" />
      </View>
      <View style={{ width: "100%", gap: responsive(10) }}>
        <AnalyticSummary />
        <AnalyticSummary />
      </View>

      <View style={{ width: "100%" }}>
        <Button text={"추가"} />
      </View>
    </View>
  );
}

export default AddModal;
