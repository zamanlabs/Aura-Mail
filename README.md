# AuraMail AI - Smart Email Assistant

A modern, AI-powered email assistant dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- 🤖 **AI-Powered Assistant**: Chat with an intelligent AI to manage your emails
- 📧 **Email Integration**: Connect Gmail and Outlook accounts
- 🎨 **Modern UI**: Clean, responsive design with dark mode support
- ⚡ **Quick Actions**: Fast access to common email tasks
- 🔔 **Notifications**: Stay updated with email activity
- 📊 **Dashboard**: Overview of email statistics and recent activity

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **UI Components**: shadcn/ui (custom components)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Aura-Mail
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Navbar.tsx      # Top navigation bar
│   ├── ThemeToggle.tsx # Dark mode toggle
│   ├── ChatMessage.tsx # Chat message component
│   ├── ChatInput.tsx   # Chat input field
│   └── QuickActionCard.tsx # Action cards
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── AIAssistant.tsx # AI chat interface
│   ├── ConnectEmail.tsx # Email connection
│   ├── Settings.tsx    # User settings
│   └── Help.tsx        # Help and FAQ
├── store/              # Redux store and slices
│   ├── store.ts        # Store configuration
│   ├── themeSlice.ts   # Theme state
│   ├── emailSlice.ts   # Email state
│   └── chatSlice.ts    # Chat state
├── utils/              # Utility functions
│   ├── api.ts          # API client and mock data
│   └── constants.ts    # App constants
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
├── lib/                # Library utilities
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Features Implementation

### Current Features (v1.0)

- ✅ Dashboard with quick actions
- ✅ AI chat interface with message history
- ✅ Email provider connection (Gmail, Outlook - mock)
- ✅ Settings page with theme toggle
- ✅ Help page with FAQ
- ✅ Responsive design for mobile, tablet, desktop
- ✅ Dark mode support
- ✅ Notification system

### Mock Data

The application currently uses mock data for demonstration purposes. To connect to a real backend:

1. Update the API endpoints in `src/utils/constants.ts`
2. Replace mock functions in `src/utils/api.ts` with real API calls
3. Set the `VITE_API_URL` environment variable

### Future Enhancements

- Real Gmail/Outlook OAuth integration
- WebSocket support for real-time updates
- Multi-account email management
- Email analytics and insights
- Advanced AI features (auto-categorization, smart replies)
- Team collaboration features

## Customization

### Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#2563EB', // Change this to your brand color
    // ... other shades
  }
}
```

### Fonts

The app uses Inter font by default. To change it:

1. Update the Google Fonts link in `index.html`
2. Update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@auramail.ai or visit our [Help page](./src/pages/Help.tsx).

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

