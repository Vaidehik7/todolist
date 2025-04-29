const User = require("../models/user.model")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")


const registerUser = async function(req, res){

    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json("All fields are required");
    }

    const userExists  = await User.findOne({ email });
    if(userExists)
        return res.status(400).json("User already exists! Please Log in")

    //create user
    const hash = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hash
    })

    //save user to database
    await newUser.save();

    //respond with success msg
    res.status(201).json("user created successfully")

}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const userExists = await User.findOne({ email });
    if (!userExists) {
        return res.status(400).json("User not exists! Please Register first");
    }

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, userExists.password);
    if (!isMatch) {
        return res.status(400).json("Invalid credentials");
    }

    // Generate JWT token
    const token = jwt.sign({ id: userExists._id }, "defwewwdawearsss", { expiresIn: '1h' });

    // Success response with token
    res.status(200).json({ message: "Login successful", token });
};



module.exports = {registerUser, loginUser};