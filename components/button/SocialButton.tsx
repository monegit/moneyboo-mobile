import React, { useEffect, useState } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
  Text,
  TextStyle,
} from "react-native";

import responsive from "@/tools/ratio";

import AppleSymbol from "./symbol/AppleSymbol";
import GoogleSymbol from "./symbol/GoogleSymbol";
import KakaoSymbol from "./symbol/KakaoSymbol";
import NaverSymbol from "./symbol/NaverSymbol";

type SocialType = "email" | "apple" | "google" | "kakao" | "naver";

interface Props {
  width?: number;
  height?: number;
  style: SocialType;
  onPress?: PressableProps["onPress"];
}

function SocialButton(props: Props) {
  const [socialTheme, setSocialTheme] = useState<{
    symbol: React.JSX.Element;
    style: { template?: StyleProp<ViewStyle>; text?: StyleProp<TextStyle> };
    text: string;
  }>();

  useEffect(() => {
    switch (props.style) {
      case "apple":
        setSocialTheme({
          symbol: AppleSymbol(),
          style: {
            template: { backgroundColor: "black" },
            text: { color: "white" },
          },
          text: "Apple",
        });
        break;
      case "google":
        setSocialTheme({
          symbol: GoogleSymbol(),
          style: {
            template: {
              backgroundColor: "white",
              borderColor: "black",
              borderWidth: 1,
            },
          },
          text: "Google",
        });
        break;
      case "kakao":
        setSocialTheme({
          symbol: KakaoSymbol(),
          style: { template: { backgroundColor: "#FEE500" } },
          text: "카카오",
        });
        break;
      case "naver":
        setSocialTheme({
          symbol: NaverSymbol(),
          style: {
            template: { backgroundColor: "#03C75A" },
            text: { color: "white" },
          },
          text: "네이버",
        });
        break;
    }
  }, []);

  return (
    <Pressable
      style={[
        socialTheme?.style.template,
        {
          flexDirection: "row",
          width: responsive(props?.width ?? 250),
          height: responsive(props.height ?? 40),

          gap: responsive(10),
          borderRadius: responsive(12),

          paddingHorizontal: responsive(15),

          alignItems: "center",
        },
      ]}
      onPress={props.onPress}
    >
      <View
        style={{
          width: responsive(20),
          height: responsive(20),

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {socialTheme?.symbol}
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={[
            socialTheme?.style.text,
            { fontSize: responsive(14), fontFamily: "Inter" },
          ]}
        >
          {socialTheme?.text}로 시작하기
        </Text>
      </View>
    </Pressable>
  );
}

export default SocialButton;
