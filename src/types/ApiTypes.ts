// ApiTypes.ts

export interface ApiResponse {
  insight_summary: InsightSummary;
  category_distribution: CategoryDistribution;
  response_times: ResponseTimes;
  user_satisfaction: UserSatisfaction;
  usage_statistics: UsageStatistics;
}

interface InsightSummary {
  total_queries: number;
  successful_queries: number;
  failed_queries: number;
  average_response_time: number;
}

interface CategoryDistribution {
  [key: string]: number;
}

interface ResponseTimes {
  day_wise: ResponseTimeData[];
  week_wise: ResponseTimeData[];
}

interface ResponseTimeData {
  date: string;
  average_time: number;
}

interface UserSatisfaction {
  ratings: Rating[];
}

interface Rating {
  rating: number;
  count: number;
}

interface UsageStatistics {
  by_platform: Record<string, number>;
  by_country: Record<string, number>;
}
