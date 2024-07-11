const router = require('express').Router();
const {createUser, getAllUsers, updateUser,deleteUser} =require('../controllers/userController')

//Create
router.post('/', createUser);

//Read
router.get('/',getAllUsers);

//Update
//localhost:5000/user/name
router.patch('/:name', updateUser);

//Delete
router.delete('/:name', deleteUser);


module.exports = router;