import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface BarChartProps {
  data: { [category: string]: number };
}

const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {
  // No need to convert the data, since it's already in the desired format
  return (
    <BarChart width={500} height={300} data={Object.entries(data)}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="[0]" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="[1]" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
