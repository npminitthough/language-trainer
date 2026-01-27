import jwt from 'jsonwebtoken';
import { AuthUser } from './auth.types';

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

// create a cytographic token with payload and secret
export function generateToken(payload: AuthUser) {
    return jwt.sign({
        sub: payload.id,
        email: payload.email
    }, JWT_SECRET, {expiresIn: '1h'});
}

// verify the token and return the payload
export function verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET) as {
        userId: string
        iat: number // issued at
        exp: number
    }
}
