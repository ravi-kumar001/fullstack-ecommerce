const { Category } = require("../DB/modals/category");

const getCategory = async (req, res) => {
  const category = await Category.find({});
  if (category.length == 0) {
    res.send("Category Empty");
    return;
  }
  res.send(category);
};

const postCategory = async (req, res) => {
  const { name, images, color } = req.body;
  console.log(typeof images);
  if (name.length == 0 || images.length == 0 || color.length == 0) {
    res.json({
      message: "Some field is missing.Required field [name , images , color]",
      status: 400,
    });
    return;
  }
  const category = new Category({
    name,
    images,
    color,
  });
  category.save();
  res.json({ message: "Category added Successfully", status: 200 });
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  let deletedCategory = await Category.findByIdAndDelete(id);
  res.json({
    DeletedCategory: deleteCategory,
    status: 200,
    message: "Category deleted successfully",
  });
};
const updateCategory = (req, res) => {
  res.json({ status: 200, message: "Category updated successfully" });
};
module.exports = { getCategory, postCategory, deleteCategory, updateCategory };
