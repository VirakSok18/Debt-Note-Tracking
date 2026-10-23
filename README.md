# IOU App

A modern debt-tracking application (IOU - I Owe You) built with the MERN stack (MongoDB, Express, React, Node.js), utilizing Clerk for authentication and Cloudinary for media storage.

## 🌟 Features
- **Secure Authentication**: Powered by Clerk for seamless user login and registration.
- **Media Management**: Cloudinary integration for handling profile pictures or receipt images.
- **Responsive UI**: Built with React, Tailwind CSS, and Radix UI primitives.
- **Analytics Dashboard**: Interactive charts using Recharts.
- **PDF/Image Exports**: Integrated with `jspdf`, `html2canvas`, and `html-to-image` for generating reports.

## 🖼️ UI Gallery
<div align="center">
  <img src="IOU%20images/Screenshot%202026-03-27%20142653.png" width="30%" alt="Screen 1" />
  <img src="IOU%20images/Screenshot%202026-03-27%20142723.png" width="30%" alt="Screen 2" />
  <img src="IOU%20images/Screenshot%202026-03-27%20142731.png" width="30%" alt="Screen 3" />
  <img src="IOU%20images/Screenshot%202026-03-27%20142736.png" width="30%" alt="Screen 4" />
  <img src="IOU%20images/Screenshot%202026-03-27%20142746.png" width="30%" alt="Screen 5" />
  <img src="IOU%20images/Screenshot%202026-03-27%20142804.png" width="30%" alt="Screen 6" />
  <img src="IOU%20images/Screenshot%202026-03-27%20142819.png" width="30%" alt="Screen 7" />
  <img src="IOU%20images/Screenshot%202026-03-27%20142842.png" width="30%" alt="Screen 8" />
  <img src="IOU%20images/Screenshot%202026-03-27%20142901.png" width="30%" alt="Screen 9" />
  <img src="IOU%20images/Screenshot%202026-03-27%20142908.png" width="30%" alt="Screen 10" />
  <img src="IOU%20images/Screenshot%202026-03-27%20143035.png" width="30%" alt="Screen 11" />
</div>

## 📂 Project Structure
```text
IOU/
├── backend/          # Express/Node.js backend
│   ├── src/          # Source code & logic
│   ├── .env          # Server environment variables
│   └── package.json  # Backend dependencies
├── frontend/         # React/Vite frontend
│   ├── src/          # React components & UI
│   ├── .env.local    # Client environment variables
│   └── package.json  # Frontend dependencies
├── IOU images/       # Directory containing screenshots
└── README.md         # Project documentation
```

## 🚀 Setup Guide

### 1. Prerequisites
- Node.js installed
- MongoDB instance (MongoDB Atlas recommended)
- Clerk Account (for authentication)
- Cloudinary Account (for image uploads)

### 2. Installation
Clone the repository and install dependencies for both frontend and backend:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Environment Variables
You need to set up API keys for both the backend and frontend.

#### Backend
In the `backend` folder, create a `.env` file using the provided `.env.example` as a template:
```env
PORT=5001
MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/<DB_NAME>
NODE_ENV=development
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Frontend
In the `frontend` folder, create a `.env.local` file with your Clerk Publishable Key:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 4. Running the Application
Start both the backend and frontend development servers.

```bash
# In the backend directory
npm run dev

# In a new terminal, within the frontend directory
npm run dev
```

Your app will be available on the port configured in `backend/.env` (default: 5001) for the API and usually `http://localhost:5173` for the Vite frontend.
