import Product from '../Model/Product.model.js'

async function ProductAdd(req,res){
    const{
        ProductDes,ProductPrice,ProductRate
    }=req.body

  try {

    /// ------------------- user was created
    const Pro = await new Product(
            {
                ProductDes,ProductPrice,ProductRate
            }
        )
  
      //----------  for save 
      await Pro.save()

      res.status(200).json({
        massage: "Product is added :: 😎",
        data: Pro,
        success: true,
        error: false
    })
  } catch (error) {
    console.log("ERROR",error);
    res.status(500).json({
        massage: "Product is Not added :: 😒",
        success: false,
        error: true
    })
  }
}

export {ProductAdd}