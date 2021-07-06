const express =require('express');
const ErrorHandler = require('./errors/errorHandler');
const mainrouter = require('./routes/index');
const dotenv = require('dotenv');
dotenv.config();
//initiallize variable app with express.
const app = express();


app.use(express.json());
//handle form submissions so that handle url encoded data.
app.use(express.urlencoded({extended: false}))
// /api/member is a route
app.use('/api/member',mainrouter);

//look at the environment varibles for PORT
//PORT not avialable then go with default port 5000.
const PORT = process.env.PORT || 5000;

//error handleing
app.use((err,req,res,next)=>{
  if(err instanceof ErrorHandler){
    res.status(err.status).json({
      error: {
        message: err.message,
        status : err.status
      }
    });
  }
  else{
    res.status(500).json({
      error:{
        message: err.message,
        status: err.status
      }
    });
  }
})

//listening on a port
app.listen(PORT,()=>{ console.log(`Server started on port no ${PORT}`)});
module.exports = app;