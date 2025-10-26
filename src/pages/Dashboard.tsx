import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { QUICK_ACTIONS } from '@/utils/constants'
import QuickActionCard from '@/components/QuickActionCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleQuickAction = (actionId: string) => {
    // Navigate to AI Assistant page for all actions
    navigate('/ai-assistant', { state: { actionId } })
  }

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, John! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's what you can do with AuraMail AI today
        </p>
      </motion.div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {QUICK_ACTIONS.map((action, index) => (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <QuickActionCard action={action} onClick={handleQuickAction} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
        <Card>
          <CardHeader>
            <CardTitle>Email Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Emails</span>
                <span className="text-2xl font-bold text-foreground">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Unread</span>
                <span className="text-2xl font-bold text-primary">15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Processed Today</span>
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">42</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Getting Started */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
          <CardHeader>
            <CardTitle>💡 Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Connect your Gmail account for full functionality</li>
              <li>✓ Try asking the AI to summarize your inbox</li>
              <li>✓ Set up auto-replies for common emails</li>
              <li>✓ Schedule emails to be sent later</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

