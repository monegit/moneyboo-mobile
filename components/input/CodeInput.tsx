import responsive from "@/tools/ratio";
import React, { useEffect, useRef, useState } from "react";
import { View, TextInput, Pressable, StyleSheet, Text } from "react-native";

interface Props {
  codeLength: number;
}

function CodeInput(props: Props) {
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState<string[]>([]);

  const codebox = Array(props.codeLength).fill(0);

  const styles = {
    view: StyleSheet.create({
      component: {
        flexDirection: "row",
        gap: responsive(8),
      },

      hiddenCodeInput: {
        display: "none",
      },

      codebox: {
        justifyContent: "center",
        alignItems: "center",

        width: responsive(40),
        height: responsive(50),

        borderRadius: responsive(5),
        backgroundColor: "#4B4DDC",
      },
    }),

    text: StyleSheet.create({
      code: {
        color: "white",
        fontWeight: "bold",
        fontSize: responsive(24),
      },
    }),
  };

  useEffect(() => {
    if (code.length > props.codeLength)
      setCode(code.slice(0, props.codeLength - 1));
  }, []);

  const handleInputFocus = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <Pressable
      style={styles.view.component}
      onPress={() => {
        handleInputFocus();
      }}
    >
      <TextInput
        ref={inputRef}
        style={styles.view.hiddenCodeInput}
        onChangeText={(text) => {
          setCode(text.split(""));
        }}
        maxLength={props.codeLength}
        keyboardType="number-pad"
      />
      {codebox.map((_, index) => (
        <View key={`code-${index}`} style={styles.view.codebox}>
          <Text style={styles.text.code}>{code[index]}</Text>
        </View>
      ))}
    </Pressable>
  );
}

export default CodeInput;
