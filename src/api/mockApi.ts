// api/mockApi.ts

import { ApiResponse } from '../types/ApiTypes';
import aiData from '../apiData.json';

export const fetchAiData = (): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    // Simulate async request
    setTimeout(() => {
      try {
        // Parse JSON data from ai-data.json file
        const data: ApiResponse = JSON.parse(JSON.stringify(aiData));
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 1000); // Simulate 1 second delay
  });
};
