import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import Text from "../input/Text";
import responsive from "@/tools/ratio";

type SelectedButtonStyleType = {
  selectedBackgroundColor?: string;
  borderColor?: string;
  textColor?: string;
};

type SelectButtonType = {
  text: string;
  type?: string;
  style: SelectedButtonStyleType;
};

interface Props {
  style?: ViewStyle;

  buttonData: SelectButtonType[];
  defaultIndex?: number;
  onSelectChange?: (data: SelectButtonType) => void;
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

  // props.onSelectChange = (data) => {
  // return props.buttonData[selectedButtonIndex];
  // };

  return (
    <View
      style={[
        styles.view,
        {
          borderColor: props.buttonData[selectedButtonIndex].style.borderColor,
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
                  ? button.style.selectedBackgroundColor
                  : "white",
            },
          ]}
          onPress={() => {
            setSelectedButtonIndex(index);
            props.onSelectChange?.(button);
          }}
        >
          <Text
            text={button.text}
            style={{
              color:
                selectedButtonIndex === index
                  ? button.style.textColor
                  : "#b6b6b6",
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
