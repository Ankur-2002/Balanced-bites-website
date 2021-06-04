import React, { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Home from './components/page/Home'
import About from './components/page/About'
import Contact from './components/page/Contact'
import Navbar from './components/Navbar'
import './App.css';

import img from '../src/Image/images/whatsapp-1.png'; 
 
import circle from '../src/Image/images/circle.svg';
import Service from './components/Service';
import Header from './components/Header';
import Footer from './components/Footer';
import Program from './components/Program';
import Newcards from './components/Newcards'
function App() {
 
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      console.log("loadingloading");
      setLoading(!isLoading);
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
      
        
      }
      else
      {
        console.log("element not found");
      }
    });
  }, []);
  
   
 

  if (isLoading) {
    console.log("Loading");
    return null; //app is not ready (fake request is in process)
  }/* eslint-enable */
  const pathname = window.location.pathname;
    
  return (
    <BrowserRouter>
    <Header></Header>
    <Navbar pname={pathname}/>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/About" component={About}/>
        <Route exact path = "/Contact" component={Contact}/>
        <Route exact path = "/Service" component={Service}/>
        <Route exact path ="/Program" component={Program} />
        <Route exact path ="/Newcards" component={Newcards}></Route>
        <Redirect to="/"/>
      </Switch>

      <Footer></Footer>
      <div  className="screen-bar">
      <img className="animates" src={circle}></img>
      <img className="animates1" src={circle}></img>
       <a href="https://wa.link/k2f045"><span><img src={img}></img></span></a>
    </div>
    </BrowserRouter>
  );
}

export default App;
