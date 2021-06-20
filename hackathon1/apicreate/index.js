const express = require('express');
//path module to deal with file path  
const path = require('path');
const router = require('./routes/api/member');
//initiallize variable app with express.
const app = express();


//init middleware
// app.use(logger);

//Body  parser middleware
//handle raw json
app.use(express.json());
//handle form submissions so that handle url encoded data.
app.use(express.urlencoded({extended: false}))

//Set static folder
app.use(express.static(path.join(__dirname,'public')));
//Members API route.
// /api/member is a route
app.use('/api/member',require('./routes/api/member'));

//look at the environment varibles for PORT
//PORT not avialable then go with default port 5000.
const PORT = process.env.PORT || 5000;



//listening on a port
app.listen(PORT,()=>{ console.log(`Server started on port no ${PORT}`)});