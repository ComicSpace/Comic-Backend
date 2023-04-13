const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    category: {
      type: String,
      default: "Adult",
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

categorySchema.virtual("posts", {
  ref: "Book",
  localField: "_id",
  foreignField: "category",
});

categorySchema.set("toJSON", {
  versionKey: false,

  transform(doc, ret) {
    delete ret.__v;
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;