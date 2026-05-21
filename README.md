# MediQueue - Tutor Booking Web Application

🔗 **Live Site:** https://mediqueue-client-two.vercel.app

MediQueue is a modern tutor booking web application where students can explore tutors, book live learning sessions, and manage their scheduled classes efficiently. The platform simplifies tutor scheduling by preventing slot conflicts, managing availability automatically, and providing a smooth learning experience for both students and tutors.

---

## 🚀 Features

- 🔐 Secure authentication system with Email/Password and Google Login
- 👨‍🏫 Tutors can add, update, and delete tutoring sessions
- 📚 Students can browse tutors and book sessions based on availability
- ❌ Session cancellation system with automatic slot management
- 🔍 Search tutors by name and filter tutors by date
- 🌙 Dark and Light theme support
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🎠 Interactive carousel and modern UI components
- 🔔 Toast notifications for all CRUD operations
- ⚡ Dynamic page titles, loading spinner, and custom 404 page

---

# 🛠️ Tech Stack

## Frontend
- Next.js 16
- React 19
- Tailwind CSS 4
- HeroUI
- Embla Carousel
- Lucide React
- React Toastify
- Next Themes

## Backend
- Node.js
- Express.js
- MongoDB

## Authentication
- Better Auth
- Google Authentication
- JWT Authentication

---

# 📦 NPM Packages

```json
{
  "@better-auth/mongo-adapter": "^1.6.11",
  "@gravity-ui/icons": "^2.18.0",
  "@heroui/react": "^3.0.5",
  "@heroui/styles": "^3.0.5",
  "better-auth": "^1.6.11",
  "embla-carousel-react": "^8.6.0",
  "lucide-react": "^1.16.0",
  "mongodb": "^7.2.0",
  "next": "16.2.6",
  "next-themes": "^0.4.6",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "react-toastify": "^11.1.0"
}
```

---

# 📂 Main Pages

- Home Page
- Tutors Page
- Tutor Details Page
- Add Tutor Page
- My Tutors Page
- My Booked Sessions Page
- Login/Register Pages
- Custom 404 Page

---

# 🔑 Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_SERVER_URL=your_server_url
NEXT_PUBLIC_BASE_URL=your_client_url
```

---

# ⚙️ Installation & Setup

Clone the project:

```bash
git clone https://github.com/anaitullah31/mediqueue-client.git
```

Go to project directory:

```bash
cd mediqueue-client
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# 📌 Future Improvements

- Payment Gateway Integration
- Email Notifications
- Real-time Session Tracking
- Tutor Reviews & Ratings
- Admin Dashboard

---

# 👨‍💻 Developer

Developed by **Anait Ullah**