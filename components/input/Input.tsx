import responsive from "@/tools/ratio";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  fontSize?: number;
  placeholder?: string;
}

const style = StyleSheet.create({
  input: {
    fontFamily: "Inter",
    fontWeight: "bold",
    color: "#444444",

    backgroundColor: "#F0F0F0",

    textAlign: "center",
    textAlignVertical: "center",
  },
});

function Input(props: Props) {
  return (
    <TextInput
      style={[
        style.input,
        {
          fontSize: props.fontSize ?? responsive(14),

          borderRadius: responsive(10),

          paddingVertical: responsive(5),
          paddingHorizontal: responsive(10),

          minWidth: responsive(100),
        },
      ]}
      placeholderTextColor={"#9D9D9D"}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
