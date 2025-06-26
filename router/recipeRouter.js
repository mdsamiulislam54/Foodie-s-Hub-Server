import express from "express";
import {
  addRecipe,
  getTopRecipes,
  getAllRecipes,
  getUserRecipes,
  getRecipeDetails,
  deleteRecipe,
  updateRecipe,
  patchRecipe,
  postBlog,
  getBlog,
} from "../controller/recipeController.js";

const router = express.Router();

router.post("/recipe", addRecipe);
router.post('/blog-recipe', postBlog)
router.get("/recipe", getTopRecipes);
router.get("/all-recipe", getAllRecipes);
router.get("/recipe/:uid", getUserRecipes);
router.get("/details/:id", getRecipeDetails);
router.get("/blog-recipe", getBlog);

router.delete("/recipe/:id", deleteRecipe);
router.put("/recipe/:id", updateRecipe);
router.patch("/details/:id", patchRecipe);

export default router;
