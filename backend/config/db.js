import mongoose from "mongoose";



function initDB() {
    // for already connected
    if(mongoose.connections[0].readystate) {
        console.log('connection already exist')
        return
    }
    // Connected
const uri= process.env.MONGO_URI;
console.log('uri', uri);

mongoose.connect(process.env.MONGO_URI,{});
mongoose.connection.on('connected' , () => {
    console.log('connected to a MongoDB')
})
// Error
mongoose.connection.on('error' , () => {
    console.log('Error While connecting to MongoDB')
})
}


export default initDB;