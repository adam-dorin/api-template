
import dotenv from 'dotenv';
import { seedLocal } from './env/local';
import { seedProd } from './env/prod';
import { PrismaClient } from "@prisma/client";

dotenv.config()

const env = process.env.APP_ENV;
const runSeed = process.env.SEED_DB === 'true';

if (runSeed) {
    console.log(`Running seed for the ${env} environment...`);
    const client = new PrismaClient();
    const start = new Date();
    if (env === 'local') {
        seedLocal(client, start);
    }

    if (env === 'prod') {
        seedProd(client, start);
    }
} else {
    console.log('Seed run is disabled');
}
