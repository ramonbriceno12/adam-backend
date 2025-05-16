import express from 'express';
import dotenv from 'dotenv';
import { db } from './config/db';
// import { redis } from './config/redis';
import authRoutes from './routes/auth/auth.routes';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => { res.send('POS Backend is running')});


app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
  db.connect(); // Connect PostgreSQL
//   redis.connect(); // Connect Redis
});
