import { 
  Mail, 
  Inbox, 
  Reply, 
  FileText, 
  Edit3, 
  Clock,
  LayoutDashboard,
  Bot,
  Link2,
  Settings,
  HelpCircle
} from 'lucide-react'
import type { QuickAction, MenuItem } from '@/types'

// Quick Actions Configuration
export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'send-email',
    title: 'Send Email',
    description: 'Compose and send a new email',
    icon: Mail,
    color: 'bg-blue-500',
  },
  {
    id: 'read-emails',
    title: 'Read Emails',
    description: 'View your latest messages',
    icon: Inbox,
    color: 'bg-green-500',
  },
  {
    id: 'auto-reply',
    title: 'Auto-Reply',
    description: 'Set up automatic responses',
    icon: Reply,
    color: 'bg-purple-500',
  },
  {
    id: 'summarize-inbox',
    title: 'Summarize Inbox',
    description: 'Get a quick overview of your emails',
    icon: FileText,
    color: 'bg-orange-500',
  },
  {
    id: 'draft-email',
    title: 'Draft Email',
    description: 'Create and save email drafts',
    icon: Edit3,
    color: 'bg-pink-500',
  },
  {
    id: 'schedule-email',
    title: 'Schedule Email',
    description: 'Schedule emails for later',
    icon: Clock,
    color: 'bg-indigo-500',
  },
]

// Menu Items Configuration
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
  },
  {
    id: 'ai-assistant',
    label: 'AI Assistant',
    path: '/ai-assistant',
    icon: Bot,
  },
  {
    id: 'connect-email',
    label: 'Connect Email',
    path: '/connect-email',
    icon: Link2,
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: Settings,
  },
  {
    id: 'help',
    label: 'Help',
    path: '/help',
    icon: HelpCircle,
  },
]

// API Endpoints (Placeholder)
export const API_ENDPOINTS = {
  MESSAGES: '/api/messages',
  SEND_MESSAGE: '/api/messages/send',
  EMAIL_STATUS: '/api/email/status',
  CONNECT_EMAIL: '/api/email/connect',
}

// Color Scheme
export const COLORS = {
  PRIMARY: '#2563EB',
  PRIMARY_LIGHT: '#3B82F6',
  PRIMARY_DARK: '#1D4ED8',
}

