import User from "../models/userModel.js";
import generateToken from "../config/generateToken.js";


const registerUser = async(req, res) => {
try {
    console.log('requestBody' , req.body);
const {name, email, password, about, role} =req.body;
const userExists = await User.findOne({email});
if(userExists){
    res.status(400).json({
        result:"user already exist"
    })
}

const user = await User.create({

    name:name,
    email:email,
    password:password,
    about:about,
    role:role,
})
console.log('user in backend controller', user);


if (user){

    res.status(201).json({
     _id : user._id,
     name: user.name,
     email:user.email,
     about:about,
     role:user.role,
     result:"user created"


    })
}

    
} catch (error) {
    console.log('error' , error);
    
}
};

const loginUser = async (req, res) => {
    try {
        const {email,password}=req.body;
    const user = await User.findOne({email , password});
    console.log('user' ,user);
    if(user){
        res.status(200).json({
            _id: user._id,
            name:user.name,
            about:user.about,
            role:user.role,
            result:"login success",
            token: generateToken(user._id)
        })}
    else{
        res.status(401).json({
            result:"Login failed, Please login with correct Email ID and Password or Sign Up"
        })
    }        
        
    } catch (error) {
        console.log('error' , error);
        
    }
    

};



export { registerUser, loginUser};