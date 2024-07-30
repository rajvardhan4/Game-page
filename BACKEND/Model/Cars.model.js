import mongoose from "mongoose";

const Carsschema = new mongoose.Schema(
  {
    Carsmodels: {
      type: String,
      require: true,
    },
    CarPrice: {
      type: String,
      require: true,
    },
    CarManu: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const carss = mongoose.model("carss", Carsschema);

export default carss;
