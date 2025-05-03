import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { registerSocketHandlers } from './socket/index.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);
    registerSocketHandlers(socket, io);
});

const PORT = 3000;
httpServer.listen(PORT, () => {
    console.log(`Socket server running on http://localhost:${PORT}`);
});
