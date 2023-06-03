const { Order } = require("../../models");

const add = async (req, res, next) => {
  const result = await Order.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
