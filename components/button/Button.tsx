import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

import responsive from "@/tools/ratio";

interface Props {
  text: string;
  onPress?: PressableProps["onPress"];
  style?: {
    button?: ViewStyle;
    text?: TextStyle;
  };
}

function Button(props: Props) {
  const styles = {
    view: StyleSheet.create({
      component: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: props.style?.button?.backgroundColor ?? "#4B4DDC",

        borderRadius: props.style?.button?.borderRadius ?? responsive(10),
        paddingHorizontal:
          props.style?.button?.paddingHorizontal ?? responsive(20),
        paddingVertical: props.style?.button?.paddingVertical ?? responsive(10),
      },
    }),

    font: StyleSheet.create({
      text: {
        color: props.style?.text?.color ?? "white",
        fontWeight: props.style?.text?.fontWeight ?? "bold",
        fontSize: props.style?.text?.fontSize ?? responsive(18),
      },
    }),
  };

  return (
    <Pressable
      style={[props.style?.button, styles.view.component]}
      onPress={props.onPress}
    >
      <Text style={[props.style?.text, styles.font.text]}>{props.text}</Text>
    </Pressable>
  );
}

export default Button;
