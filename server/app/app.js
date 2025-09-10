import express from 'express';
import './db/mongoose.js';
import { router as apiRouter } from './routes/api.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { sessionKeySecret } from './config.js';
import { requireAuth } from './middleware/auth.js';
import helmet from 'helmet';
import { rateLimiter } from './middleware/rateLimiter.js';

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use(rateLimiter);

app.use(
	session({
		secret: sessionKeySecret,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 2,
		},
		resave: false,
	})
);

app.use(cookieParser());

app.use('/profile', requireAuth);

app.use('/api', apiRouter);