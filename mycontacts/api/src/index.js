import 'dotenv/config';

import express from 'express';

import routes from './routes.js';

const app = express();
app.use(routes);

// eslint-disable-next-line no-console
app.listen(process.env.EXPRESS_PORT, () => console.log(`🤖 Server started at http://localhost:${process.env.EXPRESS_PORT}`));
