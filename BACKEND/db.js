import mongoose from "mongoose";

async function mongodb(){
    try{
     await   mongoose.connect(process.env.MONGODB)
    }catch(error){
        console.log('errorrrrrr' , error);
    }

}

export default mongodb