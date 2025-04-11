import React, { useEffect, useRef, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import moment, { Moment } from "moment";
import { useRecoilValue } from "recoil";
import { StyleSheet, View } from "react-native";

import responsive from "@/tools/ratio";

import Button from "../button/Button";

import Text from "../input/Text";

import { calendarState } from "@/recoil/calendar";
import { getLedger, Ledger } from "@/db/db";
import Bill from "../input/Bill";
import Input from "../input/Input";
import DashedLine from "../line/DashedLine";
import TabView from "../view/TabView";
import LogContent from "./LogContent";
import PreAddContent from "./PreAddContent";
import AddContent from "./AddContent";

interface Props {
  date: Moment;
}

function LedgerModal(props: Props) {
  const [ledger, setLedger] = useState<Ledger[] | undefined>(undefined);
  const db = useSQLiteContext();

  useEffect(() => {
    async function promise() {
      const a = await getLedger(
        db,
        props.date.year(),
        props.date.month() + 1,
        props.date.date()
      );

      setLedger(a);
    }

    promise();

    console.log(ledger);
  }, []);

  // const styles = StyleSheet.create({
  //   text: {
  //     fontSize: responsive(14),
  //     fontWeight: "bold",

  //     textAlignVertical: "center",
  //     textAlign: "center",
  //   },
  //   dateText: {
  //     fontSize: responsive(14),
  //     fontWeight: "bold",

  //     backgroundColor: "#F0F0F0",
  //   },
  //   inputPlace: {},
  // });

  const styles = {
    view: StyleSheet.create({
      component: {
        gap: responsive(25),
        padding: responsive(0),

        backgroundColor: "white",
      },

      title: {},
    }),

    text: StyleSheet.create({
      title: {
        fontSize: responsive(18),
        color: "#333333",
        fontWeight: "bold",
      },
    }),
  };

  return (
    <TabView
      model={[
        {
          text: "기록",
          body: <LogContent ledger={ledger} />,
        },
        {
          text: "추가",
          body: <AddContent date={props.date} />,
        },
        { text: "미리 추가", body: <PreAddContent date={props.date} /> },
      ]}
    />
    // <View style={styles.view.component}>
    //   <View style={styles.view.title}>
    //     <Text
    //       text={`${moment(props.date).format("YYYY년 MM월 DD일")} 가계부`}
    //       style={styles.text.title}
    //     />
    //   </View>
    //   <View>
    //     {ledger?.map((row, index) => (
    //       <Bill
    //         key={index}
    //         date={row.date}
    //         place={row.place}
    //         goodsName={row.goodsName}
    //         memo={row.memo}
    //         price={row.price}
    //       />
    //     ))}
    //   </View>

    //   {isVisibleAddView ? (
    // <View style={{ gap: responsive(10) }}>
    //   <DashedLine gap={4} dash={4} color={"#bbbbbb"} dashLength={45} />
    //   <View
    //     style={{
    //       flexDirection: "row",

    //       alignItems: "center",
    //       justifyContent: "center",

    //       gap: responsive(5),
    //     }}
    //   >
    //     <Text
    //       text="저는"
    //       style={{
    //         fontSize: responsive(18),
    //         color: "#333333",
    //         fontWeight: "bold",
    //       }}
    //     />
    //     <Text
    //       text={moment(props.date).format("MM월 DD일")}
    //       style={{
    //         fontSize: responsive(18),
    //         color: "#333333",
    //         fontWeight: "bold",
    //       }}
    //     />
    //     <Input placeholder="어디" />
    //     <Text
    //       text="에서"
    //       style={{
    //         fontSize: responsive(18),
    //         color: "#333333",
    //         fontWeight: "bold",
    //       }}
    //     />
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: "row",

    //       alignItems: "center",
    //       justifyContent: "center",

    //       gap: responsive(5),
    //     }}
    //   >
    //     <Input placeholder="무엇" />
    //     <Text
    //       text="에"
    //       style={{
    //         fontSize: responsive(18),
    //         color: "#333333",
    //         fontWeight: "bold",
    //       }}
    //     />
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: "row",

    //       alignItems: "center",
    //       justifyContent: "center",

    //       gap: responsive(5),
    //     }}
    //   >
    //     <Input placeholder="얼마" />
    //     <Text
    //       text="소비했어요."
    //       style={{
    //         fontSize: responsive(18),
    //         color: "#333333",
    //         fontWeight: "bold",
    //       }}
    //     />
    //   </View>
    // </View>
    //   ) : (
    //     <></>
    //   )}

    //   <View>
    //     <Button
    //       text="추가"
    //       onPress={() => {
    //         setVisibleAddView(!isVisibleAddView);
    //         // insert(db, calendar.year, "income", {
    //         //   date: props.date.format("YYYY-MM-DD").toString(),
    //         //   place: "a",
    //         //   goodsName: "aa",
    //         //   price: 0,
    //         //   type: "spent",
    //         //   memo: "aa",
    //         // });
    //         // useModal();
    //       }}
    //     />
    //   </View>
    //   {/* <View style={{ gap: responsive(10) }}>
    //     <View
    //       style={{
    //         flexDirection: "row",

    //         alignItems: "center",
    //         justifyContent: "center",

    //         gap: responsive(5),
    //       }}
    //     >
    //       <Text
    //         text="저는"
    //         style={{
    //           fontSize: responsive(18),
    //           color: "#333333",
    //           fontWeight: "bold",
    //         }}
    //       />
    //       <Text
    //         text={moment(props.date).format("MM월 DD일")}
    //         style={{
    //           fontSize: responsive(18),
    //           color: "#333333",
    //           fontWeight: "bold",
    //         }}
    //       />
    //       <Input placeholder="어디" />
    //       <Text
    //         text="에서"
    //         style={{
    //           fontSize: responsive(18),
    //           color: "#333333",
    //           fontWeight: "bold",
    //         }}
    //       />
    //     </View>
    //     <View
    //       style={{
    //         flexDirection: "row",

    //         alignItems: "center",
    //         justifyContent: "center",

    //         gap: responsive(5),
    //       }}
    //     >
    //       <Input placeholder="무엇" />
    //       <Text
    //         text="에"
    //         style={{
    //           fontSize: responsive(18),
    //           color: "#333333",
    //           fontWeight: "bold",
    //         }}
    //       />
    //     </View>
    //     <View
    //       style={{
    //         flexDirection: "row",

    //         alignItems: "center",
    //         justifyContent: "center",

    //         gap: responsive(5),
    //       }}
    //     >
    //       <Input placeholder="얼마" />
    //       <Text
    //         text="소비했어요."
    //         style={{
    //           fontSize: responsive(18),
    //           color: "#333333",
    //           fontWeight: "bold",
    //         }}
    //       />
    //     </View>
    //   </View>
    //   <View style={{ width: "100%" }}>
    //     <DashedLine dash={5} gap={5} dashLength={40} color="#B6B6B6" />
    //   </View>
    //   <View style={{ width: "100%", gap: responsive(10) }}>
    //     <AnalyticSummary />
    //     <AnalyticSummary />
    //   </View>

    // <View style={{ width: "100%" }}>
    //   <Button
    //     text={"추가"}
    //     onPress={async () => {
    //       insert(db, calendar.year, "spent", {
    //         date: props.date.format("YYYY-MM-DD").toString(),
    //         place: "1",
    //         goodsName: "",
    //         price: 0,
    //         memo: "",
    //         type: "spent",
    //       });
    //       // )
    //       // (db, {
    //       //   date: "undefined",
    //       //   place: "1",
    //       //   goodsName: "",
    //       //   price: 0,
    //       //   memo: "",
    //       // });

    //       console.log(
    //         db.getFirstSync(`--sql
    //         SELECT * FROM spent`)
    //       );
    //     }}
    //   />
    // </View> */}
    // </View>
  );
}

export default LedgerModal;
