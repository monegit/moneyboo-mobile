import React, {
  FC,
  LegacyRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Animated,
  Easing,
  Keyboard,
  LayoutChangeEvent,
  Pressable,
  View,
  ViewStyle,
} from "react-native";
import responsive from "@/tools/ratio";

interface Props {
  children: ReactNode;
  isShow: boolean;
  style?: ViewStyle;
}

const HiddenContentView: FC<Props> = ({ children, isShow, style }) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const showAnimation = () => {
    Animated.timing(animatedHeight, {
      toValue: responsive(180),
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 150,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  const hideAnimation = () => {
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 150,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    isShow ? showAnimation() : hideAnimation();
  }, [isShow]);

  return (
    <Animated.View
      style={[
        style,
        { overflow: "hidden" },
        { height: animatedHeight, opacity: animatedOpacity },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default HiddenContentView;
