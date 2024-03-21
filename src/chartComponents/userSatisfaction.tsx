import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

interface UserSatisfactionProps {
  ratings: any;
}

const UserSatisfactionPieChart: React.FC<UserSatisfactionProps> = ({
  ratings,
}) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={ratings}
        dataKey="count"
        nameKey="rating"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label={({ rating }) => `${rating}`}
      >
        {ratings.map((entry: any, index: number) => (
          <Cell
            key={`cell-${index}`}
            fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default UserSatisfactionPieChart;
