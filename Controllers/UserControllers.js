// const students = require('../Models/user');

// // GET
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await students.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ message: "An error occurred", error: err.message });
//   }
// };

// // POST
// exports.postAllUsers = async (req, res) => {
//   try {
//     const { name, age, email, Gender } = req.body;
//     console.log("Incoming data:", { name, age, email, Gender }); 
//     if (!name || typeof name !== "string") {
//       return res.status(400).json({ message: "Enter valid name" });
//     }
//     const AgeNum = Number(age);
//     if (!age || isNaN(AgeNum)) {
//       return res.status(400).json({ message: "Enter valid age" });
//     }
//     if (!email || typeof email !== "string") {
//       return res.status(400).json({ message: "Enter valid email" });
//     }
//     if (!["Male", "female", "Others"].includes(Gender) || typeof Gender !== "string") {
//       return res.status(400).json({ message: "Enter valid Gender" });
//     }
//     const newUser = new students({ name, age: AgeNum, email, Gender });
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ message: "An error occurred in POST", error: err.message });
//   }
// };
// //Delete
// exports.deleteUser=async(req,res)=>{
//     try{
// const userId= req.params.id;
// const deleteUser= await students.findByIdAndDelete(userId);
// if(!deleteUser){
//     return res.status(400).json({error:"An error occures"})
// }
// res.status(200).json({Message:"User deleted successfully",deleteUser})
//     }
//     catch(err){
//         res.status(500).json({Message:"error deleting user", error:err.message})
//     }
// }


const Students= require('../Models/user')
//get all User
exports.getAllUsers=async(req,res)=>{
  try{
const users=await Students.find();
res.status(200).json({users})
  }
  catch(err){
    res.status(500).json({error:err.message});
  }
};
//get user by  ID
exports.getAllUsersbyid=async(req,res)=>{
  try{
const user=await Students.findById(req.params.id);
if(!user) return res.status(400).json({message:"User with this id didnot find"});
res.status(200).json({user});
  }
  catch(err){
    res.status(500).json({error:err.message})
  }
}
//updatebyID
exports.UpdateBYId=async (req,res)=>{
  try{
    const Users= await Students.findByIdAndUpdate(
      req.params.id,req.body,{new:true,runValidators:true}
    )
    if(!Users) return  res.status(400).json({message:"User doesnot find"})
      res.status(200).json({Users});
    }
  catch(err){
    res.status(500).json({error:err.message});
  }
  };
  //CREATE
  exports.postAllData=async(req,res)=>{
    try{
      const Pdata= new Students(req.body);// we have to create new PostData(pdata)  from client
      const Pnewdata= await Pdata.save();
      if(!Pnewdata) return res.status(400).json({message:"Data is not send while posting"});
      res.status(200).json({message:"Data posted successfully"})
    }
    catch(err){
      res.status(500).json({error:err.message})
    }
  };
  //Delete
  exports.deleteUsers=async(req,res)=>{
    try{
      const deleteUser= req.params.id;
      const deleteuid= await Students.findByIdAndDelete(deleteUser);
      if(!deleteuid) return res.status(400).json({message:"Id is not deleted"})
        res.status(200).json({message:"Id deleted successfully"})
    } catch(err){
  }
    res.status(500).json({error:err.message})
  };