import type { RequestHandler } from 'express';

// API endpoint to get the encryption key
export const getKey: RequestHandler = (_, res) => {
  res.send({ key: process.env.LOCAL_STORAGE_KEY });
};

