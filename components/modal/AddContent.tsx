import responsive from "@/tools/ratio";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Input from "../input/Input";
import DashedLine from "../line/DashedLine";
import Text from "../input/Text";
import Button from "../button/Button";
import { insert } from "@/db/db";
import { useSQLiteContext } from "expo-sqlite";
import { useRecoilValue } from "recoil";
import { calendarState } from "@/recoil/calendar";
import SelectButton from "../button/SelectButton";

interface Props {
  date: moment.Moment;
}

function AddContent(props: Props) {
  const [ledgerData, setLedgerData] = useState({
    origin: "",
    amount: 0,
    memo: "",
  });

  // useEffect(() => {
  //   console.log(ledgerData);
  // }, [ledgerData]);

  const db = useSQLiteContext();
  const calendar = useRecoilValue(calendarState);

  return (
    <View style={{ gap: responsive(10) }}>
      <SelectButton
        buttonData={[
          {
            text: "소비",
            selectedBackgroundColor: "#DBDBF8",
            borderColor: "#4B4DDC",
            textColor: "#4B4DDC",
          },
          {
            text: "소득",
            selectedBackgroundColor: "#F9E3D6",
            borderColor: "#E07234",
            textColor: "#E07234",
          },
        ]}
      />
      <View
        style={{
          paddingHorizontal: responsive(5),
          gap: responsive(20),
          marginBottom: responsive(15),
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: responsive(10),
          }}
        >
          <Text
            text={"출처"}
            style={{
              fontSize: responsive(16),
              fontWeight: "bold",
              color: "#444444",
            }}
          />
          <Input
            placeholder="편의점"
            style={{
              // flex: 1,
              textAlign: "left",
              fontSize: responsive(16),
              // paddingVertical: responsive(7),
              minWidth: "auto",
            }}
            inputStyleType="underline"
            onChangeText={(value) => {
              setLedgerData({
                ...ledgerData,
                origin: value,
              });
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: responsive(10),
          }}
        >
          <Text
            text={"금액"}
            style={{
              fontSize: responsive(16),
              fontWeight: "bold",
              color: "#444444",
            }}
          />
          <Input
            placeholder="1,000원"
            style={{
              // flex: 1,
              textAlign: "left",
              fontSize: responsive(16),
              // paddingVertical: responsive(7),
              minWidth: "auto",
            }}
            keyboardType="number-pad"
            inputStyleType="underline"
            suffixText="원"
            onChangeText={(value) => {
              setLedgerData({
                ...ledgerData,
                amount: parseInt(value.replace(/,/g, "")),
              });
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: responsive(10),
          }}
        >
          <Text
            text={"메모"}
            style={{
              fontSize: responsive(16),
              fontWeight: "bold",
              color: "#444444",
            }}
          />
          <Input
            placeholder="편의점에서 아이스크림 1+1 구매"
            style={{
              flex: 1,
              textAlign: "left",
              fontSize: responsive(16),
              // paddingVertical: responsive(20),
              minWidth: "auto",
            }}
            inputStyleType="underline"
            onChangeText={(value) => {
              setLedgerData({
                ...ledgerData,
                memo: value,
              });
            }}
          />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <Button
          text={"추가"}
          onPress={async () => {
            insert(db, calendar.year, "spent", {
              date: props.date.format("YYYY-MM-DD").toString(),
              origin: ledgerData.origin,
              amount: ledgerData.amount,
              memo: ledgerData.memo,
              type: "spent",
            });
            console.log(
              db.getFirstSync(`--sql
                    SELECT * FROM spent`)
            );
          }}
        />
      </View>
    </View>
  );
}

export default AddContent;
