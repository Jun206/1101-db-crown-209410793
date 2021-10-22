const Category_93 = require("../models/Category_93");


exports.getCategories = async (req, res) => {
  try {
    return await Category_93.fetchAll();
  } catch (err) {
    console.log(err);
  }
};
