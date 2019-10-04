const { Router } = require("express");
const router = Router();

const path = require("path");
const multer = require("multer");
const uuid = require("uuid/v4");

const fs = require("fs");

router.get("/img/upload", (req, res) => {
  res.render("index");
});

// const storage = multer.diskStorage({
//   destination: path.join(__dirname, "../../public/img/fruits"),
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   }
// });

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img"),
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname));
  }
});

const uploadImage = multer({
  storage,
  limits: { fileSize: 1000000 }
}).single("image");

router.post("/img/upload", (req, res) => {
  uploadImage(req, res, err => {
    if (err) {
      err.message = "The file is so heavy for my service";
      return res.send(err);
    }
    console.log(req.file);
    res.send("uploaded");
  });
});

router.get("/images", (req, res) => {});

module.exports = router;
