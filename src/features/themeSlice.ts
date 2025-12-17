import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Theme = "ocean" | "sunset";

interface ThemeState {
  current: Theme;
}

const initialState: ThemeState = {
  current: "ocean",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.current = action.payload;
      // Update data-theme attribute on body
      if (action.payload === "sunset") {
        document.body.setAttribute("data-theme", "sunset");
      } else {
        document.body.removeAttribute("data-theme");
      }
    },
    toggleTheme: (state) => {
      const newTheme = state.current === "ocean" ? "sunset" : "ocean";
      state.current = newTheme;
      if (newTheme === "sunset") {
        document.body.setAttribute("data-theme", "sunset");
      } else {
        document.body.removeAttribute("data-theme");
      }
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
