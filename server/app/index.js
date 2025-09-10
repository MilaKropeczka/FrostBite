import { app } from './app.js';
import { port } from './config.js';

app.listen(port, () => {
	console.log(`Serwer działa na localhost:3000`);
});
