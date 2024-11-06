import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.error(err.stack);
  } else {
    console.error('Erro desconhecido', err);
  }

  res.status(500).json({ error: 'Erro interno no servidor.' });
};
