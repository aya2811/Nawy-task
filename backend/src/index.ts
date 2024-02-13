import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import apartmentRoute from "./routes/apartment.routes";
import connectDB from "./connections/db";

const app = express();



app.use(cors({origin: '*'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));


app.use(apartmentRoute);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


dotenv.config();
connectDB();
app.use(bodyParser.json());