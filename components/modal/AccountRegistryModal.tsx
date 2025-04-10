import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, View, Text, AppState } from "react-native";
import HiddenContentView from "../view/HiddenContentView";
import AccountRegistryChapterTitle from "../input/AccountRegistryChapterTitle";
import responsive from "@/tools/ratio";
import Input from "../input/Input";
import Button from "../button/Button";
import CodeInput from "../input/CodeInput";

function AccountRegistryModal() {
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [allowChapterLength, setAllowChapterLength] = useState(1);
  const appState = useRef(AppState.currentState);

  const styles = {
    view: StyleSheet.create({
      component: {
        justifyContent: "center",
        borderRadius: responsive(20),
        backgroundColor: "white",
      },
      chapter: {
        backgroundColor: "white",

        shadowColor: "#333333",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: -2 },
        shadowRadius: 4,

        borderTopLeftRadius: responsive(20),
        borderTopRightRadius: responsive(20),
        borderColor: "#E4E4E4",
        borderTopWidth: 1,

        paddingHorizontal: responsive(20),
        paddingVertical: responsive(20),
      },
      identifyTextInputGroup: {
        gap: responsive(5),
      },
      identifyTextGroup: {
        gap: responsive(10),
        alignItems: "center",
        flexDirection: "row",
      },
    }),

    text: StyleSheet.create({
      code: { fontWeight: "bold", color: "#6F6F6F" },
      codeMessage: { color: "#9D9D9D", fontSize: responsive(12) },
      codeResend: { color: "#6F6F6F", fontWeight: "bold" },
      identifyTitle: {
        color: "#444444",
        fontWeight: "bold",
        fontSize: responsive(14),
      },
      identifySubtitle: {
        color: "#FF8D86",
        fontWeight: "bold",
        fontSize: responsive(12),
      },
    }),

    component: StyleSheet.create({
      button: {
        height: responsive(32),
        minWidth: responsive(250),
        paddingVertical: 0,
      },
      buttonText: {
        fontSize: responsive(16),
      },
      input: {
        minWidth: responsive(250),
        height: responsive(30),
      },
    }),
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.view.component}>
      <Pressable
        style={styles.view.chapter}
        onPress={() => {
          if (allowChapterLength >= 1) setSelectedChapterIndex(0);
        }}
      >
        {/* Email Input Chapter */}
        <AccountRegistryChapterTitle
          number={1}
          title="이메일"
          subtitle="계정을 잃어버린 경우 찾기위한 수단으로 사용됩니다"
          isSelect={selectedChapterIndex === 0}
          isEnable={allowChapterLength >= 1}
        />
        <HiddenContentView
          isShow={selectedChapterIndex === 0}
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: responsive(20),
          }}
        >
          <Input
            placeholder="moneyboo@email.com"
            keyboardType="email-address"
            style={styles.component.input}
          />
          <Button
            text="확인"
            style={{
              button: styles.component.button,
              text: styles.component.buttonText,
            }}
            onPress={() => {}}
          />
        </HiddenContentView>
      </Pressable>

      {/* Email Check Input Chapter */}
      <Pressable
        style={styles.view.chapter}
        onPress={() => {
          if (allowChapterLength >= 2) setSelectedChapterIndex(1);
        }}
      >
        <AccountRegistryChapterTitle
          number={2}
          title="이메일 인증"
          subtitle="이메일을 정확하게 적었는지 확인하는 과정입니다"
          isSelect={selectedChapterIndex === 1}
          isEnable={allowChapterLength >= 2}
        />
        <HiddenContentView
          isShow={selectedChapterIndex === 1}
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: responsive(20),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text.codeMessage}>
              인증코드 만료까지 <Text style={styles.text.code}>4분 54초</Text>{" "}
              남았습니다.
            </Text>
          </View>

          <CodeInput codeLength={6} />
          <Pressable>
            <Text style={styles.text.codeResend}>코드 재전송</Text>
          </Pressable>
        </HiddenContentView>
      </Pressable>

      {/* Identify Information Input Chapter */}
      <Pressable
        style={styles.view.chapter}
        onPress={() => {
          if (allowChapterLength >= 3) setSelectedChapterIndex(2);
        }}
      >
        <AccountRegistryChapterTitle
          number={3}
          title="계정"
          subtitle="가계부를 저장하기 위한 계정 정보를 입력합니다"
          isSelect={selectedChapterIndex === 2}
          isEnable={allowChapterLength >= 3}
        />
        <HiddenContentView
          isShow={selectedChapterIndex === 2}
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: responsive(12),
          }}
        >
          <View style={styles.view.identifyTextInputGroup}>
            <View style={styles.view.identifyTextGroup}>
              <Text style={styles.text.identifyTitle}>아이디</Text>
              <Text style={styles.text.identifySubtitle}>아이디</Text>
            </View>
            <Input placeholder="moneyboo111" style={styles.component.input} />
          </View>
          <View style={styles.view.identifyTextInputGroup}>
            <View style={styles.view.identifyTextGroup}>
              <Text style={styles.text.identifyTitle}>비밀번호</Text>
              <Text style={styles.text.identifySubtitle}>비밀번호</Text>
            </View>

            <Input
              placeholder="Moneyboo@111"
              style={styles.component.input}
              isPassword
            />
          </View>
          <Button
            text="시작하기"
            style={{
              button: styles.component.button,
              text: styles.component.buttonText,
            }}
          />
        </HiddenContentView>
      </Pressable>
    </View>
  );
}

export default AccountRegistryModal;
