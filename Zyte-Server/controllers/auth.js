import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from "../models/User.js"
 
//register 
export const register = async(req, res) =>{ 
    // calling mongodb  requires us to use async function  req is coming frm fe and res is going to fe  
try{
const {
    firstName, 
    lastName , 
    email, 
    password, 
    picturePath, 
    friends, 
    location, 
    occupation
} = req.body;


const salt = await bcrypt.genSalt();
const passwordHash = await bcrypt.hash(password , salt);
const newUser= new User({
    firstName, 
    lastName , 
    email, 
    password: passwordHash, 
    picturePath, 
    friends, 
    location, 
    occupation, 
    viewedProfile: Math.floor(Math.random() * 1000),
    impressions : Math.floor(Math.random()*10000)
});
const savedUser = await newUser.save(); 
res.status(201).json(savedUser) // 201 status code for created
}catch(err ){
    res.status(500).json({error: err.message}) // sending front end with error message
}
}

// Login function 

export const login = async (req , res) =>{
try {
    const {email , password} = req.body ;
    const user = await User.findOne({email : email})
    if (!user) return  res.status(400).json({message: "User does not exsist"})
    const isMatch = await bcrypt.compate(password , User.password) 
    if(!isMatch) return res.status(400).json({message: "invalid cred"})
    const token = jwt.sign({id: user._id} ,  process.env.JWT_SECRET);
    delete user.password ; 
    res.status(200).json({token , user});

    // this is basic verificationx


} catch (err) {
    res.status(500).json({error: err.message});
}
}