import React from "react";
import { Pressable } from "react-native";
import { Path, Svg } from "react-native-svg";

import { useModal } from "@/hooks/useModal";

import responsive from "@/tools/ratio";

function ModalCloseButton() {
  const { setModal } = useModal();

  return (
    <Pressable
      style={{
        borderRadius: 99,
        paddingHorizontal: responsive(5),
        paddingVertical: responsive(5),
        backgroundColor: "#F0F0F0",
      }}
      onPress={() => setModal()}
    >
      <Svg width={responsive(18)} height={responsive(18)} viewBox="0 0 18 18">
        <Path
          d="M13.5 4.49999C13.3593 4.35938 13.1686 4.2804 12.9697 4.2804C12.7709 4.2804 12.5801 4.35938 12.4395 4.49999L8.99999 7.93949L5.56049 4.49999C5.41984 4.35938 5.22911 4.2804 5.03024 4.2804C4.83136 4.2804 4.64063 4.35938 4.49999 4.49999C4.35938 4.64063 4.2804 4.83136 4.2804 5.03024C4.2804 5.22911 4.35938 5.41984 4.49999 5.56049L7.93949 8.99999L4.49999 12.4395C4.35938 12.5801 4.2804 12.7709 4.2804 12.9697C4.2804 13.1686 4.35938 13.3593 4.49999 13.5C4.64063 13.6406 4.83136 13.7196 5.03024 13.7196C5.22911 13.7196 5.41984 13.6406 5.56049 13.5L8.99999 10.0605L12.4395 13.5C12.5801 13.6406 12.7709 13.7196 12.9697 13.7196C13.1686 13.7196 13.3593 13.6406 13.5 13.5C13.6406 13.3593 13.7196 13.1686 13.7196 12.9697C13.7196 12.7709 13.6406 12.5801 13.5 12.4395L10.0605 8.99999L13.5 5.56049C13.6406 5.41984 13.7196 5.22911 13.7196 5.03024C13.7196 4.83136 13.6406 4.64063 13.5 4.49999V4.49999Z"
          fill="#777777"
        />
      </Svg>
    </Pressable>
  );
}

export default ModalCloseButton;
