import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import data from './data.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://admin-chinmay:dine0606@cluster0.k6h1q.mongodb.net/userDB",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});