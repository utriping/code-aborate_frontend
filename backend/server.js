import app from './app.js';
import http from 'http';
import dotenv from 'dotenv';
import connectDb from './lib/connectDb.js';
dotenv.config();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
async function startServer() {
  try {
    await connectDb();
    initSocket(server); 
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
