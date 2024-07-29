import mongoose, { Mongoose, Types } from "mongoose";

const Productschema = new mongoose.Schema({
    ProductDes:{
        Type: String,
        require: true,
    },
    ProductPrice:{
        Type:String,
        require:true,
        unique: true,
    },
    ProductRate:{
        Type:String,
        require:true,
        unique:true
    }
})
 
const Products=Mongoose.model('Products',Productschema)

export default Productschema;