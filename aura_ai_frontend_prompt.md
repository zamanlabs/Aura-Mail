**Project Title:** AuraMail AI – Smart Email Assistant Front-End

**Objective:**  
Build a **modern, scalable, and modular front-end architecture** for an AI-powered email assistant dashboard (similar to MailMind AI). The app should be **responsive, production-ready, and extensible** for future scaling by human developers.

---

### 🧩 **Tech Stack**
- **Framework:** React (with functional components and hooks)  
- **Styling:** Tailwind CSS (utility-first design)  
- **Routing:** React Router v6  
- **State Management:** Zustand or Redux Toolkit (for scalable state control)  
- **UI Components:** shadcn/ui or Radix UI (for accessible components)  
- **Icons:** Lucide React or Heroicons  
- **Animation:** Framer Motion (for subtle transitions and smooth UI animations)  
- **API Layer:** Axios (ready for Gmail API or backend integration later)

---

### 🖥️ **UI / UX Requirements**
Build a **professional SaaS-style dashboard layout** with clean design principles:

**Layout:**
- **Sidebar Navigation:**  
  - Logo (AuraMail AI)  
  - Menu items: Dashboard, AI Assistant, Connect Email, Settings, Help  
  - Collapsible sidebar for mobile

- **Top Navbar:**  
  - Gmail connection status (e.g., “🟢 Gmail Connected”)  
  - Notification icon (with count bubble)  
  - User profile avatar (dropdown for account settings)

- **Main Content Area:**  
  - Conversational AI interface (chat-like area)  
  - “Quick Actions” cards: Send Email, Read Emails, Auto-Reply, Summarize Inbox, Draft Email, Schedule Email  
  - Scrollable chat history with user/AI message bubbles  
  - Text input field with “Send” button at the bottom

- **Responsive Design:**  
  - Fully optimized for desktop, tablet, and mobile  
  - Collapsible sidebar and sticky chat input

---

### 🎨 **Design System**
- **Primary Colors:** Soft blue (#2563EB), white, and neutral gray palette  
- **Font:** Inter or Poppins (modern sans-serif)  
- **Card Design:** Rounded corners (rounded-2xl), drop shadows (shadow-md), hover effects  
- **Buttons:** Primary (blue), Secondary (gray), subtle motion hover  
- **Dark Mode Support:** Implement theme toggle (light/dark)

---

### ⚙️ **Component Structure**
Create the project in a modular, scalable structure:

```
src/
├── components/
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── QuickActionCard.jsx
│   ├── ChatMessage.jsx
│   ├── ChatInput.jsx
│   └── ThemeToggle.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── AIAssistant.jsx
│   ├── ConnectEmail.jsx
│   ├── Settings.jsx
│   └── Help.jsx
├── store/
│   └── appStore.js
├── utils/
│   └── api.js
├── App.jsx
├── index.jsx
└── tailwind.config.js
```

---

### 🤖 **AI Chat Interface Features**
- Left-aligned AI messages (white background)  
- Right-aligned user messages (blue background, white text)  
- Smooth scroll animation on new messages  
- Timestamp display under messages  
- Placeholder text: “Ask AuraMail AI anything about your emails…”  
- Press Enter to send, Shift+Enter for new line

---

### 🧱 **Scalability Notes for Developers**
- Use **context or Zustand store** to manage authentication state and connected email provider.  
- Maintain **reusable components** for all cards, inputs, and buttons.  
- Keep API calls and backend integration abstracted in `/utils/api.js`.  
- Make the design **theme-agnostic** so that new modules (like “Analytics” or “Team Inbox”) can be added easily later.

---

### 📈 **Stretch Goals (Optional for Later Iteration)**
- Multi-account email connection (Gmail, Outlook)  
- Inbox summarization preview cards  
- Real-time chat with AI (WebSocket-ready front-end)  
- Notification dropdown with read/unread states  
- User profile settings and theme preferences stored locally

---

### ✅ **Deliverables**
- Complete React + Tailwind codebase with clean, commented components  
- Fully responsive, modern UI aligned with SaaS dashboard standards  
- Dummy static data for initial load (no backend required yet)  
- Easy to connect to API layer later for real data

---

### 💡 **Tone / Style Reference**
- Visual inspiration: *Notion*, *Linear.app*, *ChatGPT dashboard*, *Vercel dashboard*  
- Design feel: *Calm, clean, professional, with minimalist modern elements*

---

**End of prompt.**

