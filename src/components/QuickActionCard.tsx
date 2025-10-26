import { motion } from 'framer-motion'
import type { QuickAction } from '@/types'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface QuickActionCardProps {
  action: QuickAction
  onClick: (actionId: string) => void
}

export default function QuickActionCard({ action, onClick }: QuickActionCardProps) {
  const Icon = action.icon

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Card
        className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300"
        onClick={() => onClick(action.id)}
      >
        <div className="flex items-start gap-4">
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-md",
            action.color
          )}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
            <p className="text-sm text-muted-foreground">{action.description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

