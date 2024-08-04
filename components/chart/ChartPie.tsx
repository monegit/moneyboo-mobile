import React from "react";
import { Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";

import responsive from "@/tools/ratio";

import Summary from "../summary/Summary";
import SolidLIne from "../line/SolidLIne";

interface Props {
  size: number;
  dataSet: { price: number; name: string }[];
  colorSet: string[];
  type: "spent" | "income";
  // legendFontSize: number;
}

function ChartPie(props: Props) {
  const Pie = (props: {
    color: string;
    data: number;
    angle: {
      start: number;
      end: number;
    };
    size: number;
  }) => {
    const startAngle = props.angle.start;
    const endAngle = props.angle.end;

    const radius = props.size / 2;
    const centerX = props.size / 2;
    const centerY = props.size / 2;

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
      <Svg width={props.size + 1} height={props.size + 1}>
        {props.dataSet.map((data, index, array) => {
          const d = array.map((data) => (data.price / sumData) * 360);

          return (
            <Pie
              key={index}
              size={props.size}
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

      <View
        style={{
          gap: responsive(2),
          width: responsive(221),
        }}
      >
        {props.dataSet.map((item, index) => (
          <View
            style={{
              flexDirection: "row",
              gap: responsive(7),
            }}
          >
            <Summary
              type={props.type}
              summaryDepth={index}
              fontSize={responsive(12)}
              text={item.name}
              isBold
              gap={responsive(7)}
            />
            <View style={{ flex: 1, flexDirection: "row" }}>
              <SolidLIne color="#E0E0E0" />
            </View>
            <Text
              style={{
                fontSize: responsive(12),
                color: "#444444",
                fontWeight: "bold",
              }}
            >
              {item.price}원
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default ChartPie;
