import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import router from './router/auth-route.js';
import schoolRouter from './router/school-route.js';
import errorMiddleware from './middlewares/error-middlewares.js';

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(errorMiddleware);

app.use('/images', express.static('images'));
app.use('/api/v0', router, schoolRouter);

const start = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CONNECT,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log('Connected to DB!')
      },
    )
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
