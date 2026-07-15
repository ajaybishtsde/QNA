import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/authSlice";
import ThemeReducer from "./slices/themeSlice";
export const store = configureStore({
  reducer: { AuthReducer, ThemeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
