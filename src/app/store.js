import { configureStore } from "@reduxjs/toolkit"
import dashboardReducer from "../features/dashboard/dashboardSlice" 
import themeReducer from "../features/theme/themeSlice"
import sidebarReducer from "../features/Sidebar/sidebarSlice"

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    theme: themeReducer,
    sidebar: sidebarReducer,
  },
})