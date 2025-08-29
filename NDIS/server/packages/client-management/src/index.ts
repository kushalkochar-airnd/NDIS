import express from 'express';
import clientRouter from './controllers/client.controller';

const app = express();
app.use(express.json());

app.use('/api/clients', clientRouter);

app.get('/', (_req, res) => {
  res.send('Client Management API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
