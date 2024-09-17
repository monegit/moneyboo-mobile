import React from "react";
import { StyleSheet, TextInput, TextStyle } from "react-native";

import responsive from "@/tools/ratio";

interface Props {
  style?: TextStyle;
  placeholder?: string;
  placeholderTextColor?: string;

  keyboardType?: "default" | "email-address" | "number-pad";
  isPassword?: boolean;
}

function Input(props: Props) {
  const style = StyleSheet.create({
    input: {
      fontWeight: props.style?.fontWeight ?? "bold",
      color: props.style?.color ?? "#444444",

      backgroundColor: props.style?.backgroundColor ?? "#F0F0F0",

      textAlign: props.style?.textAlign ?? "center",
      textAlignVertical: props.style?.textAlignVertical ?? "center",

      fontSize: props.style?.fontSize ?? responsive(14),

      borderRadius: props.style?.borderRadius ?? responsive(10),

      paddingVertical:
        (props.style?.paddingVertical || props.style?.padding) ?? responsive(5),
      paddingHorizontal:
        (props.style?.paddingHorizontal || props.style?.padding) ??
        responsive(10),

      minWidth: props.style?.minWidth ?? responsive(85),
    },
  });

  return (
    <TextInput
      style={[props.style, style.input]}
      placeholderTextColor={props.placeholderTextColor ?? "#9D9D9D"}
      placeholder={props.placeholder} // 텍스트 예제
      autoCapitalize="none" // 자동 대소문자 방지
      autoCorrect={false} // 자동 수정 방지
      keyboardType={props.keyboardType} // 키보드 타입
      secureTextEntry={props.isPassword ?? false} // 비밀번호 대체 텍스트
      // passwordRules={} // TODO: password rules 입력하기
    />
  );
}

export default Input;
