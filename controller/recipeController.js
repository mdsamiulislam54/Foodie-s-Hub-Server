import { RecipeBlogModel } from "../Schema/blogData.js";
import RecipesModel from "../Schema/Recipes.js";


export const addRecipe = async (req, res) => {
  const recipe = req.body;
  const result = await RecipesModel.insertOne(recipe);
  res.send(result);
};

export const getTopRecipes = async (req, res) => {
  const recipes = await RecipesModel.find().sort({ likeCount: -1 }).limit(6);
  res.send(recipes);
};

export const getAllRecipes = async (req, res) => {
    const {page,limit,cuisineType} = req.query;
    const pageNumber = parseInt(page) || 0;
    const limitNumber = parseInt(limit) || 6;
 const query = cuisineType ? { cuisineType: cuisineType } : {};
    const skip = pageNumber * limitNumber

  const recipes = await RecipesModel.find(query).sort({ likeCount: -1 }).skip(skip).limit(limitNumber);
  const count = await RecipesModel.countDocuments(query);
  res.send({ recipes, count });
};

export const getUserRecipes = async (req, res) => {
  const uid = req.params.uid;
  const recipe = await RecipesModel.find({ userId: uid });
  res.send(recipe);
};

export const getRecipeDetails = async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const recipe = await RecipesModel.findOne(query);
  res.send(recipe);
};

export const deleteRecipe = async (req, res) => {
  const id = req.params.id;
  const result = await RecipesModel.deleteOne({ _id: id });
  res.send(result);
};

export const updateRecipe = async (req, res) => {
  const id = req.params.id;
  const recipe = req.body;
  const query = { _id: id };
  const updateDoc = { $set: recipe };
  const result = await RecipesModel.updateOne(query, updateDoc);
  res.send(result);
};

export const patchRecipe = async (req, res) => {
  const id = req.params.id;
  const recipe = req.body;
  const query = { _id: id };
  const updateDoc = { $set: recipe };
  const result = await RecipesModel.updateOne(query, updateDoc);
  res.send(result);
};





export const postBlog = async (req, res) => {

  const result = await RecipeBlogModel.insertOne(blogData);
  res.send(result);
}

export const getBlog = async (req, res) => {
  const limit = parseInt(req.query.limit) || 0; // Default to 6 if not specified
  const blogs = await RecipeBlogModel.find().sort({ createdAt: -1 }).limit(limit);
  res.send(blogs);
};