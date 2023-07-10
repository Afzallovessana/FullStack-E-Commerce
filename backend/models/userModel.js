import mongoose from "mongoose";

const userSchema = mongoose.Schema({
name:{
    type: String,
    required:true,
    trim:true,
    maxLength:20
},
email:{
    type: String,
    required:true,
    unique:32,
},
password:{
    type: String,
    required:true,
},
about:{
    type: String,

},
role:{
    type: Number,
    default: 0

},
salt: String,
history:{
type:Array,
default:[]

}



},
{
timestamps:true,

}
)

// userSchema.methods.matchPassword = async function(enteredPaswword){
//     return password

// }
const User = mongoose.model('user', userSchema);

export default User;