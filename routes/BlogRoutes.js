const express = require("express");
const {
  getApi,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/").get(getApi)
// .post(createBlog);
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);


// router.get("/", (req, res) => {
//   res.send("about")
// })

module.exports = router;
