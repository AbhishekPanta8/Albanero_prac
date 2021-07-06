let authenticate=(req,res,next)=>{
  // console.log(req.headers['authorization']);
  next();
}
module.exports = authenticate;