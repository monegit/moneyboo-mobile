import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text, ViewStyle } from "react-native";

import responsive from "@/tools/ratio";
import { TabModel } from "@/types/tabModel";

interface Props {
  style?: { component?: ViewStyle; tab?: ViewStyle; content: ViewStyle };
  model: TabModel[];
}

function TabView(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const styles = {
    view: StyleSheet.create({
      component: {
        gap: props.style?.component?.gap ?? responsive(20),
        backgroundColor: props.style?.component?.backgroundColor ?? "white",
        paddingHorizontal:
          props.style?.component?.paddingHorizontal ?? responsive(20),
        paddingVertical:
          props.style?.component?.paddingVertical ?? responsive(20),
      },

      tab: { flexDirection: "row", gap: responsive(10) },
      tabItem: {
        padding: responsive(5),
        borderBottomWidth: responsive(2),
      },
      defaultTab: { borderBottomColor: "transparent" },
      selectedTab: {},
    }),

    text: StyleSheet.create({
      tabTitle: {
        fontFamily: "Inter",
        fontSize: responsive(18),
        fontWeight: "bold",
        color: "#444444",
      },
    }),
  };

  return (
    <View style={[props.style?.tab, styles.view.component]}>
      <View style={styles.view.tab}>
        {props.model.map((item, index) => (
          <Pressable
            key={item.text}
            style={[
              styles.view.tabItem,
              selectedIndex === index
                ? styles.view.selectedTab
                : styles.view.defaultTab,
            ]}
            onPress={() => {
              setSelectedIndex(index);
            }}
          >
            <Text style={styles.text.tabTitle}>{item.text}</Text>
          </Pressable>
        ))}
      </View>
      <View>{props.model[selectedIndex].body}</View>
    </View>
  );
}

export default TabView;
