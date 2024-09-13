import React, { ReactElement, ReactNode, useState } from "react";
import { router } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

import SocialButton from "@/components/button/SocialButton";
import responsive from "@/tools/ratio";
import Button from "@/components/button/Button";
import Modal from "@/components/modal/Modal";
import { useModal } from "@/hooks/useModal";
import AccountRegistryModal from "@/components/modal/AccountRegistryModal";

function onboard() {
  const { modal, setModal } = useModal();
  // const [modal, setModal] = useState<ReactElement | null>(null);

  return (
    <SafeAreaView>
      <View style={{ height: "100%", alignItems: "center" }}>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            gap: responsive(30),

            paddingBottom: responsive(30),
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              gap: responsive(10),
            }}
          >
            <Text style={{ color: "#737373", fontSize: responsive(10) }}>
              당신만의 작은 가계부, 머니부 간편하게 시작하기
            </Text>
            <SocialButton
              style={"naver"}
              width={300}
              onPress={() => {
                router.push("/main");
                // router.navigate("/main");
              }}
            />
            <SocialButton
              style={"kakao"}
              width={300}
              onPress={() => {
                router.navigate("/main");
              }}
            />
            <SocialButton
              style={"google"}
              width={300}
              onPress={() => {
                router.navigate("/main");
              }}
            />
            <SocialButton
              style={"apple"}
              width={300}
              onPress={() => {
                router.navigate("/main");
              }}
            />
          </View>
          <View
            style={{
              width: responsive(300),

              alignItems: "center",
              gap: responsive(10),
            }}
          >
            <Text style={{ color: "#737373", fontSize: responsive(10) }}>
              이메일 인증을 통한 회원가입
            </Text>
            <View
              style={{
                gap: responsive(10),
                flexDirection: "row",
              }}
            >
              <Button
                text={"머니부 회원가입"}
                style={{
                  button: {
                    flex: 1,
                    height: responsive(30),

                    backgroundColor: "white",

                    borderColor: "#4b4ddc",
                    borderWidth: 1,

                    justifyContent: "center",
                    alignItems: "center",

                    borderRadius: responsive(12),
                    paddingVertical: 0,
                  },
                  text: {
                    fontSize: responsive(14),
                    fontWeight: "normal",

                    color: "#4b4ddc",
                  },
                }}
                onPress={() => {
                  // setModal(<AccountRegistryModal />);
                  setModal({
                    body: <AccountRegistryModal />,
                    style: {
                      borderRadius: responsive(20),
                      paddingHorizontal: 0,
                      paddingVertical: 0,
                    },
                  });
                  // router.push("/account/login");
                }}
              />
              <Button
                text={"머니부 로그인"}
                style={{
                  button: {
                    flex: 1,
                    height: responsive(30),

                    backgroundColor: "#4b4ddc",

                    justifyContent: "center",
                    alignItems: "center",

                    borderRadius: responsive(12),

                    paddingVertical: 0,
                  },
                  text: {
                    fontSize: responsive(14),
                    fontWeight: "normal",

                    color: "white",
                  },
                }}
              />
            </View>
          </View>
        </View>
      </View>

      {modal === null ? (
        <></>
      ) : (
        <Modal hasCloseButton={false}>{modal.body}</Modal>
      )}
    </SafeAreaView>
  );
}

export default onboard;
