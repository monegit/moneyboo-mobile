import { ViewStyle } from "react-native";

export type ModalInfo = {
  style?: ViewStyle;
  header?: React.JSX.Element | string;
  body?: React.JSX.Element;
  info: { date: string };
};
