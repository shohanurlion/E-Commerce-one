import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
   Route,
  RouterProvider,
} from "react-router-dom";
import Leyout from './Componnets/Root/Leyout';
import Home from './allpage/Home';
import Shoping from './Componnets/Pages/Shoping';
import ProductDitails from './Componnets/Pages/ProductDitails';



function App() {
const route=createBrowserRouter(createRoutesFromElements(
  <Route element={<Leyout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/shop' element={<Shoping/>}></Route>
    <Route path='/shop/:id' element={<ProductDitails/>}></Route>
  </Route>
))
    

  return (
    <>
   < RouterProvider router={route}/>
    </>
  )
}

export default App
