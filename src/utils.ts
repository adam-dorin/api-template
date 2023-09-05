import { Request } from 'express';

export interface UserToken {
  userId: string;
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}

export const baseUrl = (entity: string) => `/api/${entity}`;

export const getUserToken = (req: Request): UserToken => (req as any).user as UserToken;
