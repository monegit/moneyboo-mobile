import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Main from "@/screens/Main";

function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Main />
    </SafeAreaView>
  );
}

export default index;
