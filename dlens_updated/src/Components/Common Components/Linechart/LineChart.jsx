import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Line,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from "recharts";
import React from "react";
import { Card } from "antd";

const CommonLineChart = ({ data, dataKey, height = "250px" }) => {
  return (
    <Card>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          margin={{
            top: 50,
            right: 20,
            left: 0,
            bottom: 0,
          }}
          data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#fe6932" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default CommonLineChart;
