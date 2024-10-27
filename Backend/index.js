import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import magazineRoute from './route/magazine.route.js';
import userRoute from './route/user.route.js';
const app = express()
// const port = 3000

app.use(cors());
app.use(express.json());


dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

// connect to mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongoDB");
    
} catch (error) {
    console.log("Error", error);
}

// defining routes
app.use("/magazine", magazineRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})