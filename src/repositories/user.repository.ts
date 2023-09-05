import { Prisma, Users } from '@prisma/client';
import { prisma } from '../db';

type UserNoPass = { id: string; email: string; name: string;};

export const getList = async (): Promise<UserNoPass[]> => {
  return await prisma.users.findMany({
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
};

export const getUserNames = async (): Promise<{ name: string }[]> => {
  return await prisma.users.findMany({
    select: {
      name: true,
    },
  });
};

export const getByEmail = async (email: string): Promise<Users | null> => {
  return await prisma.users.findFirst({
    where: {
      email: email,
    },
  });
};

export const create = async (data: Prisma.UsersCreateInput): Promise<UserNoPass> => {
  return await prisma.users.create({
    data: data,
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
};

export const update = async (id: string, data: Prisma.UsersUpdateInput): Promise<UserNoPass> => {
  return await prisma.users.update({
    where: {
      id: id,
    },
    data: data,
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
};

export const deleteById = async (id: string): Promise<UserNoPass> => {
  return await prisma.users.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
};
