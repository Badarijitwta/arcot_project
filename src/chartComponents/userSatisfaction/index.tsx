import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import "./style.css";

interface UserSatisfactionProps {
  ratings: { rating: number; count: number }[];
}

const UserSatisfactionPieChart: React.FC<UserSatisfactionProps> = ({
  ratings,
}) => {
  return (
    <div className="user-satisfaction-pie">
      <h3>User Satisfaction</h3>
      <p>Using Ratings and Count</p>
      <PieChart width={400} height={400}>
        <Pie
          data={ratings}
          dataKey="count"
          nameKey="rating"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={20}
          fill="#8884d8"
        >
          {ratings.map((item, index) => (
            <Cell
              key={`cell-${"rating"}${item}`}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default UserSatisfactionPieChart;
