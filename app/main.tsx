import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { spentColorSet, incomeColorSet } from "@/styles/chart";

import responsive from "@/tools/ratio";

import { useModal } from "@/hooks/useModal";

import Button from "@/components/button/Button";
import Calendar from "@/components/calendar/Calendar";
import ChartPie from "@/components/chart/ChartPie";
import DashedLine from "@/components/line/DashedLine";
import Modal from "@/components/modal/Modal";
import AddModal from "@/components/modal/AddModal";
import PreAddModal from "@/components/modal/PreAddModal";
import TabView from "@/components/view/TabView";
import { SafeAreaView } from "react-native-safe-area-context";

const data = {
  income: [
    {
      date: "2024-07-28",
      price: 150000,
      name: "넥슨캐시",
    },
    {
      date: "2024-07-28",
      price: 1500,
      name: "쌍쌍바",
    },
    {
      date: "2024-08-05",
      price: 80000,
      name: "족발",
    },
    {
      date: "2024-08-06",
      price: 80000,
      name: "족발",
    },
    {
      date: "2024-08-07",
      price: 80000,
      name: "족발",
    },
  ],
  spent: [
    {
      date: "2024-07-28",
      price: 80000,
      name: "족발",
    },
    {
      date: "2024-08-01",
      price: 80000,
      name: "족발",
    },

    {
      date: "2024-08-06",
      price: 80000,
      name: "족발",
    },
  ],
};

function main() {
  const { modal, setModal } = useModal();

  useEffect(() => {
    console.log(modal?.header);
  }, [modal?.header]);

  return (
    <View style={{ height: "100%" }}>
      <SafeAreaView style={{}}>
        <View
          style={{
            gap: responsive(20),
            paddingHorizontal: responsive(20),
            paddingVertical: responsive(20),
          }}
        >
          <View
            style={{
              width: responsive(322.8),
              height: responsive(384),
              alignSelf: "center",
            }}
          >
            <Calendar dataSet={data} />
          </View>
          <DashedLine gap={4} dash={4} color={"#bbbbbb"} dashLength={45} />
          <View
            style={{
              height: responsive(261),
              paddingHorizontal: responsive(20),
            }}
          >
            <View style={{ flex: 1, gap: responsive(20) }}>
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
                  { price: 100000, name: "편의점" },
                  { price: 100000, name: "공과금" },
                  { price: 130000, name: "애플스토어" },
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
      </SafeAreaView>
      {/* </ScrollView> */}

      <View
        style={{
          position: "absolute",
          bottom: 0,

          width: "100%",

          paddingHorizontal: responsive(20),
          marginBottom: responsive(20),
        }}
      >
        <Button
          text="추가"
          onPress={() => {
            setModal({
              body: (
                <TabView
                  // style={{tab:{}}}
                  model={[
                    {
                      text: "추가",
                      body: <AddModal />,
                    },
                    {
                      text: "미리 추가",
                      body: <PreAddModal />,
                    },
                  ]}
                />
              ),
            });
          }}
        />
      </View>

      {modal === null ? <></> : <Modal hasCloseButton>{modal.body}</Modal>}
    </View>
  );
}

export default main;
