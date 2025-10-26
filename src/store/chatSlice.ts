import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { fetchMessages, sendMessage } from '@/utils/api'
import type { Message } from '@/types'

// Async thunk to fetch initial messages
export const fetchMessagesAsync = createAsyncThunk(
  'chat/fetchMessages',
  async () => {
    const response = await fetchMessages()
    return response
  }
)

// Async thunk to send a message
export const sendMessageAsync = createAsyncThunk(
  'chat/sendMessage',
  async (messageContent: string) => {
    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      content: messageContent,
      timestamp: new Date().toISOString(),
    }
    
    const aiResponse = await sendMessage(messageContent)
    
    return { userMessage, aiResponse }
  }
)

interface ChatState {
  messages: Message[]
  loading: boolean
  sending: boolean
  error: string | null
}

const initialState: ChatState = {
  messages: [],
  loading: false,
  sending: false,
  error: null,
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload)
    },
    clearMessages: (state) => {
      state.messages = []
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch messages
      .addCase(fetchMessagesAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchMessagesAsync.fulfilled, (state, action) => {
        state.loading = false
        state.messages = action.payload
      })
      .addCase(fetchMessagesAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch messages'
      })
      // Send message
      .addCase(sendMessageAsync.pending, (state) => {
        state.sending = true
        state.error = null
      })
      .addCase(sendMessageAsync.fulfilled, (state, action) => {
        state.sending = false
        state.messages.push(action.payload.userMessage)
        state.messages.push(action.payload.aiResponse)
      })
      .addCase(sendMessageAsync.rejected, (state, action) => {
        state.sending = false
        state.error = action.error.message || 'Failed to send message'
      })
  },
})

export const { addMessage, clearMessages } = chatSlice.actions
export default chatSlice.reducer

