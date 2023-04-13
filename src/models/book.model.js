const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1000,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      trim: true,
    },
    coverImageUrl: {
      type: String,
      trim: true,
      required: true,
    },
    publishingDate: {
      type: Date,
      trim: true,
    },
    filename: {
      type: String,
      trim: true,
      required: true,
    },
    filepath: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: ObjectId,
      required: true,
      ref: "Category",
    },
    deleted: {
      type: Boolean,
      default: false,
      select: false
    }
  },
  { timestamps: true }
);

bookSchema.set("toJSON", {
  versionKey: false,

  transform(doc, ret) {
    delete ret.__v;
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;