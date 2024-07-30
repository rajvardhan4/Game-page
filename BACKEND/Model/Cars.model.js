import mongoose, { Types } from "mongoose";

const Carsschema= new mongoose.Schema({
  Carsmodel:{
    type:String,
    require:true
  },
  CarPrice:{
    type:String,
    require:true,
  },
  CarManu:{
    type:String,
    require:true
  },

})

const Cars=mongoose.model('Cars',Carsschema)

export default Carsschema;