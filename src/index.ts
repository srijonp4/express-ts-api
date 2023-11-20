/* IMPORTS */
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

/* CONSTANTS */

const MONGO_URL =
  'mongodb+srv://testDB:uPQMSZrQUOr0Yw5o@cluster0.swdwtqy.mongodb.net/?retryWrites=true&w=majority';
const app = express();
const PORT = 8080;

/* MiddleWares */
app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression());
/* routes */

app.get('/', (req, res, next) => {
  res.json({ name: 'srijon' });
});
/* Port */
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => {
  console.log(error);
});
