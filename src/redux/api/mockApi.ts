import data from '../../db/aiData.json'
import { Data } from './../../interface/dataInterface';

const getMockData = (): Promise<Data> => {
  // Simulating API delay with setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); // Simulating 1 second delay
  });
};
let response = await getMockData()
console.log(response)

export default getMockData;