const { Schema, model } = require("mongoose");

const soupSchema = Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

const Soup = model("soups", soupSchema);

module.exports = {
  Soup,
};
