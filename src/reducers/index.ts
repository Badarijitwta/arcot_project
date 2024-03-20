// reducers/index.ts

import { combineReducers } from 'redux';
import { Action } from '../types/ReduxTypes';
import { ActionTypes } from '../types/ActionTypes';
import { ApiResponse } from '../types/ApiTypes';

const initialState: ApiResponse = {
  insight_summary: {
    total_queries: 0,
    successful_queries: 0,
    failed_queries: 0,
    average_response_time: 0
  },
  category_distribution: {},
  response_times: {
    day_wise: [],
    week_wise: []
  },
  user_satisfaction: {
    ratings: []
  },
  usage_statistics: {
    by_platform: {},
    by_country: {}
  }
};

const categoryDataReducer = (state = initialState.category_distribution, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_SUCCESS:
      return action.payload.category_distribution;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  categoryData: categoryDataReducer
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
