import { Request, Response } from 'express';
import { sendToGoogleGemini } from '../services/geminiService';
import { readPdfAsBase64 } from '../utils/pdfUtils';

export const chatbotController = async (req: Request, res: Response): Promise<void> => {
    const { message } = req.body as { message?: string };
    const pdfBase64 = readPdfAsBase64();

    if (!message) {
        res.status(400).json({ error: 'Message is required' });
        return;
    }

    try {
        const responseFromGemini = await sendToGoogleGemini(message, pdfBase64);

        res.json({ message: responseFromGemini });
    } catch (error) {
        console.error('Erro ao processar a solicitação:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
