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
import "./responsetime.css";

interface LineChartProps {
  day_wise: { date: string; average_time: number }[];
  week_wise: { week: string; average_time: number }[];
}
const ResponseTime: React.FC<LineChartProps> = ({ day_wise, week_wise }) => {
  // No need to convert the data, since it's already in the desired format
  return (
    <div className="response-block">
      <h3>Response Time</h3>
      <LineChart width={500} height={300} data={day_wise}>
        <CartesianGrid strokeDasharray="6 6" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="average_time"
          stroke="#8884d8"
          name="Day Wise Average Time"
          fontSize={"0.8rem"}
        />
        <Line
          type="monotone"
          dataKey="average_time"
          stroke="#82ca9d"
          name="Week Wise Average Time"
        />
      </LineChart>
    </div>
  );
};

export default ResponseTime;
