import React from "react";
import { router } from "expo-router";
import { SafeAreaView, View } from "react-native";

import SocialButton from "@/components/button/SocialButton";
import responsive from "@/tools/ratio";

function login() {
  return (
    <SafeAreaView>
      <View style={{ height: "100%", alignItems: "center" }}>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            gap: responsive(10),
            paddingBottom: responsive(50),
          }}
        >
          <SocialButton
            style={"naver"}
            width={300}
            onPress={() => {
              router.navigate("main");
            }}
          />
          <SocialButton
            style={"kakao"}
            width={300}
            onPress={() => {
              router.navigate("main");
            }}
          />
          <SocialButton
            style={"google"}
            width={300}
            onPress={() => {
              router.navigate("main");
            }}
          />
          <SocialButton
            style={"apple"}
            width={300}
            onPress={() => {
              router.navigate("main");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default login;
