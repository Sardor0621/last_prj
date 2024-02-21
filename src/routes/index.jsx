import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DropdownMenu from '../Layout';
import Vid_kontey from "../components/vid_kontey"
import Uslugi from "../components/uslugi"
import Layouts from '../Layout';
import { BrowserRouter, Link } from 'react-router-dom';
import Cofe from "../components/vid_kontey/cofe"



export default function Index() {
  return (
    <div>

 <Routes>
     <Route path='/' element={<Layouts/>}/>
     <Route path='/keytering' element={<Vid_kontey/>}/>
     <Route path='/uslugi' element={<Uslugi/>}/>
     <Route path='/cofe' element={<Cofe/>}/>
     
     
     
</Routes> 
    </div>
    
  )
}








