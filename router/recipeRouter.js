import express from "express";
import {
  addRecipe,
  getTopRecipes,
  getAllRecipes,
  getUserRecipes,
  deleteRecipe,
  updateRecipe,
  patchRecipe,
  postBlog,
  getBlog,
  getBlogDetails,
} from "../controller/recipeController.js";

const router = express.Router();

router.post("/recipe", addRecipe);
router.post("/blog-recipe", postBlog);
router.get("/recipe", getTopRecipes);
router.get("/all-recipe", getAllRecipes);
router.get("/recipe/:uid", getUserRecipes);

router.get("/blog-recipe", getBlog);
router.get("/recipe-details/:id", getBlogDetails);

router.delete("/recipe/:id", deleteRecipe);
router.put("/recipe/:id", updateRecipe);
router.patch("/details/:id", patchRecipe);

export default router;
