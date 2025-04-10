import responsive from "@/tools/ratio";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, View, ViewStyle } from "react-native";
import Text from "./Text";

interface Props {
  number: number;
  title: string;
  subtitle?: string;
  isEnable?: boolean;
  isSelect?: boolean;
}

function AccountRegistryChapterTitle(props: Props) {
  const animatedSelectChapterValue = useRef(new Animated.Value(0)).current;

  const primaryColorValue = animatedSelectChapterValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["#b0b0b0", "rgba(75, 77, 220, 0.4)", "rgba(75, 77, 220, 1)"],
  });

  const subtitleHeightValue = animatedSelectChapterValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 0, responsive(15)],
  });

  const disabledChapterAnimation = () => {
    Animated.timing(animatedSelectChapterValue, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    });
  };

  const unselectedChapterAnimation = () => {
    Animated.timing(animatedSelectChapterValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  const selectedChapterAnimation = () => {
    Animated.timing(animatedSelectChapterValue, {
      toValue: 2,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  const styles = {
    view: StyleSheet.create({
      component: {
        alignItems: "center",
        flexDirection: "row",

        gap: responsive(10),
      },

      number: {
        backgroundColor: "white",

        width: responsive(40),
        height: responsive(30),

        alignItems: "center",

        borderRadius: 99,
        borderWidth: responsive(4),
      },

      title: {
        flexDirection: "column",
      },
    }),

    text: StyleSheet.create({
      number: {
        fontSize: responsive(18),
        fontWeight: "bold",
      },

      title: {
        fontSize: responsive(16),
        fontWeight: "bold",
      },

      subtitle: {
        color: "#898BE7",
        fontSize: responsive(12),
      },
    }),
  };

  useEffect(() => {
    if (!props.isEnable) {
      disabledChapterAnimation();
    } else {
      if (props.isSelect) {
        selectedChapterAnimation();
      } else {
        unselectedChapterAnimation();
      }
    }
  }, [props.isSelect, props.isEnable]);

  useEffect(() => {});

  return (
    <View style={styles.view.component}>
      <Animated.View
        style={[styles.view.number, { borderColor: primaryColorValue }]}
      >
        <Animated.Text
          style={[styles.text.number, { color: primaryColorValue }]}
        >
          {props.number}
        </Animated.Text>
      </Animated.View>

      <View style={styles.view.title}>
        <Animated.Text
          style={[styles.text.title, { color: primaryColorValue }]}
        >
          {props.title}
        </Animated.Text>
        {props.subtitle ? (
          <Animated.View
            style={{
              height: subtitleHeightValue,
            }}
          >
            <Text text={props.subtitle} style={styles.text.subtitle} />
          </Animated.View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

export default AccountRegistryChapterTitle;
