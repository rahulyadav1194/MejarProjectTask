import React, { useEffect, useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  let navigation=useNavigate()
    let [data, setData] = useState([]);

    let [inp , setInp] = useState('')
    console.log(inp)

    useEffect(() => {
      fetchStudentData();
    }, []);
  
    async function fetchStudentData() {
      let result = await axios.get("http://localhost:3000/api/getStudent");
      setData(result.data);
    }



async function Rahul(){
  let result  = await axios.get('http://localhost:3000/api/getStudent')
  let final =result.data.filter((item)=>item.Name == 'Rahul')
  setData(final)
}

async function pappu(){
  let result  = await axios.get('http://localhost:3000/api/getStudent')
  let final =result.data.filter((item)=>item.Name == 'pappu')
  setData(final)
}

async function handleSearch(){
  let result = await axios.get(`http://localhost:3000/api/searchStudent/${inp}`) 
  setData(result.data)
}

async function saveCart(data){
  let result = await axios.post('http://localhost:3000/api/cartSave',{ 
    Name : data.Name,
    Father: data.Father,
    Mother: data.Mother,
    Age:data.Age,
    Mobile : data.Mobile,
    Address :data.Address,
    Class :data.Class
  })
  if(result.data==true){ 
    alert('student save in to cart!')
    navigation('/cart')
  }
  console.log(result.data)
}


  return (
<>

<aside className="fixed flex h-screen w-64 flex-col  overflow-y-auto border-r bg-black px-5 py-8">

      {/* <a href="#">
        <svg
          width="40"
          height="46"
          viewBox="0 0 50 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
            fill="white"
          />
        </svg>
      </a> */}

      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-5 text-xl font-semibold uppercase rounded-2xl text-white bg-rose-800" >Search</label>

            
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>

        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by student type ..." required onChange={(e)=>setInp(e.target.value)}/>

    </div>
</form>


        <button className='p-1 bg-gray-200 rounded-[10px] text-xl font-bold hover:bg-gray-400' onClick={handleSearch} >Search</button>
            

          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">Name</label>

            <button
            onClick={fetchStudentData}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">All</span>
            </button>

            <button
            onClick={Rahul}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Rahul</span>
            </button>

            <button
            onClick={pappu}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">pappu</span>
            </button>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Brush className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Themes</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wrench className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Setting</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>

    <div className='relative left-[300px] top-[70px] flex justify-evenly w-[1000px] flex-wrap bg-white gap-[30px]'>
    {data.map((data)=>(

// card ka keval rurtn ke under vala code uper vala nahi hoga
    <div className="w-[300px] rounded-md border bg-slate-300">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">Name:- {data.Name}</h1> <br />
      <h1 className="inline-flex items-center text-lg font-semibold">Father:-{data.Father}</h1> <br />
      <h1 className="inline-flex items-center text-lg font-semibold">Mother:- {data.Mother}</h1> <br />
      <h1 className="inline-flex items-center text-lg font-semibold">Age:- {data.Age}</h1> <br />
      <h1 className="inline-flex items-center text-lg font-semibold">Mobile:- {data.Mobile}</h1>
      <h1 className="inline-flex items-center text-lg font-semibold">Address:- {data.Address}</h1> <br />
      <h1 className="inline-flex items-center text-lg font-semibold">Class:- {data.Class}</h1>
      <br />


        <button
          type="button"
          onClick={()=>saveCart(data)}
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to cart
        </button>
      </div>
    </div>


    ))}
    </div>

</>
    
  )
}
