import React from "react";
import "./category-dist.css";
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
    <div className="bar-chart-comp">
      <h3>Category Distribution</h3>

      <BarChart width={500} height={300} data={Object.entries(data)}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="[0]" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="[1]" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
