import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { fetchEmailStatus, connectEmailProvider } from '@/utils/api'
import type { Notification } from '@/types'

// Async thunk to fetch email status
export const fetchEmailStatusAsync = createAsyncThunk(
  'email/fetchStatus',
  async () => {
    const response = await fetchEmailStatus()
    return response
  }
)

// Async thunk to connect email provider
export const connectEmailAsync = createAsyncThunk(
  'email/connect',
  async (provider: string) => {
    const response = await connectEmailProvider(provider)
    return response
  }
)

interface EmailState {
  connected: boolean
  provider: string | null
  email: string | null
  lastSync: string | null
  notifications: Notification[]
  loading: boolean
  error: string | null
}

const initialState: EmailState = {
  connected: false,
  provider: null,
  email: null,
  lastSync: null,
  notifications: [
    {
      id: 1,
      type: 'info',
      message: 'Welcome to AuraMail AI!',
      read: false,
      timestamp: new Date().toISOString(),
    },
    {
      id: 2,
      type: 'success',
      message: 'Your account is ready',
      read: false,
      timestamp: new Date().toISOString(),
    },
  ],
  loading: false,
  error: null,
}

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    markNotificationAsRead: (state, action: PayloadAction<number>) => {
      const notification = state.notifications.find(n => n.id === action.payload)
      if (notification) {
        notification.read = true
      }
    },
    markAllNotificationsAsRead: (state) => {
      state.notifications.forEach(n => n.read = true)
    },
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id' | 'read' | 'timestamp'>>) => {
      state.notifications.unshift({
        id: Date.now(),
        ...action.payload,
        read: false,
        timestamp: new Date().toISOString(),
      })
    },
    clearNotifications: (state) => {
      state.notifications = []
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch email status
      .addCase(fetchEmailStatusAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEmailStatusAsync.fulfilled, (state, action) => {
        state.loading = false
        state.connected = action.payload.connected
        state.provider = action.payload.provider
        state.email = action.payload.email
        state.lastSync = action.payload.lastSync
      })
      .addCase(fetchEmailStatusAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch email status'
      })
      // Connect email
      .addCase(connectEmailAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(connectEmailAsync.fulfilled, (state, action) => {
        state.loading = false
        state.connected = true
        state.provider = action.payload.provider
        state.notifications.unshift({
          id: Date.now(),
          type: 'success',
          message: action.payload.message,
          read: false,
          timestamp: new Date().toISOString(),
        })
      })
      .addCase(connectEmailAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to connect email'
      })
  },
})

export const {
  markNotificationAsRead,
  markAllNotificationsAsRead,
  addNotification,
  clearNotifications,
} = emailSlice.actions

export default emailSlice.reducer

