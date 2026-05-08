import express from 'express';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api/v1', router);
