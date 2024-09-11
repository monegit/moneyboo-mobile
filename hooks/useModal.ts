import { useRecoilState } from "recoil";

import { modalState } from "@/recoil/modal";
import { ModalInfo } from "@/types/modal";

export function useModal() {
  const [modal, _setModal] = useRecoilState(modalState);
  // const [visible, setVisible] = useState(false);

  const setModal = (child?: {
    style?: ModalInfo["style"];
    body?: ModalInfo["body"];
    header?: ModalInfo["header"];
  }) => {
    if (modal !== null) _setModal(null);
    else
      _setModal({
        style: child?.style,
        body: child?.body,
        header: child?.header,
        info: { date: "" },
      });
  };

  return { modal, setModal };
}
