import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Viewdata() {

    let [data,setData] = useState([])

    let {id} = useParams()
    console.log(id)

    async function getdataById(){
        let result = await axios.get(`http://localhost:3000/api/getStudentById/${id}`)
        setData(result.data)
        console.log(result)
    }

    useEffect(()=>{
        getdataById()
    }, [])

  return (
<>
<div className='w-screen h-screen flex justify-center items-center' >
    {data.map((data)=>(

<div className="relative h-[400px] w-[300px] rounded-md">
<img
  src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  alt="AirMax Pro"
  className="z-0 h-full w-full rounded-md object-cover"
/>

{/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div> */}
<div className="p-4 bg-slate-400 ">

<h1 className="text-lg font-semibold"> Name:- <span className='text-bold text-2xl'>{data.Name}</span> </h1>
        <h1 className="text-lg font-semibold"> Father:- <span className='text-bold text-2xl'>{data.Father}</span></h1>
        <h1 className="text-lg font-semibold">Mother:- <span className='text-bold text-2xl'>{data.Mother}</span></h1>
        <h1 className="text-lg font-semibold"> Age:- <span className='text-bold text-2xl'>{data.Age}</span></h1>
        <h1 className="text-lg font-semibold"> Mobile:- <span className='text-bold text-2xl'>{data.Mobile}</span> </h1>
        <h1 className="text-lg font-semibold">Address:- <span className='text-bold text-2xl'>{data.Address}</span></h1>
        <h1 className="text-lg font-semibold">Class:- <span className='text-bold text-2xl'>{data.Class}</span></h1>

  {/* <p className="mt-2 text-sm text-gray-300">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
  </p>
   */}
  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
    View Profile &rarr;
  </button>
  
</div>
</div>


    ))}

</div>

</>
    

   
  )
}
