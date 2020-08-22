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

module.exports={Register}


