import { Ledger } from "@/db/db";
import responsive from "@/tools/ratio";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Bill from "../input/Bill";

interface Props {
  ledger?: Ledger[];
}

const styles = {
  view: StyleSheet.create({
    component: {
      flex: 1,

      minHeight: responsive(200),
      gap: responsive(15),
      paddingHorizontal: responsive(5),
      paddingBottom: responsive(20),

      backgroundColor: "white",
    },
  }),
};

function LogContent(props: Props) {
  return (
    <View style={styles.view.component}>
      {props.ledger?.map((row, index) => (
        <Bill
          key={index}
          type={row.type}
          date={row.date}
          origin={row.origin}
          memo={row.memo}
          amount={row.amount}
        />
      ))}
      {/* </View> */}
    </View>
  );
}

export default LogContent;
