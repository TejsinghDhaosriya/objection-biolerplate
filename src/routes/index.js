const express = require("express");
const router  = express.Router();

// import post controller.
const PostController = require("../controllers/index").PostController;

// API Routes for Post

router.post("/post",PostController.AddPost);
router.get("/post/:fullName",PostController.GetPost);
router.get("/posts",PostController.GetPosts);
router.put("/post/:id",PostController.UpdatePost);
router.delete("/post/:id",PostController.RemovePost);




// export router;
module.exports = router;