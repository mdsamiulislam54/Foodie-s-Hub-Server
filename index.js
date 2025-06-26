import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import RecipesModel from "./Schema/Recipes.js";
import router from "./router/recipeRouter.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });
 app.use('/', router)


app.listen(5000, () => {
  console.log("server running is 5000 port");
});
