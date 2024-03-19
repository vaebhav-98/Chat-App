import express from 'express';
import { createServer } from 'node:http';
import { chats } from './data/data.js';
import { connectDB } from './config/db.js';
import pkg from 'colors';
import { router } from './routes/userRoutes.js';
const { yellow } = pkg;
import dotenv from 'dotenv'
// import { userRoutes } from './routes/userRoutes.js';
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const server = createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
})

app.use('/api/user', router)

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`, yellow.bold);
});