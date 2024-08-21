const mongoose =require("mongoose");

const desertSchema = new mongoose.Schema({
  desertName: {
    type: String,
    default: null,
  },
  calories: {
    type: Number,
  },
  fats: {
    type: Number,
  },
  carbs: {
    type: Number,
  },
  proteins: {
    type: Number,
  },
});

const desert= mongoose.model("desert", desertSchema);
module.exports=desert;