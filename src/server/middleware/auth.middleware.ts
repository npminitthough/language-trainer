import {Request, Response, NextFunction} from 'express';
import {verifyToken} from '../auth/jwt';
import prisma from '../db/prisma';

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({error: 'No token provided'});
    }

    const token = authHeader.replace('Bearer ', ''); // Bearer <token>
    try {
        const payload = verifyToken(token)
        // get user from verified token and check if user exists
        const user = await prisma.user.findUnique({
            where: {id: payload.userId}
        })

        if (!user) {
            // block request if user not found
            return res.status(401).json({error: 'User not found'});
        }

        req.user = user; // Attach user to request object
        next();
    } catch {
        return res.status(401).json({error: 'Invalid token'})
    }
}