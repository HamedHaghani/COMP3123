const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const fs = require('fs');
const errorHandlerMiddleware = require('./errorHandlerMiddleware');



app.use(express.json());
/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req , res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
  
})
app.use('/',router)

router.get('/home', (req,res) => {
  res.send('This is home router');
});

/*
- Return all details from user.json file to client as JSON format
*/

router.get('/profile', (req, res) =>{
  fs.readFile('user.json', 'utf8',(err, data)=>{
    if (err){
      return res.status(500).json({message:'Error reading user file'})
    }
    res.json(JSON.parse(data));
  })
})


/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req, res) => {
  const {username , password} = req.body;

  if (!username || !password){
    return res.send('This is login router')
  }

  fs.readFile('user.json', 'utf-8', (err , data)=>{
    if (err){
      return res.status(500).json({message :'Error reading user file'});
    }
    const user = JSON.parse(data);

    if (username !== user.username){
      return res.json({
        status : false,
        message : 'User name is invalid'
      })
    }
    if (password !== user.password ){
      return res.json({
        status : false,
        message : 'password is invalid'
      })
    }

    return res.json({
      status : true,
      message : 'User is valid'
    })
  })


})
/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  res.send('This is logout router');
});

router.get('/logout/:username' , (req , res ) =>{
  const username = req.params;
  res.send(`<b>${username} successfully logout.</b>`);

})
/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.get('/error', (req, res) => {
  throw new Error('Something went wrong!'); 
});
app.use(errorHandlerMiddleware);



app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Web Server is listening at port '+ (process.env.port || 3000));