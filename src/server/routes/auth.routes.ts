import {Router} from 'express';
import { loginUser, registerUser } from '../controllers/auth.contoller';
import { requireAuth } from '../middleware/auth.middleware';
import { getVerbs } from '../controllers/verbs.controller';
import passport from 'passport'
import {generateToken} from '../auth/jwt'

const router = Router();

router.post('/login', loginUser);
router.post('/register', registerUser);

router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}))

router.get('/google/callback', passport.authenticate('google', {
    session: false
}), (req,res) => {

    // passport adds user to req obj
    const user = req.user as {id: string, email: string}
    
    if (!user) return res.status(401).json({error: 'Authentication failed'})

    const token = generateToken(user)

    res.redirect(`${process.env.FRONTEND_URL}/oauth-success?token=${token}`)
})

export {router as authRoutes};