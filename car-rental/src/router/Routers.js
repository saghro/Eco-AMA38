import React from 'react'
import {Router,Route ,Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Carlist from '../pages/Carlist';
import CarDetails from '../pages/CarDetail';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import NotFound from '../pages/NotFound';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={< Navigate to="/home"/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cars' element={<Cars/>}/> 
      <Route path='/cars/:slug' element={<CarsDelails/>}/> 
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/blogs/:slug' element={<BloDelails/>}/> 
      <Route path='*' element={<NotFound/>}/>

    </Routes>
  )
}

export default Routers