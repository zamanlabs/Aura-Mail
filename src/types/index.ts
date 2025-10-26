import { LucideIcon } from 'lucide-react'

export interface QuickAction {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color: string
}

export interface MenuItem {
  id: string
  label: string
  path: string
  icon: LucideIcon
}

export interface Message {
  id: number
  sender: 'user' | 'ai'
  content: string
  timestamp: string
}

export interface Notification {
  id: number
  type: 'info' | 'success' | 'warning' | 'error'
  message: string
  read: boolean
  timestamp: string
}

export interface EmailStatus {
  connected: boolean
  provider: string | null
  email: string | null
  lastSync: string | null
}

export interface User {
  name: string
  email: string
  avatar: string
}

