import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';  // Importa o pacote CORS
import { chatbotController } from './controllers/chatbotController.ts';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],        
    allowedHeaders: ['Content-Type'], 
};

app.use(cors(corsOptions));

app.use(express.json());

app.post('/send-message', chatbotController);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
