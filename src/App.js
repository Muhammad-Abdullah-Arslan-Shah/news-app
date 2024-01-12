
import './App.css';

import React, {useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

 const App =()=> {
 let pageSize = 9;
const [progress,setPro] = useState(0);
const setProgress=(p)=>{
    setPro(p);
}
 
 
    return (
      <>
      
        <BrowserRouter>

        <LoadingBar
        height={3}
        color='#FF0000'
        progress={progress}
       
      />
        <Navbar title = "Today News" />
        
        <Routes>
        <Route  path="/title" element={ <News    setProgress = {setProgress} key= "title" country ="in" category = "general" pageSize = {pageSize} />}></Route>
        <Route  path="/home" element={ <News     setProgress = {setProgress} key= "home" country ="in" category = "general" pageSize ={pageSize}/>}></Route>
        <Route  path="/general" element={ <News  setProgress = {setProgress} key= "general" country ="in" category = "general" pageSize = {pageSize}/>}></Route>
        <Route  path="/business" element={ <News  setProgress = {setProgress} key= "busininess" country ="in" category = "business" pageSize ={pageSize}/>}></Route>
        <Route  path="/entertainment" element={ <News    setProgress = {setProgress} key= "entertainment" country ="in" category = "entertainment" pageSize ="{pageSize}"/>}></Route>
        <Route  path="/health" element={ <News    setProgress = {setProgress} key= "health" country ="in" category = "health" pageSize ={pageSize}/>}></Route>
        <Route  path="/science" element={ <News    setProgress = {setProgress} key= "science" country ="in" category = "science" pageSize ={pageSize}/>}></Route>
        <Route  path="/sports" element={ <News    setProgress = {setProgress} key= "sports" country ="in" category = "sports" pageSize ={pageSize}/>}></Route>
        <Route  path="/Technology" element={ <News    setProgress = {setProgress} key= "Technology" country ="in" category = "Technology" pageSize ={pageSize}/>}></Route>
      </Routes> 
       
       
        </BrowserRouter>
      </>
    )
  
}
export default App


