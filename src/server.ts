import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3035, () => {
  console.log('🚀 Server on!')
});