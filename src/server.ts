import cors from "cors";
import express from "express";
import { register } from "./api/generated";
import movies from "./services/movie";

const PORT = process.env.PORT ?? 8080;

const app = express();

//enable cors
app.use(cors());

register(app, {
  movies,
});

app.listen(PORT);
console.log(`🎉 Listening on port ${PORT}...`);
