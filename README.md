# 📁 File Sharing App (Next.js)

A secure, modern file sharing platform built using **Next.js**. Users can upload files, generate shareable links, set expiration time or download limits, and securely share files with others. Includes user authentication and supports local or cloud storage.

---

## ✨ Features

- ⚡ Built with **Next.js** for blazing-fast performance
- 🔐 User **authentication** (sign up, log in, log out)
- 📤 File upload (any format, configurable max size)
- 🔗 Shareable, unique download links
- ⏳ Optional **file expiration** (by time or download limit)
- 🧹 Auto file cleanup after expiry
- 📦 Local or cloud storage 
- 📱 Responsive UI for all devices
- 🧠 Clean and minimal UI/UX with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology      | Purpose                         |
|----------------|----------------------------------|
| Next.js         | Frontend + Backend (API Routes) |
| Tailwind CSS    | Styling                         |
| MongoDB / Firebase | Database                     |
| JWT / NextAuth.js | Authentication               |
| Node.js FS | File storage                |

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js v16+
- npm or yarn
- Firebase credentials

---

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/aj5101/File-sharing-website
cd file-sharing-nextjs

# Install dependencies
npm install
# or
yarn install

```

🧪 Environment Setup


# Base
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# JWT secret (for NextAuth or custom auth)
JWT_SECRET=your_jwt_secret

# Firebase setup
MONGODB_URI=your_mongodb_uri

# File Storage )
STORAGE_TYPE=local # or "s3"
LOCAL_UPLOAD_PATH=./uploads




▶️ Running the App
npm run dev



🧪 Testing
npm run test



#Deploy to Your Own Server
npm run build
npm start
