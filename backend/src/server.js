import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Route from './routes'
import "dotenv-defaults/config.js";




const url = process.env.MONGO_URL
const dboptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.set("strictQuery", true);

mongoose.connect(url, dboptions).then((res) => {
    console.log("mongo db connection created");
})
const app = express();
app.use(cors());
app.use(express.json())
app.use('/api', Route);
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server is up on port ${port}.`))