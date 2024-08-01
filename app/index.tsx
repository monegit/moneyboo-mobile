import { css } from "@emotion/native";
import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/components/button/Button";
import Calendar from "@/components/calendar/Calendar";
import CalendarDays from "@/components/calendar/CalendarDays";
import CalendarWeekDays from "@/components/calendar/CalendarWeekDays";
import responsive from "@/tools/ratio";
import ChartPie from "@/components/chart/ChartPie";
import DashedLine from "@/components/line/DashedLine";
import { incomeColorSet, spentColorSet } from "@/styles/chart";

const styles = {
  self: css`
    /* justify-content: space-between; */
    height: 100%;
    width: 100%;

    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    background-color: white;
  `,
};

function index() {
  return (
    <SafeAreaView style={[styles.self, { gap: responsive(20) }]}>
      {/* <ScrollView style={{ height: "100%", gap: responsive(20) }}> */}
      <View
        style={{
          // flex: 1,
          // backgroundColor: "red",
          width: responsive(322.8),
          height: responsive(384),
          alignSelf: "center",
          // borderWidth: 1,
          // borderStyle: "dashed",
        }}
      >
        <Calendar />
      </View>
      <DashedLine gap={4} dash={4} color={"#bbbbbb"} dashLength={45} />
      <View
        style={{
          height: responsive(261),
          paddingHorizontal: responsive(20),
        }}
      >
        <View style={{ flex: 1, gap: responsive(15) }}>
          <Text
            style={{
              fontSize: responsive(16),
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
          >
            6월 종합 소비
          </Text>
          <ChartPie
            type="spent"
            size={responsive(80)}
            colorSet={spentColorSet}
            dataSet={[
              { price: 200000, name: "편의점" },
              { price: 50000, name: "공과금" },
              { price: 1300000, name: "애플스토어" },
              { price: 250000, name: "넥슨 캐시" },
              { price: 750000, name: "벽제갈비" },
            ]}
          />
        </View>
        <ChartPie
          type="income"
          size={responsive(80)}
          colorSet={incomeColorSet}
          dataSet={[
            { price: 200000, name: "편의점" },
            { price: 50000, name: "공과금" },
            { price: 1300000, name: "애플스토어" },
            { price: 250000, name: "넥슨 캐시" },
            { price: 750000, name: "벽제갈비" },
          ]}
        />
      </View>
      {/* </ScrollView> */}
      <TouchableOpacity
        style={{
          // flex: 1,
          pointerEvents: "none",
          width: "100%",
          height: Dimensions.get("window").height,
          paddingBottom: responsive(20),
          position: "absolute",

          // backgroundColor: "transparent",
          // backgroundColor: "rgba(255,255,255,.5)",
          justifyContent: "flex-end",

          alignSelf: "center",
        }}
      >
        <Button text="추가" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default index;
