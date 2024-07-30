import Carsshop from "../Model/Cars.model.js";

async function CarsAdd(req, res) {
  const { Carsmodels, CarPrice, CarManu } = req.body;

  try {
    const carss = await new Carsshop({
      Carsmodels,
      CarPrice,
      CarManu,
    });
    await carss.save();

    res.status(200).json({
      massage: "Your car is prefect 👌",
      data: carss,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      massage: "Your car is baakwass 🤯",
      success: false,
      error: true,
    });
  }
}

export { CarsAdd };
