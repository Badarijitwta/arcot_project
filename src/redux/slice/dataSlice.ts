import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Data } from "../../interface/dataInterface";
import getMockData from "../api/mockApi";


export interface DataState {
  loading: boolean,
  data: Data | null;
}
const initialState: DataState = {
  loading: false,
  data: null
}
export const fetchAiData = createAsyncThunk(
  'api/data',
  async (): Promise<Data> => {
    const response = await getMockData()
    return response
  }
)


const dataSlice = createSlice({
  name: 'aiData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAiData.pending, (state: DataState) => {
        state.loading = true
      })
      .addCase(fetchAiData.fulfilled, (state: DataState, action: PayloadAction<Data>) => {
        state.loading = false
        state.data = action.payload
        // console.log(state.data.data)
      })
      .addCase(fetchAiData.rejected, (state: DataState) => {

        state.loading = false
      })
  }
})

export default dataSlice.reducer