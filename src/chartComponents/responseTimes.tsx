// Display a line chart for response_times to demonstrate trends over time on a daily
// and weekly basis.
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface LineChartProps {
  day_wise: { date: string; average_time: number }[];
  week_wise: { week: string; average_time: number }[];
}
const ResponseTime: React.FC<LineChartProps> = ({ day_wise, week_wise }) => {
  // No need to convert the data, since it's already in the desired format

  return (
    <LineChart width={500} height={300} data={day_wise}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="average_time"
        stroke="#8884d8"
        name="Day Wise Average Time"
      />
      <Line
        type="monotone"
        dataKey="average_time"
        stroke="#82ca9d"
        name="Week Wise Average Time"
      />
    </LineChart>
  );
};

export default ResponseTime;
