import { Hono } from 'hono';
import { hashGenerator } from './api/hash';

const app = new Hono();

app.post('/api/hash', hashGenerator);

export default app;
