import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import profileReducer from './features/profileSlice';
import dashboardReducer from './features/dashboardSlice';
import themeReducer from './features/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    dashboard: dashboardReducer,
    theme: themeReducer,
  },
});
