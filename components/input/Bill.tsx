import React from "react";
import { Image, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import Text from "./Text";
import responsive from "@/tools/ratio";
import BillTag from "./BillTag";
import SolidLine from "../line/SolidLine";

interface Props {
  date?: string;
  origin?: string;
  amount?: number;
  memo?: string;
}

function Bill(props: Props) {
  const styles = {
    view: StyleSheet.create({
      component: {
        gap: responsive(5),

        backgroundColor: "white",
      } as ViewStyle,

      split: {
        flexDirection: "row",
        gap: responsive(7),
        alignItems: "center",
      } as ViewStyle,

      content: {
        flex: 1,
        flexDirection: "row",
        gap: responsive(5),
        justifyContent: "space-between",
      } as ViewStyle,
    }),

    text: StyleSheet.create({
      common: {
        fontWeight: "bold",
        color: "#333333",
      } as TextStyle,
    }),
  };

  return (
    <View style={styles.view.component}>
      <View style={styles.view.split}>
        <BillTag tagType="spent" />

        <View style={styles.view.content}>
          <Text text={props.origin ?? "-"} style={styles.text.common} />
          <SolidLine color="#E0E0E0" />
          <Text text={`${props.amount ?? "-"}원`} style={styles.text.common} />
        </View>
      </View>
    </View>
  );
}

export default Bill;
