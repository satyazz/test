// Import lib ...
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoute = require('./route/user');
const authRoute = require('./route/auth');


// app configration ...
app = express();
app.use(express.json());
dotenv.config();
// db connection ...
mongoose.connect(process.env.Mongo_Url)
.then(()=>{
    console.log('DB connect sucessfully')

})
.catch((err)=>{
    console.log(err);

})
// middleWare ....
// end points ..
app.use('/api/auth/',authRoute);
app.use('/api/v1/',UserRoute);

// app listen ...

app.listen(process.env.Port, ()=>{
    console.log('server is runnig ...')
})