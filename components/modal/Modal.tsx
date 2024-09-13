import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
  Dimensions,
  ViewStyle,
  StyleSheet,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useModal } from "@/hooks/useModal";

import responsive from "@/tools/ratio";

import ModalCloseButton from "../button/ModalCloseButton";

interface Props {
  hasCloseButton?: boolean;
  isAlignCloseButton?: boolean;
  style?: ViewStyle;
  children: ReactNode;
}

const Modal: FC<Props> = ({
  hasCloseButton,
  style,
  isAlignCloseButton,
  children,
}) => {
  const { modal, setModal } = useModal();
  const animatedBackgroundValue = useRef({
    opacity: new Animated.Value(0),
  }).current;
  const animatedContentValue = useRef({
    opacity: new Animated.Value(0),
    scale: new Animated.Value(0.88),
  }).current;

  const { height, width } = Dimensions.get("window");

  const styles = {
    view: StyleSheet.create({
      component: {
        position: "absolute",
        width: width,
        height: height,
      },
      backgroundAnimatedView: {
        position: "absolute",
        height: "100%",
        width: "100%",
      },
      background: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(51,51,51,0.25)",
      },
      content: {
        bottom: responsive(30),
        position: "absolute",
        alignSelf: "center",
        overflow: "hidden",

        borderRadius: responsive(20),

        width: width - responsive(20),
      },
    }),
  };

  const animate = {
    backgroundFadeIn: () => {
      Animated.timing(animatedBackgroundValue.opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    },

    contentFadeIn: () => {
      Animated.timing(animatedContentValue.opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();

      Animated.timing(animatedContentValue.scale, {
        toValue: 1,
        duration: 200,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    },
  };

  useEffect(() => {
    animate.backgroundFadeIn();

    animate.contentFadeIn();
  }, []);

  return (
    <View style={styles.view.component}>
      <Animated.View
        style={[
          styles.view.backgroundAnimatedView,
          { opacity: animatedBackgroundValue.opacity },
        ]}
      >
        <Pressable style={styles.view.background} onPress={() => setModal()} />
      </Animated.View>

      <KeyboardAvoidingView
        style={styles.view.content}
        behavior="padding"
        // behavior={Platform.OS === "ios" ? "padding" : "padding"}
      >
        <Animated.View
          style={{
            opacity: animatedContentValue.opacity,
            transform: [{ scale: animatedContentValue.scale }],
          }}
        >
          {children}

          <View
            style={{
              position: "absolute",
              top: responsive(15),
              right: responsive(15),
            }}
          >
            {hasCloseButton ?? <></> ? <ModalCloseButton /> : <></>}
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </View>

    //   <View
    //     style={{
    //       position: "absolute",
    //       width: width,
    //       height: height,
    //     }}
    //   >
    //     <Pressable
    //       style={{
    //         position: "absolute",
    //         height: "100%",
    //         width: "100%",
    //         backgroundColor: "rgba(51,51,51,0.25)",
    //       }}
    //       onPress={() => setModal()}
    //     />
    //     <KeyboardAvoidingView
    //       behavior={Platform.OS === "ios" ? "padding" : "height"}
    //       style={{ bottom: 0, position: "absolute" }}
    //     >
    //       <View
    //         style={[
    //           style,
    //           {
    //             paddingHorizontal: style?.paddingHorizontal ?? responsive(20),
    //             paddingVertical: style?.paddingVertical ?? responsive(20),
    //             gap: style?.gap ?? responsive(25),
    //             backgroundColor: style?.backgroundColor ?? "white",
    //           },
    //         ]}
    //       >
    //         {/* Header */}
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             alignItems: "center",
    //             gap: responsive(10),
    //           }}
    //         >
    //           {modal?.header ? (
    //             <Header content={modal?.header} />
    //           ) : (
    //             // 만약 header가 없는 상태면 body로 대체
    //             <View style={{ width: "100%" }}>{modal?.body}</View>
    //           )}

    //           <View style={{ position: "absolute", top: 0, right: 0 }}>
    //             {hasCloseButton ?? <></> ? <ModalCloseButton /> : <></>}
    //           </View>
    //         </View>

    //         {/* Content */}
    //         {modal?.header === undefined ? <></> : modal?.body}
    //       </View>
    //     </KeyboardAvoidingView>
    //   </View>
  );
};

// function Modal(props: Props) {

// }

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
