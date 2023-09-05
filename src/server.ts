import express from 'express';
import * as bp from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { appRouter } from './router';
import * as db from './db';
import * as cors from 'cors';

const corsOptions = {
  origin: '*', // TODO: Change this to the frontend url
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

dotenv.config();

db.initializeClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(cors.default(corsOptions));
app.use(helmet());

appRouter(app);

app.listen(port, () => {
  console.log(`App started on http://localhost:${port}/api`);
});
