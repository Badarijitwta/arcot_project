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
import "./style.css";
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
    <div className="platform-bar-chart">
      <h3>Usage Statistics By Platform</h3>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="platform" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

const CountryPieChart: React.FC<UsageStatisticsProps> = ({ byCountry }) => {
  const data = Object.keys(byCountry).map((country) => ({
    name: country,
    value: byCountry[country],
  }));

  return (
    <div className="country-pie-chart">
      <h3>Usage Statistics by Country</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={50}
          fill="#8884d8"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export { PlatformBarChart, CountryPieChart };
