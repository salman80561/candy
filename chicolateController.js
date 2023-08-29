const chocolates = [];

// GET all chocolates
const getAllChocolates = (req, res) => {
  res.json(chocolates);
};

// POST a new chocolate
const createChocolate = (req, res) => {
  const { name, description, quantity, price } = req.body;
  const newChocolate = { name, description, quantity, price };
  chocolates.push(newChocolate);
  res.status(201).json(newChocolate);
};

module.exports = {
  getAllChocolates,
  createChocolate,
};
