import User from "../Model/User.model.js";


// user ko create karna ka liya 
async function UserAdd(req, res) {

    // ------------------ hum body sa user ka data laa rah ha 
    const {
        username, email, phone, password

    } = req.body


    // if(!username || !email || !phone || !password){
    //     res.status(400).json({
    //         massage:"all felid are requred"
    //     })
    // }
    
    try {

        // ------------------- user was created 
        const Users = await new User(
            {
                username, email, phone, password
            }
        )

        // ------------------- user was save 
        await Users.save()



        // 200 ok succesfull 
        // 500 server  issue 
        // 400 client

        res.status(200).json({
            massage: "user created succesfull ::",
            data: Users,
            success: true,
            error: false
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            massage: "Something wanted wrong ::",
            success: false,
            error: true
        })
    }
}

 

// ---------------- user ko get karna 
async function getuser(req,res){

 try {

// find user from user model 
const users = await  User.find()
    

     //--------------------cheack user is aviable our not
     if(!users){ // if user not found toh hum ya lagya ga [!]
       res.status(500).json({
           massage:"user not found 😕"
       })
     }
   
   // succecfully get user response
     res.status(200).json({
       massage:'user founded 😄',
       data:users,
       error:false,
       success:true, 
   
     })
   
    //  if any error in code 
 } catch (error) {
    console.log("error",error);
    res.status(500).json({
        massage:"something want wrong",
        error:true,
        success:false, 
    
      })
 }


}
export {UserAdd ,getuser}