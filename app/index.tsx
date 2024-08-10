import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Redirect, useFocusEffect } from "expo-router";
import { ExpoRouter } from "expo-router/types/expo-router";

function index() {
  // const [screen, setScreen] = useState<ExpoRouter.Href>();
  // const login = false;

  useFocusEffect(() => {});
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* <Redirect href={"login"} /> */}
      {}
      <Redirect href={"login"} />
      {/* <Main /> */}
    </SafeAreaView>
  );
}

export default index;
