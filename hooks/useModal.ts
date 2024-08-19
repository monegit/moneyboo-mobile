import React from "react";
import { useRecoilState } from "recoil";

import { modalState } from "@/recoil/modal";

export function useModal() {
  const [modal, _setModal] = useRecoilState(modalState);
  // const [visible, setVisible] = useState(false);

  const setModal = (child?: {
    body?: ModalInfo["body"];
    header?: ModalInfo["header"];
  }) => {
    if (modal !== null) _setModal(null);
    else
      _setModal({
        body: child?.body,
        header: child?.header,
        info: { date: "" },
      });
  };

  return { modal, setModal };
}
