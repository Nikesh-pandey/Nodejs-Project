
// first express require garne then env file generate garne tespaci dotenv lai load garne using config() aani port gain garne db sanga conncet garne

// const express= require('express');
// const cors= require('cors');
// const app=express();
// const mongoose=require('mongoose');
// require('dotenv').config();
// const Port=process.env.PORT;
// const Mongo_URL= process.env.MONGO_URL;
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods:['GET','POST'],
//   credentials:true,
// }))
// app.use(express.json());
// const useRoutes=require('./routes/userRoutes');
// app.use('/api',useRoutes);
//  mongoose.connect(Mongo_URL).then(()=>{
//   console.log("Database is connected")
//   app.listen(Port,()=>{
//     console.log("The port has started",Port);
//  });
// }).catch((err)=>{
//   console.log("Caught an error",err);
// });

const express = require('express');
const cors= require('cors');
const app=express();
require('dotenv').config();
app.use(cors({
  origin:'http://localhost:3000',
  method:['GET','POST','PUT'],
  Credential:true,
}))
app.use(express.json());
const mongoose=require('mongoose');
const Url=process.env.MONGO_URL;
const Port= process.env.PORT;
mongoose.connect(Url).then(()=>{
  console.log("Database connceted");
  app.listen(Port,()=>{
    console.log("Port has started at:",Port);
  })
})