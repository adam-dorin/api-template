import { PrismaClient, Prisma } from '@prisma/client';
// import * as fs from 'fs';
// import * as bcrypt from 'bcrypt';
import path from "path";

const pn = (p: any) => path.normalize(p);

export async function seedProd(client: PrismaClient, start: Date) {
}

