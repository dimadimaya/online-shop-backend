const { Schema, model } = require("mongoose");

const pizzaSchema = Schema(
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

const Pizza = model("pizzas", pizzaSchema);

module.exports = {
  Pizza,
};
