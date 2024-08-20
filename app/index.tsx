import React, { useEffect, useState } from "react";
import { Redirect, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

function index() {
  useFocusEffect(() => {});
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* <Redirect href={"login"} /> */}
      <Redirect href={"/main"} />
    </SafeAreaView>
  );
}

export default index;
