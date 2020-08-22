const {
    badRequestError,
    unAuthorizedError,
    createdResponse,
    unverifiedEmailError,
    okResponse,
    notFoundError,
    to
} = require("../../global_functions");
const UserAuth = require("../../models/userModel");
const bcrypt = require('bcrypt')

//Register a user
const Register =async (req,res)=>{
  let { email ,username,password } = req.body;
   [error,email_verify]= await to(UserAuth.query().skipUndefined().where("email", email).first());
     if (email_verify !== undefined) return badRequestError(res, "Email is Already Registered");
     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(password, salt);

   [error, user_inserted] = await to(UserAuth.query().skipUndefined().insert({username:username,password:hash,email:email}).returning("*"));
   if (error) return badRequestError(res, error.message);
   delete user_inserted.password;
   return okResponse(res, user_inserted, "Signup Sucessfully");
}

//Login a user
const Login = async(req,res)=>{
    let user_detail;
    [error, user_detail] = await to(UserAuth.query().skipUndefined().where("email", req.body.email).first());
    if (user_detail === undefined) return badRequestError(res, "Invalid email");
   console.log(req.body)
    let verify = await bcrypt.compareSync(req.body.password, user_detail.password);
    console.log(verify) 
    if (!verify) return badRequestError(res, "Incorrect Password");
}


module.exports={Register,Login}


