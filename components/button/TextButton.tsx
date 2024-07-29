import { css } from "@emotion/native";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import responsive from "@/tools/ratio";

interface Props {
  text: string;
}

const styles = StyleSheet.create({
  self: {
    backgroundColor: "#eeeeee",
    borderRadius: 8.3,
    paddingHorizontal: responsive(8.3),
    paddingVertical: responsive(4.1),
  },
  text: { color: "#333333", fontSize: responsive(18.4), fontWeight: "bold" },
});

function TextButton(props: Props) {
  return (
    <Pressable style={styles.self}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
}

export default TextButton;
