import responsive from "@/tools/ratio";
import React from "react";
import Svg, { Path, Polygon } from "react-native-svg";

function GoogleSymbol() {
  return (
    // <Image src={google_logo} />
    <Svg width={responsive(20)} height={responsive(20)} viewBox="0 0 32 32">
      <Path
        d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
        fill="#00ac47"
      />
      <Path
        d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
        fill="#4285f4"
      />
      <Path
        d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
        fill="#ffba00"
      />
      <Polygon
        fill="#2ab2db"
        points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
      />
      <Path
        d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
        fill="#ea4435"
      />
      <Polygon
        fill="#2ab2db"
        points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
      />
      <Path
        d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
        fill="#4285f4"
      />
    </Svg>
  );
}

export default GoogleSymbol;