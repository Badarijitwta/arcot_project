import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAiData } from "../../redux/slice/dataSlice";
import BarChartComponent from "./../../chartComponents/categoryDist";
import ResponseTime from "../../chartComponents/responseTimes";
import UserSatisfactionPieChart from "./../../chartComponents/userSatisfaction";
import {
  CountryPieChart,
  PlatformBarChart,
} from "../../chartComponents/usageStatistics";

export function ChartWrapper() {
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
          <BarChartComponent data={data.category_distribution} />
          <ResponseTime
            day_wise={data.response_times.day_wise}
            week_wise={data.response_times.week_wise}
          />
          <PlatformBarChart
            byCountry={data.usage_statistics.by_country}
            byPlatform={data.usage_statistics.by_platform}
          />
          <CountryPieChart
            byCountry={data.usage_statistics.by_country}
            byPlatform={data.usage_statistics.by_platform}
          />

          <UserSatisfactionPieChart ratings={data.user_satisfaction.ratings} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
