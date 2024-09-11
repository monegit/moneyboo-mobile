import { ModalInfo } from "@/types/modal";
import { atom } from "recoil";

export const modalState = atom<ModalInfo | null>({
  key: "modalState",
  default: null,
});

// const modalScreenState = atom({
//   key: "modalScreenState",
//   default: { screen: null,  },
// });
