import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

import { css } from "@emotion/native";

import responsive from "@/tools/ratio";

interface Props {
  text: string;
  color?: string;
  onPress?: PressableProps["onPress"];
}

const styles = {
  self: css`
    display: flex;
    /* background-color: #4b4ddc; */
    /* padding: 10px 20px; */
    align-items: center;
    justify-content: center;
  `,
  font: css`
    color: white;
    font-weight: bold;
    /* font-size: 18px; */
    /* font-size: 1em; */
    width: fit-content;
    font-family: "Inter";
  `,
};

function Button(props: Props) {
  return (
    <Pressable
      style={[
        styles.self,
        {
          borderRadius: responsive(10),
          paddingHorizontal: responsive(20),
          paddingVertical: responsive(10),
          backgroundColor: props.color ?? "#4b4ddc",
        },
      ]}
      onPress={props.onPress}
    >
      <Text style={[styles.font, { fontSize: responsive(18) }]}>
        {props.text}
      </Text>
    </Pressable>
  );
}

export default Button;
