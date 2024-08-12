import { Slot } from "expo-router";
import "react-native-reanimated";
import { RecoilRoot } from "recoil";

export default function RootLayout() {
  return (
    <RecoilRoot>
      <Slot />
    </RecoilRoot>
  );
}
