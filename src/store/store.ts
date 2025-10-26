import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import emailReducer from './emailSlice'
import chatReducer from './chatSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    email: emailReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['email/fetchStatus/fulfilled'],
      },
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

