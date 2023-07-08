import User from "../models/userModel.js";


const registerUser = async(req, res) => {
try {
    // console.log('requestBody' , req.body);
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

if (user){

    res.status(201).json({
     _id : user._id,
     name: user.name,
     email:user.email,
     about:about,
     role:user.role


    })
}

    
} catch (error) {
    console.log('error' , error);
    
}
};

const loginUser = (req, res) => {
    console.log('hello from login user')

};



export { registerUser, loginUser};