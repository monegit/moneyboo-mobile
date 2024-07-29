import responsive from "@/tools/ratio";
import React from "react";
import { Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import Summary from "../summary/Summary";
import HorizontalLine from "../HorizontalLine";

interface Props {
  // angle: {
  //   start: number;
  //   end: number;
  // };
  size: number;
  dataSet: { price: number; name: string }[];
  colorSet: string[];
  // legendFontSize: number;
}

function ChartPie(props: Props) {
  const size = responsive(props.size);

  // const startAngle = props.angle.start;
  // const endAngle = props.angle.end;
  const Pie = (props: {
    color: string;
    data: number;
    angle: {
      start: number;
      end: number;
    };
  }) => {
    const startAngle = props.angle.start;
    const endAngle = props.angle.end;

    const radius = size / 2;
    const centerX = size / 2;
    const centerY = size / 2;

    const startAngleRadius = (Math.PI / 180) * startAngle;
    const endAngleRadius = (Math.PI / 180) * endAngle;

    const startX = centerX + radius * Math.cos(startAngleRadius);
    const startY = centerY + radius * Math.sin(startAngleRadius);

    const endX = centerX + radius * Math.cos(endAngleRadius);
    const endY = centerY + radius * Math.sin(endAngleRadius);

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    const d = `
    M ${centerX} ${centerY}
    L ${startX} ${startY}
    A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
    Z
  `;

    return <Path d={d} fill={props.color} />;
  };

  const sumData = props.dataSet.reduce(
    (prevData, currentData) => prevData + currentData.price,
    0
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        gap: responsive(20),
        alignItems: "center",
      }}
    >
      <Svg
        width={responsive(props.size + 1)}
        height={responsive(props.size + 1)}
      >
        {props.dataSet.map((data, index, array) => {
          const d = array.map((data) => (data.price / sumData) * 360);

          return (
            <Pie
              key={index}
              color={props.colorSet[index]}
              data={data.price}
              angle={{
                start: d.slice(0, index).reduce((prev, curr) => prev + curr, 0),
                end:
                  d.slice(0, index).reduce((prev, curr) => prev + curr, 0) +
                  d[index],
              }}
            />
          );
        })}
      </Svg>

      <View style={{ gap: responsive(2) }}>
        <View style={{ flexDirection: "row" }}>
          <Summary
            fontSize={responsive(12)}
            text={"벽제갈비"}
            isBold
            gap={responsive(7)}
          />
          <HorizontalLine />
          <Text>150,000원</Text>
        </View>
        <Summary
          fontSize={responsive(12)}
          text={"벽제갈비"}
          isBold
          gap={responsive(7)}
        />
        <Summary
          fontSize={responsive(12)}
          text={"벽제갈비"}
          isBold
          gap={responsive(7)}
        />
        <Summary
          fontSize={responsive(12)}
          text={"벽제갈비"}
          isBold
          gap={responsive(7)}
        />
        <Summary
          fontSize={responsive(12)}
          text={"벽제갈비"}
          isBold
          gap={responsive(7)}
        />
      </View>
    </View>
  );
}

export default ChartPie;
