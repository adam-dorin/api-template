import { Request, Response } from 'express';
import * as userRepository from '../repositories/user.repository';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
    try {
      const loginData: { email: string; password: string } = req.body;
      const user = await userRepository.getByEmail(loginData.email);
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const matchPassword = await bcrypt.compare(loginData.password, user?.password as string);
  
      if (!matchPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const tokenData = {
        userId: user?.id,
        email: user?.email,
        name: user?.name,
        // role: user?.is_admin ? 'admin' : 'user',
      };
      const accessToken = jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET as string, {
        expiresIn: '24h',
        algorithm: 'HS256',
      });
  
      return res.status(200).json({
        accessToken,
      });
    } catch (error) {
      return res.status(500).json({
        message: (error as any).message,
      });
    }
  };