import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text, ViewStyle } from "react-native";

import responsive from "@/tools/ratio";

interface Props {
  style?: ViewStyle;
  model: TabModel[];
}

const style = StyleSheet.create({
  default: { borderBottomColor: "transparent" },
  selected: {
    borderBottomWidth: responsive(2),
    borderBottomColor: "#444444",
  },
});

function TabView(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={[props.style, { gap: responsive(20) }]}>
      <View style={{ flexDirection: "row", gap: responsive(10) }}>
        {props.model.map((item, index) => (
          <Pressable
            key={item.text}
            style={[
              selectedIndex === index ? style.selected : style.default,
              {
                padding: responsive(5),
                borderBottomWidth: responsive(2),
              },
            ]}
            onPress={() => {
              setSelectedIndex(index);
            }}
          >
            <Text
              style={{
                fontFamily: "Inter",
                fontSize: responsive(18),
                fontWeight: "bold",
                color: "#444444",
              }}
            >
              {item.text}
            </Text>
          </Pressable>
        ))}
      </View>
      <View>{props.model[selectedIndex].body}</View>
    </View>
  );
}

export default TabView;
