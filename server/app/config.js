import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const config = {
	port: process.env.PORT,
	database: process.env.database,
	sessionKeySecret: process.env.SESSION_KEY_SECRET,
};

export const { port, database, sessionKeySecret } = config;
