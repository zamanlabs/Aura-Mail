import { motion } from 'framer-motion'
import { HelpCircle, Book, MessageCircle, Mail } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const FAQ_ITEMS = [
  {
    question: 'How do I connect my email account?',
    answer: 'Go to the "Connect Email" page and click on your preferred email provider (Gmail or Outlook). You\'ll be redirected to authenticate and grant permissions.',
  },
  {
    question: 'Is my email data secure?',
    answer: 'Yes! We use industry-standard encryption and never store your emails on our servers. All processing is done securely and your data is protected.',
  },
  {
    question: 'What can the AI assistant do?',
    answer: 'The AI assistant can help you read emails, compose replies, summarize your inbox, draft new emails, and schedule emails to be sent later.',
  },
  {
    question: 'How do I schedule an email?',
    answer: 'Simply ask the AI assistant to schedule an email. Provide the details and the time you want it sent, and the AI will take care of the rest.',
  },
  {
    question: 'Can I use AuraMail AI with multiple email accounts?',
    answer: 'Currently, you can connect one email account at a time. Multi-account support is coming in a future update!',
  },
]

export default function Help() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Help & Support</h1>
        <p className="text-muted-foreground">
          Find answers to common questions and get help
        </p>
      </motion.div>

      {/* Quick Help Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Book className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Documentation</CardTitle>
              <CardDescription>Read our comprehensive guides</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <MessageCircle className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with our support team</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Mail className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Send us your questions</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>

      {/* Getting Started Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Quick guide to get you up and running</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  1
                </span>
                <div>
                  <p className="font-medium text-foreground">Connect Your Email</p>
                  <p className="text-sm text-muted-foreground">
                    Link your Gmail or Outlook account to get started
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  2
                </span>
                <div>
                  <p className="font-medium text-foreground">Explore Quick Actions</p>
                  <p className="text-sm text-muted-foreground">
                    Try out the quick action cards on the dashboard
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  3
                </span>
                <div>
                  <p className="font-medium text-foreground">Chat with AI Assistant</p>
                  <p className="text-sm text-muted-foreground">
                    Ask the AI to help manage your emails
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                  4
                </span>
                <div>
                  <p className="font-medium text-foreground">Customize Settings</p>
                  <p className="text-sm text-muted-foreground">
                    Personalize your experience in the settings page
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Still need help?</CardTitle>
            <CardDescription>
              Our support team is here to assist you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Contact Support</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

