import React, { useState } from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import SelectButton from "../button/SelectButton";
import responsive from "@/tools/ratio";
import Button from "../button/Button";
import Input from "../input/Input";
import Text from "../input/Text";
import moment from "moment";
import { insert } from "@/db/db";
import { useSQLiteContext } from "expo-sqlite";
import { useRecoilValue } from "recoil";
import { calendarState } from "@/recoil/calendar";
import { LedgerType } from "@/types/ledger";

type ThemeColor = {
  primary: string;
  backgroundColor: string;
  borderColor: string;
};

interface Props {
  date: moment.Moment;
}

function PreAddContent(props: Props) {
  const styles = {
    view: StyleSheet.create({
      component: { gap: responsive(10) } as ViewStyle,

      information: { gap: responsive(5) } as ViewStyle,
    }),
    text: StyleSheet.create({
      date: {
        alignSelf: "center",
        paddingHorizontal: responsive(20),
        paddingVertical: responsive(5),
        borderRadius: 99,
        textAlign: "center",
        fontSize: responsive(12),
        fontWeight: "bold",
      } as TextStyle,
    }),
  };

  const db = useSQLiteContext();
  const calendar = useRecoilValue(calendarState);

  const [ledgerData, setLedgerData] = useState({
    origin: "",
    amount: 0,
    memo: "",
    type: "schedule/spent" as LedgerType,
  });
  const [themeColor, setThemeColor] = useState<ThemeColor>({
    primary: "#4B4DDC",
    backgroundColor: "#DBDBF8",
    borderColor: "#6F71E3",
  });

  const style = StyleSheet.create({
    view: { flex: 1, gap: responsive(10) } as ViewStyle,
  });

  return (
    <View style={style.view}>
      <View style={styles.view.information}>
        <Text
          style={[
            styles.text.date,
            {
              color: themeColor.primary,
              backgroundColor: themeColor.backgroundColor,
            },
          ]}
          text={`${moment(props.date).format("YYYY년 MM월 DD일")}`}
        />
        <SelectButton
          buttonData={[
            {
              text: "소비",
              style: {
                selectedBackgroundColor: "#DBDBF8",
                borderColor: "#6F71E3",
                textColor: "#4B4DDC",
              },
              type: "schedule/spent" as LedgerType,
            },
            {
              text: "소득",
              style: {
                selectedBackgroundColor: "#F9E3D6",
                borderColor: "#E68E5D",
                textColor: "#E07234",
              },
              type: "schedule/income" as LedgerType,
            },
          ]}
          onSelectChange={(data) => {
            setLedgerData({
              ...ledgerData,
              type: data.type as LedgerType,
            });
            setThemeColor({
              primary: data.style.textColor ?? "#4B4DDC",
              backgroundColor: data.style.selectedBackgroundColor ?? "#DBDBF8",
              borderColor: data.style.borderColor ?? "#6F71E3",
            });
          }}
        />
        <SelectButton
          defaultIndex={2}
          buttonData={[
            {
              text: "매일",
              style: {
                selectedBackgroundColor: themeColor.backgroundColor,
                borderColor: themeColor.borderColor,
                textColor: themeColor.primary,
              },
            },
            {
              text: "매주",
              style: {
                selectedBackgroundColor: themeColor.backgroundColor,
                borderColor: themeColor.borderColor,
                textColor: themeColor.primary,
              },
            },
            {
              text: "매달",
              style: {
                selectedBackgroundColor: themeColor.backgroundColor,
                borderColor: themeColor.borderColor,
                textColor: themeColor.primary,
              },
            },
            {
              text: "매년",
              style: {
                selectedBackgroundColor: themeColor.backgroundColor,
                borderColor: themeColor.borderColor,
                textColor: themeColor.primary,
              },
            },
          ]}
        />
      </View>

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
              borderBottomColor: themeColor.backgroundColor,
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
              borderBottomColor: themeColor.backgroundColor,
              minWidth: "auto",
            }}
            inputStyleType="underline"
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
              borderBottomColor: themeColor.backgroundColor,
              minWidth: "auto",
            }}
            keyboardType="number-pad"
            inputStyleType="underline"
            suffixText="원"
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
              borderBottomColor: themeColor.backgroundColor,
              minWidth: "auto",
            }}
            inputStyleType="underline"
          />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <Button
          style={{
            button: {
              backgroundColor: themeColor.primary,
            },
          }}
          text={"추가"}
          onPress={async () => {
            insert(db, calendar.year, ledgerData.type, {
              date: props.date.format("YYYY-MM-DD").toString(),
              origin: ledgerData.origin,
              amount: ledgerData.amount,
              memo: ledgerData.memo,
              type: ledgerData.type,
            });
            console.log(
              db.getFirstSync(`--sql
                              SELECT * FROM spent`)
            );
          }}
          // onPress={async () => {
          //   insert(db, calendar.year, "spent", {
          //     date: props.date.format("YYYY-MM-DD").toString(),
          //     place: "1",
          //     goodsName: "",
          //     price: 0,
          //     memo: "",
          //     type: "spent",
          //   });
          //   console.log(
          //     db.getFirstSync(`--sql
          //           SELECT * FROM spent`)
          //   );
          // }}
        />
      </View>
    </View>
  );
}

export default PreAddContent;
