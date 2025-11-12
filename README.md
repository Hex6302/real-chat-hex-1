# Realtime Chat App

A fullstack realtime chat application built with React, Node.js, Express, MongoDB, and Socket.IO. This project features authentication, user profiles, image uploads, and live messaging.

## Features
- User authentication (signup, login, JWT-based)
- Realtime messaging with Socket.IO
- Profile picture upload (Cloudinary)
- Responsive UI with React and Tailwind CSS
- User presence and chat status

## Project Structure
```
fullstack-chat-app/
  backend/      # Express.js API, MongoDB, Socket.IO
  frontend/     # React app (Vite, Tailwind CSS)
```

## Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB database (local or cloud)
- Cloudinary account (for image uploads)

## Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd fullstack-chat-app
```

### 2. Setup Backend
```bash
cd backend
npm install
```

#### Create a `.env` file in `backend/` with the following variables:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Start the backend server:
```bash
npm run dev
```
The backend will run on [http://localhost:5000](http://localhost:5000)

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

#### (Optional) Create a `.env` file in `frontend/` for custom API URL:
```env
VITE_API_URL=http://localhost:5000/api
```
By default, the frontend connects to `http://localhost:5001/api` in development. Adjust as needed in `src/lib/axios.js`.

#### Start the frontend dev server:
```bash
npm run dev
```
The frontend will run on [http://localhost:5173](http://localhost:5173)

## Deployment
- The project includes `render.yaml` files for deploying both backend and frontend to [Render.com](https://render.com/).
- Set all required environment variables in your Render dashboard.

## License

This project is licensed under the [MIT License](./LICENSE).

---

**Made with ❤️ by Dinesh and contributors.** 
