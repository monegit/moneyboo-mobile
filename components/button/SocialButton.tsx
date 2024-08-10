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
import { ClipPath, Defs, G, Path, Polygon, Rect, Svg } from "react-native-svg";

import responsive from "@/tools/ratio";

type SocialType = "apple" | "google" | "kakao" | "naver";

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
          // backgroundColor: "orange",
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

function AppleSymbol() {
  return (
    <Svg
      width={responsive(14)}
      height={responsive(18)}
      viewBox="0 0 14 18"
      fill="none"
    >
      <Path
        d="M7.25038 3.94615C7.99921 3.94615 8.93788 3.42435 9.49686 2.72861C10.0031 2.09809 10.3723 1.21755 10.3723 0.336999C10.3723 0.217418 10.3617 0.0978386 10.3406 0C9.50741 0.0326129 8.50546 0.57616 7.90429 1.30451C7.42968 1.85893 6.99725 2.72861 6.99725 3.62003C6.99725 3.75048 7.01835 3.88093 7.02889 3.92441C7.08163 3.93528 7.166 3.94615 7.25038 3.94615ZM4.61366 17.1C5.63671 17.1 6.09022 16.3934 7.36639 16.3934C8.66366 16.3934 8.94843 17.0783 10.0875 17.0783C11.2055 17.0783 11.9543 16.0129 12.6609 14.9693C13.4519 13.7735 13.7789 12.5994 13.8 12.5451C13.7262 12.5233 11.5851 11.621 11.5851 9.08811C11.5851 6.89218 13.2726 5.90292 13.3676 5.82683C12.2496 4.17444 10.5516 4.13096 10.0875 4.13096C8.83241 4.13096 7.80936 4.91367 7.166 4.91367C6.46991 4.91367 5.55233 4.17444 4.466 4.17444C2.39882 4.17444 0.299988 5.93554 0.299988 9.26205C0.299988 11.3275 1.08046 13.5126 2.04022 14.9258C2.86288 16.1216 3.58007 17.1 4.61366 17.1Z"
        fill="white"
      />
    </Svg>
  );
}

function GoogleSymbol() {
  return (
    // <Image src={google_logo} />
    <Svg width={responsive(20)} height={responsive(20)} viewBox="0 0 32 32">
      <Path
        d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
        fill="#00ac47"
      />
      <Path
        d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
        fill="#4285f4"
      />
      <Path
        d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
        fill="#ffba00"
      />
      <Polygon
        fill="#2ab2db"
        points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
      />
      <Path
        d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
        fill="#ea4435"
      />
      <Polygon
        fill="#2ab2db"
        points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
      />
      <Path
        d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
        fill="#4285f4"
      />
    </Svg>
  );
}

function KakaoSymbol() {
  return (
    <Svg
      width={responsive(18)}
      height={responsive(18)}
      viewBox="0 0 20 20"
      fill="none"
    >
      <G clip-path="url(#clip0_408_1334)">
        <Path
          opacity="0.902"
          d="M9.5 0.944092C4.79 0.944092 0.5 4.73009 0.5 7.93309C0.5 10.3331 2.058 12.4501 4.431 13.7081L3.433 17.3741C3.344 17.6991 3.713 17.9571 3.996 17.7701L8.373 14.8651C8.742 14.9011 9.118 14.9221 9.5 14.9221C14.47 14.9221 18.5 11.7931 18.5 7.93309C18.5 4.73009 14.47 0.944092 9.5 0.944092Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_408_1334">
          <Rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function NaverSymbol() {
  return (
    <Svg
      width={responsive(16)}
      height={responsive(16)}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M12.7049 0.000941803V9.63358L6.03144 0.000941803H0.5V18H6.29506V8.36642L12.9676 17.9991H18.5V0H12.7049V0.000941803Z"
        fill="white"
      />
    </Svg>
  );
}

export default SocialButton;
