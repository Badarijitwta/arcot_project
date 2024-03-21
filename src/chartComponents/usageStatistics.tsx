import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
} from "recharts";

interface UsageStatisticsProps {
  byPlatform: any;
  byCountry: any;
}

const PlatformBarChart: React.FC<UsageStatisticsProps> = ({ byPlatform }) => {
  const data = Object.keys(byPlatform).map((platform) => ({
    platform,
    count: byPlatform[platform],
  }));

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="platform" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

const CountryPieChart: React.FC<UsageStatisticsProps> = ({ byCountry }) => {
  const data = Object.keys(byCountry).map((country) => ({
    name: country,
    value: byCountry[country],
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export { PlatformBarChart, CountryPieChart };
