import responsive from "@/tools/ratio";
import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

function KakaoSymbol() {
  return (
    <Svg
      width={responsive(18)}
      height={responsive(18)}
      viewBox="0 0 20 20"
      fill="none"
    >
      <G clip-path="url(#clip0_408_1334)">
        <Path
          opacity="0.902"
          d="M9.5 0.944092C4.79 0.944092 0.5 4.73009 0.5 7.93309C0.5 10.3331 2.058 12.4501 4.431 13.7081L3.433 17.3741C3.344 17.6991 3.713 17.9571 3.996 17.7701L8.373 14.8651C8.742 14.9011 9.118 14.9221 9.5 14.9221C14.47 14.9221 18.5 11.7931 18.5 7.93309C18.5 4.73009 14.47 0.944092 9.5 0.944092Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_408_1334">
          <Rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default KakaoSymbol;
