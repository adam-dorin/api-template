import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { UserToken } from './utils';

export enum roles {
  ADMIN = 'admin', // add future roles here if necessary
}

export const authenticateJWT = (req: Request, res: Response, next: () => void) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    if (!process.env.JWT_TOKEN_SECRET) {
      return res.status(500).json({ message: 'configuration error' });
    }
    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Error 403' });
      }

      (req as unknown as any)[`user` as string] = user as UserToken;
      next();
    });
  } else {
    res.status(401).json({ message: 'Error 401' });
  }
};

export const checkRole = (role: string) => {
  return (req: Request, res: Response, next: () => void) => {
    const user = (req as any).user;
    if (!user) {
      return res.status(401).json({ message: 'Auth required' });
    }
    if (user.role !== role) {
      return res.status(403).json({ message: 'Missing role required' });
    }
    next();
  };
};
