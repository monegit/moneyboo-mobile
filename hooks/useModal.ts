import React from "react";
import { useRecoilState } from "recoil";

import { modalState } from "@/recoil/modal";

export function useModal() {
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
