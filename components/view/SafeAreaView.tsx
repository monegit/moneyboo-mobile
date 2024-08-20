import React, { ReactNode } from "react";
import * as ReactNative from "react-native";

interface SafeAreaViewProps {
  children: ReactNode;
  style: ReactNative.ViewStyle;
}

const SafeAreaView: React.FC<SafeAreaViewProps> = ({ children, style }) => {
  return (
    <ReactNative.SafeAreaView
      style={[
        style,
        {
          paddingTop:
            ReactNative.Platform.OS === "android"
              ? ReactNative.StatusBar.currentHeight
              : 0,
        },
      ]}
    >
      {children}
    </ReactNative.SafeAreaView>
  );
};

// function SafeAreaView(children: React.JSX.Element) {
//   return (
//     <ReactNative.SafeAreaView
//       style={{
//         paddingTop:
//           ReactNative.Platform.OS === "android"
//             ? ReactNative.StatusBar.currentHeight
//             : 0,
//       }}
//     ></ReactNative.SafeAreaView>
//   );
// }

export default SafeAreaView;
