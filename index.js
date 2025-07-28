import express from 'express';
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});