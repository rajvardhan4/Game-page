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

        const data = await axios.get('http://localhost:4001/data')
        .then((res)=>setPro(res.data))
    }
    useEffect(()=>{
        sunil()
    },[])
    console.log(Pro);

  return (
    <div className="container mx-auto p-4 w-[400px] ">
    <ul className="space-y-4">
      {Pro.map((item) => (
        <li key={item.id} className="bg-white shadow-md rounded-lg p-4 flex justify-evenly">
        <img src={item.img} className="rounded-full w-[100px] h-[100px] object-cover" alt="" />
          <div className="text-lg font-semibold ">Name: {item.name}</div>
          <div className="text-gray-600">Gender: {item.gender}</div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Testing