const multer  = require('multer')
const path = require("path");

const storage = multer.diskStorage({
  destination: "public/files/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname)
  }
})

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const supportedFile = /pdf/;
    const extension = path.extname(file.originalname);

    if(supportedFile.test(extension)){
      cb(null, true);
    } else{
      cb(new Error("Must be a pdf file"));
    }

  },
  limits: {
    fileSize: 5000000,
  }
})

module.exports = upload;