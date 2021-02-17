import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/users.js";

const app = express();
const CONNECTION_URL =  'mongodb+srv://admin:Reserveit5*@tables.i4uiv.mongodb.net/tables?retryWrites=true&w=majority'


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.get('/', (req,res)=>{
  res.send('hello i work');
});



const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);