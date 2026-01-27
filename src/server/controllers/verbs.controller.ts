import {Request, Response} from 'express';
import prisma from '../db/prisma';

export const getVerbs = async (req: Request, res: Response) => {
  try {
    const verbs = await prisma.verb.findMany({
        take: 5
    });
    res.json(verbs);
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch verbs'});
  }
}