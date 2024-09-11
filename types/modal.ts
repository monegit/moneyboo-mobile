import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export type ModalInfo = {
  style?: ViewStyle;
  header?: ReactNode | string;
  body?: ReactNode;
  info: { date: string };
};
