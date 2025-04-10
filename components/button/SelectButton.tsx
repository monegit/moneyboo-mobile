import React, { useState } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import Text from "../input/Text";
import responsive from "@/tools/ratio";

type SelectButtonType = {
  text: string;
  selectedBackgroundColor: string;
  borderColor: string;
  textColor: string;
};

interface Props {
  buttonData: SelectButtonType[];
  defaultIndex?: number;

  style?: ViewStyle;
}

function SelectButton(props: Props) {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(
    props.defaultIndex ?? 0
  );

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      flexDirection: "row",

      gap: props.style?.gap ?? responsive(3),

      borderWidth: props.style?.borderWidth ?? 1,
      borderRadius: props.style?.borderRadius ?? 10,

      padding: props.style?.padding ?? responsive(3),
    } as ViewStyle,

    button: {
      flex: 1,

      borderRadius: 7,

      paddingVertical: responsive(7),
    } as ViewStyle,
  });

  return (
    <View
      style={[
        styles.view,
        {
          borderColor: props.buttonData[selectedButtonIndex].borderColor,
        },
      ]}
    >
      {props.buttonData.map((button, index) => (
        <Pressable
          key={index}
          style={[
            styles.button,
            {
              backgroundColor:
                selectedButtonIndex === index
                  ? button.selectedBackgroundColor
                  : "white",
            },
          ]}
          onPress={() => {
            setSelectedButtonIndex(index);
          }}
        >
          <Text
            text={button.text}
            style={{
              color:
                selectedButtonIndex === index ? button.textColor : "#b6b6b6",
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
        </Pressable>
      ))}
    </View>
  );
}

export default SelectButton;
