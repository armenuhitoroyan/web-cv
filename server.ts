import express from "express";
import { WebSocketServer } from "ws";
import cors from "cors";

const app = express();
const PORT = 5173;

// Enable CORS
app.use(cors());

// Create HTTP server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// WebSocket server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.send(JSON.stringify({ message: "Connected to WebSocket server" }));

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
