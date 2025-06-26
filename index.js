import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import RecipesModel from "./Schema/Recipes.js";
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
//all routes
app.post("/recipe", async (req, res) => {
  const recipe = req.body;
  const result = await RecipesModel.insertOne(recipe);
  res.send(result);
});

app.get("/recipe", async (req, res) => {
  const recipes = await RecipesModel.find().sort({ likeCount: -1 }).limit(6);
  res.send(recipes);
});
app.get("/all-recipe", async (req, res) => {
  const recipes = await RecipesModel.find().sort({ likeCount: -1 });
  res.send(recipes);
});
app.get("/recipe/:uid", async (req, res) => {
  const uid = req.params.uid;
  const recipe = await RecipesModel.find({ userId: uid });
  res.send(recipe);
});

app.get("/details/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const recipe = await RecipesModel.findOne(query);
  res.send(recipe);

});

app.delete('/recipe/:id', async (req, res) => {
  const id = req.params.id;
  const result = await RecipesModel.deleteOne({ _id: id });
  res.send(result)
})

app.put('/recipe/:id', async (req, res) => {
  const id = req.params.id;
  const recipe = req.body;
  const query = { _id: id };
  const updateDoc = {
    $set: recipe
  };
  const result = await RecipesModel.updateOne(query, updateDoc);
  console.log(result);
  res.send(result)
})

app.patch('/details/:id', async (req, res) => {
  const id = req.params.id;
  const recipe = req.body;
  const query = { _id: id };
  const updateDoc = {
    $set: recipe
  };
  const result = await RecipesModel.updateOne(query, updateDoc);
  console.log(result);
  res.send(result)
})




app.listen(5000, () => {
  console.log("server running is 5000 port");
});
