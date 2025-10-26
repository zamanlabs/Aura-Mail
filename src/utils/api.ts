import axios from 'axios'
import type { Message, EmailStatus, User } from '@/types'

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('authToken')
    }
    return Promise.reject(error)
  }
)

// Mock Data
const MOCK_MESSAGES: Message[] = [
  {
    id: 1,
    sender: 'ai',
    content: 'Hello! I\'m AuraMail AI, your smart email assistant. How can I help you manage your emails today?',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 2,
    sender: 'user',
    content: 'Can you summarize my inbox?',
    timestamp: new Date(Date.now() - 3540000).toISOString(),
  },
  {
    id: 3,
    sender: 'ai',
    content: 'Of course! You have 15 unread emails. Here\'s a quick summary:\n\n• 5 work-related emails requiring attention\n• 3 newsletters\n• 4 social notifications\n• 2 promotional emails\n• 1 important email from your manager about the quarterly review\n\nWould you like me to help you with any specific email?',
    timestamp: new Date(Date.now() - 3500000).toISOString(),
  },
  {
    id: 4,
    sender: 'user',
    content: 'Yes, what does my manager\'s email say?',
    timestamp: new Date(Date.now() - 3460000).toISOString(),
  },
  {
    id: 5,
    sender: 'ai',
    content: 'Your manager sent an email about scheduling the quarterly review meeting. Key points:\n\n• Meeting scheduled for next Tuesday at 2 PM\n• Please prepare a summary of your Q4 achievements\n• Review will be conducted via video call\n• Bring any questions or concerns about your role\n\nWould you like me to draft a confirmation reply?',
    timestamp: new Date(Date.now() - 3400000).toISOString(),
  },
]

const MOCK_USER: User = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
}

const MOCK_EMAIL_STATUS: EmailStatus = {
  connected: true,
  provider: 'Gmail',
  email: 'john.doe@gmail.com',
  lastSync: new Date().toISOString(),
}

// Mock API Functions

/**
 * Fetch chat messages
 * @returns Promise resolving to array of messages
 */
export const fetchMessages = async (): Promise<Message[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_MESSAGES)
    }, 500)
  })
}

/**
 * Send a message and get AI response
 * @param message - User message content
 * @returns Promise resolving to AI response message
 */
export const sendMessage = async (message: string): Promise<Message> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now(),
        sender: 'ai',
        content: `I received your message: "${message}". This is a simulated response. In production, this would be connected to the AI backend.`,
        timestamp: new Date().toISOString(),
      }
      resolve(aiResponse)
    }, 1000)
  })
}

/**
 * Fetch email connection status
 * @returns Promise resolving to email status object
 */
export const fetchEmailStatus = async (): Promise<EmailStatus> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_EMAIL_STATUS)
    }, 300)
  })
}

/**
 * Fetch user profile
 * @returns Promise resolving to user profile object
 */
export const fetchUserProfile = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_USER)
    }, 300)
  })
}

/**
 * Connect email provider
 * @param provider - Email provider name (Gmail, Outlook, etc.)
 * @returns Promise resolving to connection result
 */
export const connectEmailProvider = async (provider: string): Promise<{ success: boolean; provider: string; message: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        provider,
        message: `Successfully connected to ${provider}`,
      })
    }, 1500)
  })
}

export default apiClient

