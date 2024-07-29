import User from "../Model/User.model.js";

async function UserAdd(req, res) {

    // ------------------ hum body sa user ka data laa rah ha 
    const {
        username, email, phone, password

    } = req.body


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

export {UserAdd}