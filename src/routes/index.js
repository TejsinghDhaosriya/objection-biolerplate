const express = require("express");
const router  = express.Router();

// import post controller.
const PostController = require("../controllers/index").PostController;

// API Routes for Post

router.post("/addpost",PostController.AddPost);
router.get("/getpost/:postName",PostController.GetPost);
router.get("/getposts",PostController.GetPosts);
router.put("/post/:id",PostController.UpdatePost);
router.delete("/post/:id",PostController.RemovePost);




// export router;
module.exports = router;