const serviceCrown2Controller_93 = require("../services/serviceCrown2Controller_93");

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_93.getCategories();
    console.log(JSON.stringify(results));
    res.render("crown2_93", {
      data: results,
      title: "crown2_93",
      name: "JunKai Huang",
      id: 209410793,
    });
  } catch (e) {
    console.log(e);
  }
};
