import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { fetchMessagesAsync, sendMessageAsync } from '@/store/chatSlice'
import { QUICK_ACTIONS } from '@/utils/constants'
import ChatMessage from '@/components/ChatMessage'
import ChatInput from '@/components/ChatInput'
import QuickActionCard from '@/components/QuickActionCard'
import { Loader2 } from 'lucide-react'

export default function AIAssistant() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { messages, loading, sending } = useAppSelector((state) => state.chat)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fetch initial messages
    if (messages.length === 0) {
      dispatch(fetchMessagesAsync())
    }
  }, [dispatch, messages.length])

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = (message: string) => {
    dispatch(sendMessageAsync(message))
  }

  const handleQuickAction = (actionId: string) => {
    const action = QUICK_ACTIONS.find(a => a.id === actionId)
    if (action) {
      handleSendMessage(`I want to ${action.title.toLowerCase()}`)
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Quick Actions Header */}
      <div className="p-6 border-b border-border bg-card">
        <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {QUICK_ACTIONS.slice(0, 3).map((action, index) => (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <QuickActionCard action={action} onClick={handleQuickAction} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 bg-background">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : messages.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground">Start a conversation with AuraMail AI</p>
            </div>
          ) : (
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          )}
          {sending && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">AI is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <ChatInput onSend={handleSendMessage} disabled={sending} />
    </div>
  )
}

