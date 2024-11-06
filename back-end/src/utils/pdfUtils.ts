import fs from 'fs';
import path from 'path';

export const readPdfAsBase64 = (): string => {
    try {
        const resolvedPath = path.resolve(__dirname, '../../assets/documento.pdf');
        
        const file = fs.readFileSync(resolvedPath);
        
        return file.toString('base64');
    } catch (error) {
        console.error('Error reading PDF file:', error);
        throw error;
    }
};
