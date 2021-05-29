import React from 'react';
import Sdata from '../Data/Sdata';
import ServicesCards from './ServicesCard';
import logo from '../Image/pics/program-44.jpg'
const Service = () =>{

return (

  <div className=" container-fluid">
    <div className="row logo-for-service" style={{backgroundImage: `Url(${logo})` }}>
        <div className="col-12 our-programs-head" >
          {/* <div className="our-programs"> Our <span className='programs'>Programs</span></div> */}
         <div className="our-programs">
           <span className='programs borderbottom'>  Programs </span> 
            
          </div>
        </div>
        
    </div>
      <div className="p-4">
        <div className=" position-relative">
        <div className="text-center d-flex flex-column end-line">
        <span className="programs-head "><span  style={{color:"black", marginRight:"6px"}}>Our</span><span className="in-phone borderbottom">Programs</span></span>
        <span className="programs-head-des">Diet plans designed to meet everyone's every nutrition need.</span>
       
        </div>
        </div>
      </div>
    <div  className="row all-cards mt-5" >
      {
        Sdata.map( (value,index) => {
          return (
            <ServicesCards
            key = {index}
            num = {index}
            imgsrc = {value.imgsrc}
            title = {value.title}
            service = {value.service}
            ></ServicesCards>
          )

        })
      }



    </div>

  </div>

);
}

export default Service;
