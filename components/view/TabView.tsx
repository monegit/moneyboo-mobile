import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";

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
      } as ViewStyle,

      tab: {
        flexDirection: "row",
        gap: responsive(5),
      } as ViewStyle,
      tabItem: {
        paddingHorizontal: responsive(5),
        // borderBottomWidth: responsive(2),
      } as ViewStyle,
      defaultTab: { borderBottomColor: "transparent" } as ViewStyle,
      selectedTab: {} as ViewStyle,
    }),

    text: StyleSheet.create({
      tabTitle: {
        fontSize: responsive(20),
        fontWeight: "bold",
      } as TextStyle,

      defaultTabTitle: {
        color: "#b6b6b6",
      } as TextStyle,
      selectedTabTitle: {
        color: "#333333",
      } as TextStyle,
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
            <Text
              style={[
                styles.text.tabTitle,
                selectedIndex === index
                  ? styles.text.selectedTabTitle
                  : styles.text.defaultTabTitle,
              ]}
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
