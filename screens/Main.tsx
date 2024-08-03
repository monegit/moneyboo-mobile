import React from "react";
import { TouchableOpacity, View, Text, SafeAreaView } from "react-native";

import Button from "@/components/button/Button";
import Calendar from "@/components/calendar/Calendar";
import ChartPie from "@/components/chart/ChartPie";
import DashedLine from "@/components/line/DashedLine";
import { spentColorSet, incomeColorSet } from "@/styles/chart";
import responsive from "@/tools/ratio";

function Main() {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          marginHorizontal: responsive(20),
          marginTop: responsive(20),
          gap: responsive(20),
        }}
      >
        <View
          style={{
            width: responsive(322.8),
            height: responsive(384),
            alignSelf: "center",
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
      </View>
      {/* </ScrollView> */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 0,

          width: "100%",

          paddingHorizontal: responsive(20),

          pointerEvents: "none",
        }}
      >
        <Button text="추가" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Main;
