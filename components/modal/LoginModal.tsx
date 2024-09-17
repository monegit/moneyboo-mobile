import responsive from "@/tools/ratio";
import React from "react";
import { Pressable, StyleSheet, Text, TextStyle, View } from "react-native";
import Input from "../input/Input";
import Button from "../button/Button";
import { router } from "expo-router";
import { useModal } from "@/hooks/useModal";

function LoginModal() {
  const { setModal } = useModal();

  const styles = {
    view: StyleSheet.create({
      component: {
        gap: responsive(20),
        // height: responsive(300),
        paddingVertical: responsive(40),
        paddingHorizontal: responsive(40),
        backgroundColor: "white",
      },
      identifyInputGroup: {
        gap: responsive(5),
      },
      buttonGroup: {
        gap: responsive(5),
      },
      findMyAccount: {
        alignSelf: "center",
      },
    }),

    text: StyleSheet.create({
      inputTitle: {
        color: "#444444",
        fontWeight: "bold",
        fontSize: responsive(14),
      },
      findMyAccount: { fontSize: responsive(12), color: "#999999" },
    }),

    component: StyleSheet.create({
      input: {
        padding: responsive(10),
      },
    }),
  };

  return (
    <View style={styles.view.component}>
      <View style={styles.view.identifyInputGroup}>
        <Text style={styles.text.inputTitle}>아이디</Text>
        <Input style={styles.component.input} />
      </View>

      <View style={styles.view.identifyInputGroup}>
        <Text style={styles.text.inputTitle}>비밀번호</Text>
        <Input style={styles.component.input} isPassword />
      </View>

      <View style={styles.view.buttonGroup}>
        <Button
          text="로그인"
          onPress={() => {
            setModal();
            router.navigate("/main");
          }}
        />

        <Pressable style={styles.view.findMyAccount}>
          <Text style={styles.text.findMyAccount}>머니부 로그인이 안돼요</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default LoginModal;
