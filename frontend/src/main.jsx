import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AdminPannel from './component/AdminPannel.jsx'
import AddStudent from './component/AddStudent.jsx'
import Viewdata from './component/Viewdata.jsx'
import UpdateStudent from './component/UpdateStudent.jsx'

import Home from './client/Home.jsx'
import ClientApp from './ClientApp.jsx'
import AdminLogin from './component/AdminLogin.jsx'
import Protected from './component/Protected.jsx'
import Cart from './client/Cart.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
 <>
 <Route path='/' element={<ClientApp/>}>
 <Route path='' element={<Home/>}/>
 <Route path='/cart' element={<Cart/>}/>
 
 </Route>

 
 <Route path='/admin' element={<App/>}>

<Route path='' element = { <Protected> <AdminPannel/> </Protected> }/>

<Route path='/admin/addstudent' element={ <Protected> <AddStudent/> </Protected> }/>

<Route path='/admin/viewdata/:id' element= {<Viewdata/>}/>
<Route path='/admin/updateData/:id' element={<UpdateStudent/>}/>
<Route path='/admin/adminlogin' element ={<AdminLogin/>}/>

    </Route>
 </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
