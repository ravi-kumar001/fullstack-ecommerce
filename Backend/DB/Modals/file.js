const { mongoose } = require("mongoose");
const { fileSchema } = require("../Schema/schema");

const File = mongoose.model("File", fileSchema);
module.exports = { File };
