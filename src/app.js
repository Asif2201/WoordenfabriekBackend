import logger from 'morgan';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'https://woordenfabriekv2-lemw7vp5xq-ez.a.run.app',
  methods: ('GET, POST'),
  allowedHeaders: ('Content-Type, Authorization'),
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use('/v1', indexRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.stack });
});

export default app;
