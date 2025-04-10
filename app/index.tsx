import React, { useEffect, useState } from "react";
import { Redirect, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native";
import { SQLiteProvider } from "expo-sqlite";
import { init } from "@/db/db";

function index() {
  useFocusEffect(() => {});
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Redirect href={"/main"} />
      {/* <Redirect href={"/main"} /> */}
    </SafeAreaView>
  );
}

export default index;
