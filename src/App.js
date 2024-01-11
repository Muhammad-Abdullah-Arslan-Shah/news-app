
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
pageSize = 9;
state={
progress:0
}
setProgress=(progress)=>{
this.setState({progress:progress});
}
 
  render() {
    return (
      <>
      
        <BrowserRouter>

        <LoadingBar
        height={3}
        color='#FF0000'
        progress={this.state.progress}
       
      />
        <Navbar title = "Today News" />
        
        <Routes>
        <Route  path="/title" element={ <News    setProgress = {this.setProgress} key= "title" country ="in" category = "general" pageSize = {this.pageSize} />}></Route>
        <Route  path="/home" element={ <News     setProgress = {this.setProgress} key= "home" country ="in" category = "general" pageSize ={this.pageSize}/>}></Route>
        <Route  path="/general" element={ <News  setProgress = {this.setProgress} key= "general" country ="in" category = "general" pageSize = {this.pageSize}/>}></Route>
        <Route  path="/business" element={ <News  setProgress = {this.setProgress} key= "busininess" country ="in" category = "business" pageSize ={this.pageSize}/>}></Route>
        <Route  path="/entertainment" element={ <News    setProgress = {this.setProgress} key= "entertainment" country ="in" category = "entertainment" pageSize ="{this.pageSize}"/>}></Route>
        <Route  path="/health" element={ <News    setProgress = {this.setProgress} key= "health" country ="in" category = "health" pageSize ={this.pageSize}/>}></Route>
        <Route  path="/science" element={ <News    setProgress = {this.setProgress} key= "science" country ="in" category = "science" pageSize ={this.pageSize}/>}></Route>
        <Route  path="/sports" element={ <News    setProgress = {this.setProgress} key= "sports" country ="in" category = "sports" pageSize ={this.pageSize}/>}></Route>
        <Route  path="/Technology" element={ <News    setProgress = {this.setProgress} key= "Technology" country ="in" category = "Technology" pageSize ={this.pageSize}/>}></Route>
      </Routes> 
       
       
        </BrowserRouter>
      </>
    )
  }
}


