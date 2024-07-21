const { categorySchema } = require("../Schema/schema");
const mongoose = require("mongoose")

const Category = mongoose.model('Category', categorySchema);
module.exports = {Category}