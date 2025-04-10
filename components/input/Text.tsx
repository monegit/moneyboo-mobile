import React from "react";
import * as ReactNative from "react-native";

interface Props {
  text: string | number;
  style?: ReactNative.TextStyle | ReactNative.TextStyle[];
}

function Text(props: Props) {
  return (
    <ReactNative.Text
      style={[
        props.style,
        {
          // fontFamily: "Inter",
          textAlignVertical: "center",
        },
      ]}
    >
      {props.text}
    </ReactNative.Text>
  );
}

export default Text;
