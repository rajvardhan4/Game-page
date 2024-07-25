import React,{useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';


function Testing() {

    // fatch('http://localhost:4000/')
    // .then((data)=>data.json)
    // console.log(data.json);



    // const data = axios.get('http://localhost:4000/')
    // .then((res)=>console.log(res.data))
    // console.log(data);

    const [Pro , setPro]= useState([])

    async function sunil (){

        const data = await axios.get('http://localhost:4000/data')
        .then((res)=>setPro(res.data))
    }
    useEffect(()=>{
        sunil()
    },[])
    console.log(Pro);

  return (
    <div>

<div  className='w-52 bg-slate-950'>
{Pro.map((i)=>{
        <div key={i.id}>
            <div>{i.name}</div>
        </div>
     })}
</div>
    </div>
  )
}

export default Testing