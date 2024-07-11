 let users = [
   { name: 'Sohel', mobile: '01712345678' },
   { name: 'Rony', mobile: '01812345670' },
   { name: 'Rasel', mobile: '01912345671' },
   { name: 'Shakib', mobile: '01912345000' },
   ,
 ];

 function createUser(req, res) {
   users.push(req.body);
   return res.json({
     message: 'User created successfully',
     users,
   });
 }

 function getAllUsers(req, res) {
   return res.json({
     users,
   });
 }

 function updateUser(req, res) {
   const { body } = req;
   const { name } = req.params;

   let userIndex = -1; // Initialize userIndex to -1
   for (let i = 0; i < users.length; i++) {
     if (name === users[i].name) {
       userIndex = i;
       break;
     }
   }

   if (userIndex === -1) {
     return res.status(404).json({
       message: 'User not found',
     });
   }

   users[userIndex] = Object.assign({}, users[userIndex], body); // Update the user object
   return res.json({
     message: 'Updated successfully',
     users,
   });
 }


function deleteUser(req, res) {
  const { name } = req.params;

  let userIndex = -1; // Initialize userIndex to -1
  for (let i = 0; i < users.length; i++) {
    if (name === users[i].name) {
      userIndex = i;
      break;
    }
  }

  if (userIndex === -1) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  users.splice(userIndex, 1); // Remove the user object
  return res.json({
    message: 'Deleted successfully',
    users,
  });
}
 module.exports = {
   createUser,
   getAllUsers,
   updateUser,
   deleteUser,
 };
