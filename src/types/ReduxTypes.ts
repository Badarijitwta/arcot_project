// ReduxTypes.ts

import { ActionTypes } from './ActionTypes';
import { ApiResponse } from './ApiTypes';

export interface FetchDataSuccessAction {
  type: ActionTypes.FETCH_DATA_SUCCESS;
  payload: ApiResponse;
}

export type Action = FetchDataSuccessAction;
