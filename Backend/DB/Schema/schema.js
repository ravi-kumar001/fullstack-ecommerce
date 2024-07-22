const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // This will trim whitespace from the 'name' field
    required: true,
  },
  email: {
    type: String,
    trim: true, // This will trim whitespace from the 'name' field
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'], // Allowed values for the role field
    default: 'admin' // Optional: Default value if none provided
  },

});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  images: {
    type: String,
  },

  color: {
    type: String,
  },
});

module.exports = { userSchema, categorySchema };
