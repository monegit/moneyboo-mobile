import React from "react";
import { Pressable, Text, View } from "react-native";

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
          flex: 1,
          backgroundColor: "rgba(51,51,51,0.25)",
        }}
        onPress={() => setModal()}
      />
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
          <Text
            style={{
              flex: 1,
              fontSize: responsive(18),
              fontWeight: "bold",
              fontFamily: "Inter",
            }}
          >
            {modal?.header}
          </Text>
          <ModalCloseButton />
        </View>

        {/* Content */}
        <View>{modal?.content}</View>
      </View>
    </View>
  );
}

export default Modal;
