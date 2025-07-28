import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  theme: "light", // Default theme
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    },
  },
})

export const { setTheme, toggleTheme } = themeSlice.actions
export const selectTheme = (state) => state.theme.theme
export default themeSlice.reducer



