// console.log("helloo ");
// console.log("adsadsaadadadadaddas")
// console.log("rishi")

import express from 'express'
import Cors from 'cors'
import dotenv from "dotenv"
import mongodb from './db.js'
import { UserAdd } from './Controller/User.controller.js'
import {ProductAdd} from './Controller/Product.controller.js'


//-------------------------------------------------------//
// use for create sarver 
const app = express()
// Cors origin policy 
app.use(Cors())
// very very imp env file 
dotenv.config()
// make a port 
const PORT = 4001
//-------------------------------------------------------//


app.use(express.json())
// -------------  router
app.post('/adduser', UserAdd)
app.post('/proAdd',ProductAdd)

// {
//     "ProductDes":"this is nike shoee",
//     "ProductPrice":"2000.00",
//     "ProductRate":"5"
//   }

// get    ->  data bajna 
// post   ->  data lana 
// put    ->  update karna 
// delete ->  data delete karna

// app.get('/',(req,res)=>{
//     res.send('hello world rishi 🧡sdsdsd')
// })

app.get('/data', (req, res) => {
    // res.send('hello world rishi 🧡sdsdsd')
    const pro = [
        {
            id: '1',
            name: 'rishi',
            img: 'https://cdn.pixabay.com/photo/2024/01/07/11/17/welsh-corgi-8492879_1280.jpg'
        }
        ,
        {
            id: '2',
            name: 'sunil',
            img: 'https://cdn.pixabay.com/photo/2024/01/07/11/17/welsh-corgi-8492879_1280.jpg'
        }
        ,
        {
            id: '3',
            name: 'raj',
            img: 'https://cdn.pixabay.com/photo/2024/01/07/11/17/welsh-corgi-8492879_1280.jpg'
        }
    ]
    res.send(pro)
})
mongodb()
.then(()=>{
app.listen(process.env.PORT,()=>{ 
    console.log("mongoodb Canted hogyaaaa 🔥");
    console.log("server created",process.env.PORT);

})
})
