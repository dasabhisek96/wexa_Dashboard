API Endpoints
Authentication
POST /api/auth/register: Register a new user
POST /api/auth/login: Login a user
Profile Management
GET /api/profile: Get user profile (Requires authentication)
PUT /api/profile/update: Update user profile (Requires authentication)
Friend Management
POST /api/friends/add: Add a friend (Requires authentication)
POST /api/friends/remove: Remove a friend (Requires authentication)
GET /api/friends: Get the list of friends (Requires authentication)

The server will run on http://localhost:5000

Backend Server Start node server.js
Frontend npm start
