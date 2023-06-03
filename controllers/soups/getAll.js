const { Soup } = require("../../models");

const getAll = async (req, res) => {
  const products = await Soup.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      results: products,
    },
  });
};

module.exports = getAll;
