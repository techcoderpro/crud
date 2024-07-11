const express = require('express');
const blogRouter = require('./routes/blogRoute');
const profileRouter = require('./routes/profileRoute');
const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());

app.use('/blog',blogRouter); 
app.use('/profile', profileRouter); 
app.use('/user', userRouter);

const PORT = 5000;
app.listen(PORT, function () {
  console.log('App is Running')
});