# StadiumGPT

An AI-powered platform that enhances the stadium experience for fans, organizers, volunteers, and venue staff.

## Tech Stack

- React
- Tailwind CSS
- Node.js
- AI APIs

## Features

- AI Chatbot
- Live Stadium Navigation
- Event Information
- Ticket Support
- Smart Assistance

## Goal

Build an intelligent frontend application that improves stadium operations and visitor experiences.

## Getting Started

This project is a Vite + React (JavaScript) application styled with Tailwind CSS.

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

### Production build

```bash
npm run build
npm run preview
```

### Project structure

```
src/
├── assets/                 # Static files (images, icons, fonts)
├── components/
│   ├── layout/             # App shell: Sidebar, Header, AppLayout
│   └── common/             # Reusable UI: Card, Badge, StatCard, Icon
├── pages/                  # Route components (Home, Dashboard, ...)
├── layouts/                # Public site shell (MainLayout, SiteHeader, SiteFooter)
├── services/               # API and external service clients (coming later)
├── data/                   # Static/mock data and navigation manifest
├── hooks/                  # Custom React hooks
├── App.jsx                 # Route table (URLs -> pages)
├── main.jsx                # Application entry point
└── index.css               # Tailwind CSS and global styles
```

### Application routes

| Route | Page | Layout |
| --- | --- | --- |
| `/` | Public landing page | `MainLayout` |
| `/dashboard` | StadiumGPT dashboard | `AppLayout` |
| `/assistant` | AI Assistant (mock chat) | `AppLayout` |
| `/stadium-map` | Stadium map (schematic) | `AppLayout` |
| `/events` | Events listing | `AppLayout` |
| `/tickets` | Ticket wallet | `AppLayout` |
| `/help` | Help & support | `AppLayout` |
| anything else | 404 page | `MainLayout` |

Routes are defined once in `src/App.jsx`. Sidebar links and header titles
are generated from `src/data/navigation.js`.

## Future Roadmap

- AI Voice Assistant
- Crowd Analytics
- Smart Parking
- Emergency Assistance