import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminPannel() {
  
  let [data, setData] = useState([]);

  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    let result = await axios.get("http://localhost:3000/api//getStudent");
    setData(result.data);
  }

  async function deleteStudent(id){
    console.log(id)
    await axios.delete(`http://localhost:3000/api/deleteStudent/${id}`)
    fetchStudentData()
  }

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-700   ">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        <span>S Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Father
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Mother
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Mobile
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Class
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white"
                      >
                        Edit Part
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 bg-gray-200 ">
                    {data.map((student, key) => (
                      <tr key={key}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {student.Name}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {student.Father}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {student.Mother}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {student.Age}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {student.Mobile}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {student.Address}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {student.Class}
                          </div>
                        </td>

                       

                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          <Link
                            type="button"
                            to={`/admin/viewdata/${student.id}`}
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            view
                          </Link>

                          <button
                            type="button"
                            onClick={() => deleteStudent(student.id)}
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            delete
                          </button>
                          
                          <Link
                            type="button"
                            to={`/admin/updateData/${student.id}`}
                            class="focus:outline-none text-black  bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                          >
                            update
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export default function AdminPannel() {
//   let [data, setData] = useState([])

//   useEffect(() => {
//     fetchStudentData()
//   },[])

//   async function fetchStudentData() {
//     let result = await axios.get("http://localhost:3000/api//getStudent");
//     setData(result.data);
//     console.log(result)
//   }

//   return (
//     <>
//       <section className="mx-auto w-full max-w-7xl px-4 py-4">
//         <div className="mt-6 flex flex-col">
//           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//               <div className="overflow-hidden border border-gray-200 md:rounded-lg">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         <span>Name</span>
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         Father
//                       </th>

//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         Mother
//                       </th>

//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         Age
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         Mobile
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         Address
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         Class
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
//                       >
//                         Edit Option
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200 bg-white">
//                     {data.map((student, key) => (
//                       <tr key={key}>
//                         <td className="whitespace-nowrap px-4 py-4">
//                           <div className="flex items-center">

//                             <div className="ml-4">
//                               <div className="text-sm font-medium text-gray-900">
//                                 {student.Name}
//                               </div>
//                             </div>
//                           </div>
//                         </td>

//                         <td className="whitespace-nowrap px-12 py-4">
//                           <div className="text-sm text-gray-900 ">
//                             {student.Father}
//                           </div>
//                         </td>

//                         <td className="whitespace-nowrap px-4 py-4">
//                           <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
//                             {student.Mother}
//                           </span>
//                         </td>
//                         <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
//                           {student.Age}
//                         </td>
//                         <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
//                           {student.Mobile}
//                         </td>
//                         <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
//                           {student.Address}
//                         </td>
//                         <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
//                           {student.Class}
//                         </td>

//                         <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
//                           <a href="#" className="text-gray-700">
//                             Edit
//                           </a>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
