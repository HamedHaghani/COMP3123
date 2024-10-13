const express =require('express');
const router = express.Router();
const UserModel = require("./models/users");

const jwt = require('jsonwebtoken');



router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
      
      let user = await UserModel.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
      
      
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new UserModel({ username, email, password: hashedPassword });
  
      await user.save();
      
      return res.status(201).json({ 
        message: 'User created successfully', 
        user_id: user._id 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server Error' });
    }
  });

 

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

   
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    return res.status(200).json({ 
      message: 'Login successful', 
      jwt_token: token 
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
});

  



module.exports = router;