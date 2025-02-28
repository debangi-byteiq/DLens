import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Sector,
  Customized,
} from "recharts";
import { Card } from "antd"; // Import Card from Ant Design

const CommonRadialChart = ({
  value,
  size = { width: "100%", height: 200 },
  title = "Radial Chart",
}) => {
  const data = [{ value }];

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
      props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <Card title={title}>
      <ResponsiveContainer width={size.width} height={size.height}>
        <RadialBarChart
          innerRadius="80%"
          outerRadius="140%"
          startAngle={200}
          endAngle={-20}
          barSize={50}
          data={data}>
          <PolarAngleAxis
            type="number"
            domain={[0, 10]}
            angleAxisId={0}
            // tick={false}
            tickCount={3}
          />
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="value"
            fill="url(#gradient)"
            activeShape={renderActiveShape}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FF00" />
              <stop offset="50%" stopColor="#FFFF00" />
              <stop offset="100%" stopColor="#FFA500" />
            </linearGradient>
          </defs>
          <Customized
            component={({ cx, cy }) => (
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fontSize={24}
                fill="#333"
                fontWeight="bold">
                30%
              </text>
            )}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default CommonRadialChart;
