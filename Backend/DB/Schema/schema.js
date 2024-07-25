const { mongoose } = require("mongoose");
const nodemailer = require("nodemailer");

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
    enum: ["user", "admin", "moderator"], // Allowed values for the role field
    default: "admin", // Optional: Default value if none provided
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

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  tag: {
    type: String,
  },
  email: {
    type: String,
  },
});

// for create post middleware we need to perform emailSend login before create modal
fileSchema.post("save", async function (doc) {
  try {
    console.log(doc);

    // create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_MASTER_PASSWORD,
      },
    });

    // Send Email
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "fanfeettutorial@gmail.com",
      subject: "Regarding entry point creation in mongo db",
      html: `<p>file upload successfull</p>`,
    });
    console.log(info);
  } catch (error) {
    console.error(error);
  }
});

module.exports = { userSchema, categorySchema, fileSchema };
