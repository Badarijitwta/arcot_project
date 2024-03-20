// actions/index.ts

import { ActionTypes } from '../types/ActionTypes';
import { Dispatch } from 'redux';
import { ApiResponse } from '../types/ApiTypes';
import { fetchAiData } from '../api/mockApi';
import { Action } from '../types/ReduxTypes';

export const fetchDataSuccess = (data: ApiResponse) => {
  return {
    type: ActionTypes.FETCH_DATA_SUCCESS,
    payload: data
  };
};

export const fetchData = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const data = await fetchAiData();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      // Handle error
      console.log('Error fetching Data')
    }
  };
};
