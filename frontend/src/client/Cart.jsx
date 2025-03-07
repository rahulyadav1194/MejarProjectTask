import React, { useContext, useEffect, useState } from 'react'
import { Trash, Heart } from 'lucide-react'
import axios from 'axios'

// import UserContext from '../context/Usercontext'


export default function Cart() {

let [data, setData] = useState([])

// let {setCount} =useContext(UserContext)
// let {login} = useContext(UserContext)


useEffect(()=>{
    fetchCartdata()
}, [])

async function fetchCartdata(){
    let result= await axios.get(`http://localhost:3000/api/getCart`)
    console.log(result)
    setData(result.data)

    // console.log(result.data.length)
    // setCount(result.data.length)

}


async function removeCart(id){
  let flag= confirm("Are you sure to delete item")
  if(flag){
    await axios.delete(`http://localhost:3000/api/deleteCart/${id}`)
    fetchCartdata()
    console.log(id)
  }
}


//  total amount count ke liye method hai

// let cost = data.reduce((acc, curent)=> acc + JSON.parse(curent.productPrice),0 )


  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2 ">
      <h2 className="text-3xl font-bold  text-lime-800">Your cart</h2>

      {/* <p className="mt-3 text-sm font-medium text-sky-400 bg-orange-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit
        praesentium incidunt.
      </p> */}

      <ul className="flex flex-col divide-y divide-gray-200">
        {data.map((data) => (
          <li key={data.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">

              {/* <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={data.imageSrc}
                alt={data.name}
              /> */}

              <div className="flex w-full flex-col justify-between pb-5 bg-stone-400">
                <div className="flex w-full justify-between space-x-2 pb-2 ">
                    
                  <div className="space-y-1  ">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8 text-fuchsia-900">{data.Name}</h3>
                    {/* <p className="text-sm">{product.color}</p> */}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold  leading-snug sm:pr-8">{data.Father}</h3>
                    {/* <p className="text-sm">{product.color}</p> */}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8 ">{data.Mother}</h3>
                    {/* <p className="text-sm">{product.color}</p> */}
                  </div>

                  <div className="text-right">
                    <h3 className="text-lg font-semibold ">{data.Age}</h3>
                  </div>

                    
                  <div className="text-right">
                    <h3 className="text-lg font-semibold ">{data.Mobile}</h3>
                  </div>
                  
                  <div className="text-right">
                    <h3 className="text-lg font-semibold ">{data.Address}</h3>
                  </div>
                  
                  <div className="text-right">
                    <h3 className="text-lg font-semibold ">{data.Class}</h3>
                  </div>

                </div>

                <div className="flex divide-x text-sm">
                  
                  <button 
                  type="button" 
                  onClick={()=>removeCart(data.id)}

                  className="flex items-center bg-rose-900 text-yellow-200 font-semibold rounded-2xl space-x-2 px-3 py-3 pl-0">
                    
                    <span>Remove</span>
                  </button>


                  <button type="button" className="flex items-center space-x-2 px-2 py-1 text-red-700">
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>

                </div>
              </div>

            </div>
          </li>
        ))}
      </ul>

      <div className="space-y-1 text-lime-900 text-right">
        <p>
          Total amount:
          {/* <span className="font-semibold"> {cost} </span> */}
        </p>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-md border bg-rose-400 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </button>
        <button
          type="button"
          className="rounded-md border bg-stone-400 border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </button> 
      </div>

    </div>
  )
}








