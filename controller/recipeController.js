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
  const limit = parseInt(req.query.limit) || 6;
  const page = parseInt(req.query.page) || 0;
  const cuisineType = req.query.cuisineType || "";
  const searchTerm = req.query.searchTerm || "";
 
  const query = {};

  if (cuisineType) {
    query.cuisineType = cuisineType;
  }

  if (searchTerm) {
    query.title = { $regex: searchTerm, $options: "i" };
  }

  try {
    const blogs = await RecipeBlogModel.find(query)
      .sort({ createdAt: -1 })
      .skip(page * limit)
      .limit(limit);

    const count = await RecipeBlogModel.countDocuments(query);

    res.send({ blogs, count });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getBlogDetails = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const blog = await RecipeBlogModel.findOne({ _id: id });
    if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
    }
    res.send(blog);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};