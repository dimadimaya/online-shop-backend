const { Hamburger } = require("../../models");

const getAll = async (req, res) => {
  const products = await Hamburger.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      results: products,
    },
  });
};

module.exports = getAll;
