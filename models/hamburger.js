const { Schema, model } = require("mongoose");

const hamburgerSchema = Schema(
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

const Hamburger = model("hamburgers", hamburgerSchema);

module.exports = {
  Hamburger,
};
