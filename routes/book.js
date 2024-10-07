const express = require("express");
const multer = require("multer");
const bookcontroller = require("../controllers/bookcontroller");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
const upload = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 10 * 1024 * 1024 },
});
router.get("/", (req, res) => {
  res.render("addbook");
});
router.post("/add/book", upload.single("bookImage"), (req, res) => {
  bookcontroller.addbook(req, res);
});
router.get("/booklist", (req, res) => {
  bookcontroller.getlist(req, res);
});
router.get("/book/page/for/edit/:id", (req, res) => {
  bookcontroller.getParticulareditBook(req, res);
});
router.post("/edit/book/:id", upload.single("bookImage"), (req, res) => {
  bookcontroller.editBook(req, res);
});
router.get("/book/delete/:id", (req, res) => {
  bookcontroller.deleteBook(req, res);
});
module.exports = router;
