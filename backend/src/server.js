import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Route from './routes'

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api', Route);

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server is up on port ${port}.`))