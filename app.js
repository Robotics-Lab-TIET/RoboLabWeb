import express from 'express';
import { config } from './src/config/config.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 3000;
app.listen(config.server.port, () => {
    console.log(`Server is running on http://localhost:${config.server.port}`);
});
