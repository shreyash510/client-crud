const express = require("express");
const {
    getApi,
  createClient,
  // getBlogById,
  // updateBlog,
  // deleteBlog,
} = require("../controllers/clientController");

const router = express.Router();

router.route("/").get(getApi)
router.route("/create").post(createClient)
// .post(createBlog);
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);


// router.get("/", (req, res) => {
//   res.send("about")
// })

module.exports = router;
