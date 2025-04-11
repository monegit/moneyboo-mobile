import React from "react";
import { StyleSheet, TextStyle, View } from "react-native";
import Text from "./Text";
import responsive from "@/tools/ratio";
import Svg, { Rect } from "react-native-svg";

interface Props {
  tagType: "income" | "spent" | "schedule/spent" | "schedule/income";
}

function BillTag(props: Props) {
  const styles = StyleSheet.create({
    component: {
      alignSelf: "flex-start",
      padding: responsive(5),

      borderRadius: responsive(10),
      borderWidth: 2,

      backgroundColor: "white",
    },

    text: { fontWeight: "bold" },

    income: {
      borderColor: "#e07234",
    },

    spent: {
      borderColor: "#4b4ddc",
    },

    schedule_spent: {
      borderColor: "#4b4ddc",
      borderStyle: "dashed",
    },

    schedule_income: {
      borderColor: "#e07234",
      borderStyle: "dashed",
    },
    // schedule: {
    //   spent: {
    //     backgroundColor: "#4b4ddc",
    //     border: "3px dashed #4b4ddc",
    //   },
    //   income: {
    //     backgroundColor: "#e07234",
    //     border: "3px dashed #e07234",
    //   },
    // },
  });

  if (props.tagType === "income") {
    return (
      <View style={[styles.income, styles.component]}>
        <Text text={"소득"} style={[styles.text, { color: "#e07234" }]} />
      </View>
    );
  }

  if (props.tagType === "spent") {
    return (
      <View style={[styles.spent, styles.component]}>
        <Text text={"소비"} style={[styles.text, { color: "#4b4ddc" }]} />
      </View>
    );
  }

  if (props.tagType === "schedule/income") {
    return (
      <View style={[styles.schedule_income, styles.component]}>
        <Text text={"소득 예정"} style={[styles.text, { color: "#e07234" }]} />
      </View>
    );
  }

  if (props.tagType === "schedule/spent") {
    return (
      <View style={[styles.schedule_spent, styles.component]}>
        <Text text={"소비 예정"} style={[styles.text, { color: "#4b4ddc" }]} />
      </View>
    );
  }
}

export default BillTag;
