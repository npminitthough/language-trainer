import "./auth/passport";
import express from 'express';
import {routes} from './routes/index';
import passport from 'passport';

export const app = express();


// Middleware: Reads the raw request body, Parses JSON, Attaches it to req.body, Calls next()
app.use(express.json());

app.use(passport.initialize());

app.use('/api', routes);