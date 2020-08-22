
const {okResponse,badRequestError } = require("../../global_functions");
const Post = require("../../models/postModel");

// Add post Controller 
// req : HTTP Request Object
// res : HTTP Response Object
const AddPost = async (req,res)=>{
let data  = req.body;
    if(!data.fullName) return badRequestError(res,"Enter FullName");
    if(!data.dob) return badRequestError(res,"Enter Date of birth");

    let post_added = await Post.query().skipUndefined().insert(data).returning("*");
    if(!post_added) return badRequestError(res,"Post not added");

    return okResponse(res,post_added,"Post Added");
}


// Get post Controller 
// req : HTTP Request Object
// res : HTTP Response Object
const GetPost = async (req,res)=>{
    let data = req.params;
    console.log(data.fullName);
    if(!data.fullName) return badRequestError(res,"Enter Fullname");

    let post = await Post.query().skipUndefined().where("fullName",data.fullName).first();
    if(post === undefined ) return badRequestError(res,"No post found");

    return okResponse(res,post,"Post Details")
}

// Get posts Controller 
// req : HTTP Request Object
// res : HTTP Response Object
const GetPosts = async (req,res)=>{
    
    let posts = await Post.query().skipUndefined();
    
    return okResponse(res,posts,"Posts Details");
}

// Update post Controller 
// req : HTTP Request Object
// res : HTTP Response Object
const UpdatePost = async(req,res)=>{
    let data = req.params;

    let updated_post = await Post.query().skipUndefined().update(data).where("id",data.id);

    if(!updated_post) return badRequestError(res,"Post not updated");

    return okResponse(res,"Post Updated");
}

// Remove post Controller 
// req : HTTP Request Object
// res : HTTP Response Object
const RemovePost = async(req,res)=>{
    let data = req.params;

    let removed_post = await Post.query().skipUndefined().deleteById(data.id);

    if(!removed_post) return badRequestError("Post not removed");

    return okResponse(res,"Post Removed");
}



// Export Controllers
module.exports = {
    AddPost,
    GetPost,
    GetPosts,
    UpdatePost,
    RemovePost
}
