import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { fetchEmailStatusAsync } from '@/store/emailSlice'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import Dashboard from '@/pages/Dashboard'
import AIAssistant from '@/pages/AIAssistant'
import ConnectEmail from '@/pages/ConnectEmail'
import Settings from '@/pages/Settings'
import Help from '@/pages/Help'

function AppContent() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.mode)

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.toggle('dark', theme === 'dark')
    
    // Fetch email status on mount
    dispatch(fetchEmailStatusAsync())
  }, [dispatch, theme])

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-background">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/connect-email" element={<ConnectEmail />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App

