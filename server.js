import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

// middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// router

app.use("/", (req, res, next) => {
  res.json({
    message: "How are you",
  });
});

// error handler

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`The server is running at http://localhost:${PORT}`);
});
