const express = require('express');
const router = express.Router();
const {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
  } = require("../controller/post");


router.get("/get-all-posts", getAllPosts);
router.get("/:id", getPost);
router.post("/:id/photo", createPost);
router.post("/update/:id/photo", updatePost);
router.delete("/:id", deletePost);

module.exports = router;