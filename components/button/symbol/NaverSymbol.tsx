import responsive from "@/tools/ratio";
import React from "react";
import Svg, { Path } from "react-native-svg";

function NaverSymbol() {
  return (
    <Svg
      width={responsive(16)}
      height={responsive(16)}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M12.7049 0.000941803V9.63358L6.03144 0.000941803H0.5V18H6.29506V8.36642L12.9676 17.9991H18.5V0H12.7049V0.000941803Z"
        fill="white"
      />
    </Svg>
  );
}

export default NaverSymbol;
