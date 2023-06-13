import fs, { mkdir } from "fs";
import path from "path";
import multer from "multer";
const storage = multer.diskStorage({
  function(req, res, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/files")) {
      fs.mkdirSync("public/files");
    }
    cb(null, "public/files");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});
export default upload;