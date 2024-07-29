import mongoose, { Types } from "mongoose";

const Carsschema= new mongoose.Schema({
  Carsmodel:{
    Type:String,
    require:true
  },
  CarPrice:{
    Type:String,
    require:true,
  },
  CarManu:{
    Type:String,
    require:true
  },

})

const Cars=mongoose.model('Cars',Carsschema)

export default Carsschema;