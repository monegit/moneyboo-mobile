import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import SelectButton from "../button/SelectButton";
import responsive from "@/tools/ratio";
import Button from "../button/Button";
import Input from "../input/Input";
import Text from "../input/Text";

function PreAddContent() {
  const style = StyleSheet.create({
    view: { flex: 1, gap: responsive(10) } as ViewStyle,
  });

  return (
    <View style={style.view}>
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
      <SelectButton
        defaultIndex={2}
        buttonData={[
          {
            text: "매일",
            selectedBackgroundColor: "#DBDBF8",
            borderColor: "#6F71E3",
            textColor: "#6F71E3",
          },
          {
            text: "매주",
            selectedBackgroundColor: "#DBDBF8",
            borderColor: "#6F71E3",
            textColor: "#6F71E3",
          },
          {
            text: "매달",
            selectedBackgroundColor: "#DBDBF8",
            borderColor: "#6F71E3",
            textColor: "#6F71E3",
          },
          {
            text: "매년",
            selectedBackgroundColor: "#DBDBF8",
            borderColor: "#6F71E3",
            textColor: "#6F71E3",
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
          />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <Button
          text={"추가"}
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
