// const express = require('express');
// const router=express.Router();
// const UserControllers=require('../Controllers/UserControllers')
// //Routes
// router.get('/users',UserControllers.getAllUsers)
// router.post('/user',UserControllers.postAllUsers)
// router.delete('/user/:id',UserControllers.deleteUser)

// module.exports=router;

const express= require('express');
const router=express.Router();
const Controllers= require('../Controllers/UserControllers')
router.get('/users', Controllers.getAllUsers);
router.get('/users/:id', Controllers.getAllUsersbyid);
router.post('/POST', Controllers.postAllData);
router.delete('/users/:id', Controllers.deleteUsers);  // delete should include ID
router.put('/users/:id', Controllers.UpdateBYId);      // update should include ID

module.exports=router;