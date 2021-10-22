const serviceCrown2Controller_93 = require("../services/serviceCrown2Controller_93");

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_93.getCategories();
    return res.json(data);
  } catch (e) {
    console.log(e);
  }
};
