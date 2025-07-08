const mongoose= require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:tru
    },
    email:{
        type:String,
        required:true,
        unique:true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']

    },
    Gender:{
        type:String,
        required:true,
        enum:['male','Female','Other'],
        message:'Gender must be male female or Other'
    },
    position:{
        type:String,
        required:true,
    },
});
console.log("Data is", UserSchema);
module.exports=mongoose.model('Students',UserSchema);


// const mongoose= require('mongoose');
// const StudentSchema=  new mongoose.Schema({
// FullName:{
//     type:String,
//     required:true,
// },
// Age:{
//     type:Number,
//     required:true,
// },
// Gender:{
//     type:String,
//     required:true,
// },
// email:{
//     type:String,
//     required:true,
//     unique:true,
// },})
// module.exports= mongoose.model('Student',StudentSchema)