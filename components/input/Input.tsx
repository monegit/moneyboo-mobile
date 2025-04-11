import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
} from "react-native";

import responsive from "@/tools/ratio";
import Text from "./Text";

interface Props {
  style?: TextStyle;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "number-pad";
  returnkeyType?: "next" | "done";
  isPassword?: boolean;
  onChangeText?: (value: string) => void;
  // onChange?: (value: string) => void;

  placeholderTextColor?: string;
  suffixText?: string;
  isInputWidthFit?: boolean;
  inputStyleType?: "rounded" | "underline";
}

function Input(props: Props) {
  const [typedText, setTypedText] = useState<string>("");
  const inputRef = useRef<TextInput>(null);

  // props.onChangeText = (value: string) => {
  //   setTypedText(value);
  //   // props.onChange(value);
  // };

  const style = StyleSheet.create({
    view: {
      flex: 1,

      backgroundColor: props.style?.backgroundColor ?? "#F0F0F0",

      borderRadius: props.style?.borderRadius ?? responsive(10),

      paddingVertical:
        (props.style?.paddingVertical || props.style?.padding) ?? responsive(5),
      paddingHorizontal:
        (props.style?.paddingHorizontal || props.style?.padding) ??
        responsive(10),
    } as ViewStyle,

    input: {
      flex: 1,
      fontWeight: props.style?.fontWeight ?? "bold",
      color: props.style?.color ?? "#444444",

      textAlign: props.style?.textAlign ?? "center",
      textAlignVertical: props.style?.textAlignVertical ?? "center",

      fontSize: props.style?.fontSize ?? responsive(14),

      minWidth: props.style?.minWidth ?? responsive(85),
    } as TextStyle,
  });

  const underlineStyle = StyleSheet.create({
    view: {
      flex: 1,

      paddingVertical:
        (props.style?.paddingVertical || props.style?.padding) ??
        responsive(10),
    } as ViewStyle,
    input: {
      flex: 1,

      fontWeight: props.style?.fontWeight ?? "bold",
      fontSize: props.style?.fontSize ?? responsive(14),
      // backgroundColor: "red",

      textAlign: props.style?.textAlign ?? "center",
      textAlignVertical: props.style?.textAlignVertical ?? "center",

      paddingBottom: responsive(3),
      borderBottomWidth: 1,
      borderColor: "#B7B8F1",
      // lineHeight: responsive(24),
    } as TextStyle,
  });

  const viewStyleSelector = () => {
    if (props.inputStyleType === "rounded") return style.view;
    if (props.inputStyleType === "underline") return underlineStyle.view;

    return style.view;
  };

  const inputStyleSelector = () => {
    if (props.inputStyleType === "rounded") return style.input;
    if (props.inputStyleType === "underline") return underlineStyle.input;

    return style.input;
  };

  return (
    <Pressable
      style={[
        viewStyleSelector(),
        { flexDirection: "row", alignItems: "center" },
      ]}
      onPress={() => {
        if (inputRef.current) inputRef.current.focus();
      }}
    >
      <TextInput
        ref={inputRef}
        style={[props.style, inputStyleSelector()]}
        placeholderTextColor={props.placeholderTextColor ?? "#9D9D9D"}
        placeholder={props.placeholder} // 텍스트 예제
        autoCapitalize="none" // 자동 대소문자 방지
        autoCorrect={false} // 자동 수정 방지
        keyboardType={props.keyboardType} // 키보드 타입
        returnKeyType={props.returnkeyType} // 다음 키보드 타입
        secureTextEntry={props.isPassword ?? false} // 비밀번호 대체 텍스트
        onChangeText={(value) => {
          props.onChangeText?.(value);
          setTypedText(value);
        }}
      />
      {props.suffixText && typedText ? (
        <Text
          text={props.suffixText}
          style={{
            fontWeight: "bold",
            color: "#444444",
            fontSize: props.style?.fontSize ?? responsive(14),
          }}
        />
      ) : (
        <></>
      )}
    </Pressable>
  );
}

export default Input;
