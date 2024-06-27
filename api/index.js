import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cartRoutes from './routes/cart.route.js';
import productRoutes from './routes/product.route.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

dotenv.config();

const mongoUri = process.env.MONGO;
if (!mongoUri) {
  throw new Error("MongoDB connection string is not defined in the environment variables");
}

mongoose.connect(mongoUri).then(() => {
    console.log('Connected to MondoDB');
  }).catch(err =>  {
    console.log(err);
  });


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve();

app.use('/images', express.static(path.join(__dirname, 'api/public/images')));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log('Server is running on port 4000*');
  }
);

app.use('/api/user', userRouter);

app.use('/api/auth', authRouter);

app.use('/api/cart', cartRoutes);

app.use('/api', productRoutes);


app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
});



