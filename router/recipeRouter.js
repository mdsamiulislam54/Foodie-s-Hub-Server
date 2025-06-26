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
} from "../controller/recipeController.js";

const router = express.Router();

router.post("/recipe", addRecipe);
router.get("/recipe", getTopRecipes);
router.get("/all-recipe", getAllRecipes);
router.get("/recipe/:uid", getUserRecipes);
router.get("/details/:id", getRecipeDetails);
router.delete("/recipe/:id", deleteRecipe);
router.put("/recipe/:id", updateRecipe);
router.patch("/details/:id", patchRecipe);

export default router;
