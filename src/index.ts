import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import { createServer } from './server';

const port = process.env.PORT || 4545;

(async () => {
  const server = await createServer();

  server.listen(port, () => console.log(`Jetti API is listening on port ${port}!`));
})();
