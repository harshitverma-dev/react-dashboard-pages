import { createSlice } from "@reduxjs/toolkit"
import { DashboardData } from "../../data/dashboardData.js" // Import dummy data

const initialState = {
  data: DashboardData,
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
})

export const selectDashboardData = (state) => state.dashboard.data

export default dashboardSlice.reducer
