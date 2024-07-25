const { File } = require("../DB/Modals/file");

const cloudinary = require("cloudinary").v2;

const localFileUpload = async (req, res) => {
  try {
    const { file } = req.files; // const file = req.files.file
    console.log("Our file -> ", file);
    const path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log(path);
    if (file) {
      file.mv(path, (err) => {
        if (err == undefined) {
          console.log("Everthing is ok");
        } else {
          console.error(err);
        }
      });
      res.json({
        success: true,
        messgage: "file upload successfully",
      });
    } else {
      res.json({
        success: false,
        status: 400,
        messgage: "Please select file",
      });
    }
  } catch (error) {
    res.send(error);
  }
};

function isFileSupport(supportedTypes, type) {
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };

  if (quality) {
    options.quality = quality;
  }

  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

const imageUpload = async (req, res) => {
  // we directly export like this exports.imageUpload we not need this ,  module.exports = { imageUpload };  both are same
  try {
    // Data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const { file } = req.files;
    console.log(file);

    // Validation HW set photo size will less than 2mb
    const supportedTypes = ["jpg", "jpeg", "png"];
    const type = file.name.split(".")[1].toLowerCase();

    if (!isFileSupport(supportedTypes, type)) {
      res.status(400).json({
        success: false,
        messgage: "File type not supported",
      });
    }

    // data upload to cloudinary
    const response = await uploadFileToCloudinary(file, "fullstack-eccomerce");
    console.log(response);

    // Create entry in mongo db
    await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.status(200).json({
      status: 200,
      success: true,
      imageUrl: response.secure_url,
      message: "Image upload successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const videoUpload = async (req, res) => {
  try {
    // Data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.videoFile; // Here key isn't same with videoFile we cann't  wrie like this, const videoFile = req.files
    console.log(file);

    // Validation HW set video size will less than 5mb
    const supportedTypes = ["mp4", "mkv", "mov"];
    const type = file.name.split(".")[1].toLowerCase();

    if (!isFileSupport(supportedTypes, type)) {
      res.status(400).json({
        success: false,
        messgage: "File type not supported",
      });
    }

    // data upload to cloudinary
    const response = await uploadFileToCloudinary(file, "fullstack-eccomerce");
    console.log(response);

    // Create entry in mongo db
    await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.status(200).json({
      status: 200,
      success: true,
      videoUrl: response.secure_url,
      message: "video upload successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const imageSizeReducer = async (req, res) => {
  // we directly export like this exports.imageUpload we not need this ,  module.exports = { imageUpload };  both are same
  try {
    // Data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const { file } = req.files;
    console.log(file);

    // Validation HW set photo size will less than 2mb
    const supportedTypes = ["jpg", "jpeg", "png"];
    const type = file.name.split(".")[1].toLowerCase();

    if (!isFileSupport(supportedTypes, type)) {
      res.status(400).json({
        success: false,
        messgage: "File type not supported",
      });
    }

    // data upload to cloudinary
    const response = await uploadFileToCloudinary(
      file,
      "fullstack-eccomerce",
      30
    );
    console.log(response);

    // Create entry in mongo db
    await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.status(200).json({
      status: 200,
      success: true,
      imageUrl: response.secure_url,
      message: "Image upload successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

module.exports = {
  localFileUpload,
  imageUpload,
  videoUpload,
  imageSizeReducer,
};
