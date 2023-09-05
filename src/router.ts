import { Express, Request, Response } from 'express';
import { baseUrl } from './utils';
import * as authService from './services/auth.service';
// import { authenticateJWT, checkRole, roles } from './jwt';

export const appRouter = (app: Express) => {
  const routerGroups = [
    baseRoutes,
    authRoutes,
  ];

  routerGroups.forEach((group) => {
    group(app);
  });
};

const baseRoutes = (app: Express) => {
  const resp = (req: Request, res: Response) => {
    res.json({ name: 'Api Template' });
  };

  app.get('/', resp);
  app.get('/api', resp);
};

// Login
const authRoutes = (app: Express) => {
  app.post(baseUrl('auth/login'), authService.login);
  // app.post(baseUrl('auth/token'), userController.create)
};
