import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAiData } from "../../redux/slice/dataSlice";
import BarChartComponent from "../../chartComponents/CategoryDist/categoryDist";
import ResponseTime from "../../chartComponents/ResponseTime/index";
import UserSatisfactionPieChart from "../../chartComponents/userSatisfaction";
import {
  CountryPieChart,
  PlatformBarChart,
} from "../../chartComponents/usageStatistics";
import "./chart.css";

export default function ChartWrapper() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.aiData.data);
  const [dataPresent, setDataPresent] = useState<boolean>(false);

  useEffect(() => {
    if (!dataPresent) {
      dispatch(fetchAiData());
      setDataPresent(true);
    }
  }, [dispatch, dataPresent]);

  // console.log(data);

  return (
    <div>
      {data ? (
        <div className="chart-main">
          <div className="category-dist">
            <BarChartComponent data={data.category_distribution} />
          </div>
          <div className="response-time">
            <ResponseTime
              day_wise={data.response_times.day_wise}
              week_wise={data.response_times.week_wise}
            />
          </div>
          <PlatformBarChart
            byCountry={data.usage_statistics.by_country}
            byPlatform={data.usage_statistics.by_platform}
          />
          <CountryPieChart
            byCountry={data.usage_statistics.by_country}
            byPlatform={data.usage_statistics.by_platform}
          />

          <div className="user-satisfaction">
            <UserSatisfactionPieChart
              ratings={data.user_satisfaction.ratings}
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
