import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema({
  categories: {
    type: [String],
  },
  title: {
    type: String,
  },

  cuisineType: {
    type: String,
  },
  ingredients: {
    type: [String],
  },
  instructions: {
    type: String,
  },
  image: {
    type: String,
  },
  likeCount: {
    type: Number,
  },

  preparationTime: {
    type: Number,
  },
  userId: {
    type: String,
    required: false,
  },
});

const RecipesModel = mongoose.model("Recipe", recipesSchema,);

export default RecipesModel;
