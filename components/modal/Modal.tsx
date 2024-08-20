import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";

import { useModal } from "@/hooks/useModal";

import responsive from "@/tools/ratio";

import ModalCloseButton from "../button/ModalCloseButton";

function Modal() {
  const { modal, setModal } = useModal();

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Pressable
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(51,51,51,0.25)",
        }}
        onPress={() => setModal()}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <View
          style={{
            paddingHorizontal: responsive(20),
            paddingTop: responsive(20),
            paddingBottom: responsive(20),
            gap: responsive(25),
            backgroundColor: "white",
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: responsive(10),
            }}
          >
            {modal?.header ? (
              <Header content={modal?.header} />
            ) : (
              // 만약 header가 없는 상태면 body로 대체
              <View style={{ width: "100%" }}>{modal?.body}</View>
            )}

            <View style={{ position: "absolute", top: 0, right: 0 }}>
              <ModalCloseButton />
            </View>
          </View>

          {/* Content */}
          {modal?.header === undefined ? <></> : modal?.body}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

function Header(props: { content: string | React.JSX.Element }) {
  return (
    <>
      {typeof props.content === "string" ? (
        <Text
          style={{
            flex: 1,
            fontSize: responsive(18),
            fontWeight: "bold",
            fontFamily: "Inter",
          }}
        >
          {props.content}
        </Text>
      ) : (
        <>{props.content}</>
      )}
    </>
  );
}

export default Modal;
