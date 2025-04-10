import React, { FC, ReactNode, useEffect, useRef } from "react";
import {
  Pressable,
  Text,
  View,
  Dimensions,
  ViewStyle,
  StyleSheet,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedKeyboard,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

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
  // TODO: 내장 animated에서 reanimated로 변경하기
  const animatedBackgroundOpacity = useSharedValue(0);

  const animatedContentOpacity = useSharedValue(0);
  const animatedContentScale = useSharedValue(0.88);
  // const animatedContentKeyboardHeightTranslate = useSharedValue(0);

  const keyboard = useAnimatedKeyboard();
  const animatedModalStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: -keyboard.height.value },
        { scale: animatedContentScale.value },
      ],
      opacity: animatedContentOpacity.value,
    };
  });

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
        bottom: responsive(0),
        position: "absolute",
        alignSelf: "center",
        overflow: "hidden",

        borderRadius: responsive(20),

        width: width,
      },
    }),
  };

  const animate = {
    backgroundFadeIn: () => {
      animatedBackgroundOpacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
    },

    contentFadeIn: () => {
      animatedContentOpacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
      animatedContentScale.value = withTiming(1, {
        duration: 200,
        easing: Easing.out(Easing.cubic),
      });
    },

    // contentFadeIn: () => {
    //   Animated.timing(animatedContentValue.opacity, {
    //     toValue: 1,
    //     duration: 300,
    //     easing: Easing.out(Easing.cubic),
    //     useNativeDriver: false,
    //   }).start();

    //   Animated.timing(animatedContentValue.scale, {
    //     toValue: 1,
    //     duration: 200,
    //     easing: Easing.out(Easing.cubic),
    //     useNativeDriver: false,
    //   }).start();
    // },
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
          { opacity: animatedBackgroundOpacity },
        ]}
      >
        <Pressable style={styles.view.background} onPress={() => setModal()} />
      </Animated.View>

      {/* <KeyboardAvoidingView
        style={styles.view.content}
        behavior="padding"
        // behavior={Platform.OS === "ios" ? "padding" : "padding"}
      > */}
      <Animated.View
        style={[
          styles.view.content,
          // animatedKeyboardStyle,
          animatedModalStyle,
          // {
          //   opacity: animatedContentOpacity,
          //   transform: [
          //     { scale: animatedContentScale },
          //     { translateY: -keyboard.height.value },
          //   ],
          //   position: "absolute",
          //   bottom: 0,
          // },
        ]}
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
      {/* </KeyboardAvoidingView> */}
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
