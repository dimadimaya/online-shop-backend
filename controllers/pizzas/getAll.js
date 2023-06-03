const { Pizza } = require("../../models");

const getAll = async (req, res) => {
  const products = await Pizza.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      results: products,
    },
  });
};

module.exports = getAll;
