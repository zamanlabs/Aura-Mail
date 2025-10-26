import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle2, Loader2 } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { connectEmailAsync } from '@/store/emailSlice'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const EMAIL_PROVIDERS = [
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Connect your Google account',
    icon: '📧',
    color: 'bg-red-500',
  },
  {
    id: 'outlook',
    name: 'Outlook',
    description: 'Connect your Microsoft account',
    icon: '📬',
    color: 'bg-blue-500',
  },
]

export default function ConnectEmail() {
  const dispatch = useAppDispatch()
  const { connected, provider, email, loading } = useAppSelector((state) => state.email)
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null)

  const handleConnect = (providerId: string) => {
    setSelectedProvider(providerId)
    dispatch(connectEmailAsync(providerId))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Connect Your Email
        </h1>
        <p className="text-muted-foreground mb-8">
          Connect your email account to enable AuraMail AI features
        </p>
      </motion.div>

      {/* Connection Status */}
      {connected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                <CardTitle className="text-green-800 dark:text-green-200">
                  Connected to {provider}
                </CardTitle>
              </div>
              <CardDescription className="text-green-700 dark:text-green-300">
                {email}
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      )}

      {/* Email Providers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EMAIL_PROVIDERS.map((emailProvider, index) => (
          <motion.div
            key={emailProvider.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={cn(
              "hover:shadow-lg transition-all duration-300",
              connected && provider === emailProvider.name && "ring-2 ring-primary"
            )}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center text-4xl",
                    emailProvider.color
                  )}>
                    {emailProvider.icon}
                  </div>
                  <div>
                    <CardTitle>{emailProvider.name}</CardTitle>
                    <CardDescription>{emailProvider.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => handleConnect(emailProvider.name)}
                  disabled={loading && selectedProvider === emailProvider.id}
                  className="w-full"
                  variant={connected && provider === emailProvider.name ? "outline" : "default"}
                >
                  {loading && selectedProvider === emailProvider.id ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Connecting...
                    </>
                  ) : connected && provider === emailProvider.name ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Connected
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Connect {emailProvider.name}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>How it works</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">1.</span>
                <span>Click "Connect" on your preferred email provider</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">2.</span>
                <span>You'll be redirected to authenticate with your email provider</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">3.</span>
                <span>Grant AuraMail AI permission to access your emails</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">4.</span>
                <span>Start using AI-powered email features!</span>
              </li>
            </ol>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

