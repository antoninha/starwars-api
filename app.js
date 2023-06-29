import express from "express";
import mongoose from 'mongoose';
import router from"./routes/index.js";
import cors from 'cors'

const app = express();
app.use(cors())

app.use(express.json());
mongoose
    .connect("mongodb+srv://antonin:antonin@cluster0.dytmxlj.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('mongoDB connected.'))
    .catch((err) => console.log(err, "connection failed"));

app.use("/", router);
app.listen(3000, () => {
    console.log("Server has started!")
})

export default app;
