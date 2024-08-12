import { modalState } from "@/recoil/modal";
import React, { useState } from "react";
import { View } from "react-native";
import { useRecoilState } from "recoil";

export default function useModal() {
  const [modal, _setModal] = useRecoilState(modalState);
  // const [visible, setVisible] = useState(false);

  const setModal = (
    header?: React.JSX.Element | string,
    content?: React.JSX.Element
  ) => {
    if (modal !== null) _setModal(null);
    else _setModal({ header: header, content: content, info: { date: "" } });
  };

  return { modal, setModal };
}
